import { Button, Input } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaFacebook, FaGoogle, FaLock } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";
import { logUser } from "../../../Services/AuthServices";
import { toast } from "react-toastify";
import { loginSchema } from "../AuthSchema";

const LoginForm = () => {
  const { setToken, isLoading, setIsLoading, showPass, setShowPass } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
    mode: "all",
    reValidateMode: "onChange",
  });
  const {
    handleSubmit,
    register,

    formState: { errors, isValid },
  } = form;

  async function handleUser(values) {
    setIsLoading(true);
    const res = await logUser(values);
    setIsLoading(false);
    if (res.message == "success") {
      localStorage.setItem("userToken", res.token);
      setToken(res.token);
      toast.success(res.message);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }
  return (
    <>
      <section className="bg-white lg:w-6/10 mx-auto  p-6 rounded-3xl my-12 lg:my-0">
        <div className=" text-center space-y-3 py-3">
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <span>
            You Don't Have an Account ?
            <Link className="text-blue-500 ml-2" to={"/auth/register"}>
              Sign Up
            </Link>
          </span>
        </div>
        <div className="flex items-center flex-wrap justify-center gap-4">
          <Button
            color="danger"
            variant="bordered"
            className="px-12 hover:scale-110 transition"
          >
            <FaGoogle />
            Google
          </Button>
          <Button
            color="primary"
            variant="shadow"
            className="px-12 hover:scale-110 transition"
          >
            <FaFacebook />
            Facebook
          </Button>
        </div>
        <p className="relative text-center text-gray-500/80 text-sm py-5 after:hidden after:absolute after:sm:block  after:h-0.5 after:w-35 after:top-1/2 after:right-0 after:bg-linear-to-r after:from-transparent after:via-gray-300/70 after:to-transparent before:absolute before:hidden before:sm:block   before:h-0.5 before:w-35 before:top-1/2 before:left-0 before:bg-linear-to-l before:from-transparent before:via-gray-300/70 before:to-transparent">
          or continue with email
        </p>
        <form
          onSubmit={handleSubmit(handleUser)}
          className="flex flex-col  space-y-3 flex-wrap"
        >
          <Input
            labelPlacement="outside-top"
            label="Email Address"
            type="email"
            {...register("email")}
            isInvalid={Boolean(errors.email)}
            errorMessage={errors.email?.message}
            isClearable={true}
            variant="bordered"
            color="primary"
            placeholder="name@example.com"
            startContent={<IoIosMail className="text-gray-500 mr-2 text-xl" />}
            size="lg"
          />
          <Input
            labelPlacement="outside-top"
            label="Password"
            type={showPass == false ? "password" : "text"}
            {...register("password")}
            isInvalid={Boolean(errors.password)}
            errorMessage={errors.password?.message}
            variant="bordered"
            color="primary"
            placeholder="Enter your password"
            startContent={<FaLock className="text-gray-500 mr-2" />}
            endContent={
              showPass ? (
                <FaEye
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                  className="text-gray-700 ml-2 cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                  className="text-gray-700 ml-2 cursor-pointer"
                />
              )
            }
            size="lg"
          />

          <Button
            type="submit"
            color="primary"
            variant="shadow"
            className="my-3 disabled:bg-linear-to-r disabled:from-gray-500 disabled:via-gray-300 disabled:to-gray-100 disabled:shadow-gray-300 disabled:cursor-not-allowed"
            size="lg"
            disabled={isLoading || !isValid}
            isLoading={isLoading}
          >
            Login
          </Button>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
