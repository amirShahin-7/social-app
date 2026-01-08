import { Button, Input } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaFacebook, FaGoogle, FaLock } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";
import { toast } from "react-toastify";
import { loginSchema } from "../AuthSchema";
import { authAPI } from "../../../Services/authServices";
import { queryClient } from "../../../App";
import { HiOutlineSparkles } from "react-icons/hi2";

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
    const res = await authAPI(values, "signin");
    setIsLoading(false);
    if (res.message == "success") {
      localStorage.setItem("userToken", res.token);
      setToken(res.token);
      toast.success("Welcome back!");
      queryClient.invalidateQueries();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      toast.error(res);
    }
  }
  return (
    <>
      <section className="bg-slate-800/60 backdrop-blur-md border border-white/10 lg:w-6/10 mx-auto p-8 rounded-3xl my-12 lg:my-0 shadow-2xl shadow-black/20">
        <div className=" text-center space-y-3 py-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-2 border border-white/5">
            <HiOutlineSparkles className="text-2xl text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
          <span className="text-slate-400">
            Don't have an account?
            <Link className="text-blue-400 ml-2 hover:text-blue-300 font-medium transition-colors" to={"/auth/register"}>
              Sign Up
            </Link>
          </span>
        </div>
        <div className="flex items-center flex-wrap justify-center gap-4 mt-6">
          <Button
            className="flex-1 bg-white text-gray-800 font-semibold border-none hover:bg-gray-100 transition shadow-lg"
            startContent={<FaGoogle className="text-red-500 text-lg" />}
            size="lg"
          >
            Google
          </Button>
          <Button
            className="flex-1 bg-[#1877F2] text-white font-semibold border-none hover:bg-[#166fe5] transition shadow-lg"
            startContent={<FaFacebook className="text-white text-lg" />}
            size="lg"
          >
            Facebook
          </Button>
        </div>

        <div className="relative text-center my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <span className="relative z-10 bg-slate-800/0 px-4 text-sm text-slate-500 font-medium bg-[#1e293b]">or continue with email</span>
        </div>

        <form
          onSubmit={handleSubmit(handleUser)}
          className="flex flex-col space-y-5"
        >
          <Input
            labelPlacement="outside"
            label="Email Address"
            type="email"
            {...register("email")}
            isInvalid={Boolean(errors.email)}
            errorMessage={errors.email?.message}
            isClearable={true}
            variant="faded"
            placeholder="name@example.com"
            startContent={<IoIosMail className="text-slate-400 text-xl" />}
            size="lg"
            classNames={{
              label: "!text-slate-300 mb-2",
              input: "text-white group-data-[has-value=true]:text-white",
              inputWrapper: "bg-slate-900/50 border-white/10 data-[hover=true]:border-blue-500/50 group-data-[focus=true]:border-blue-500",
              innerWrapper: "bg-transparent",
            }}
          />
          <Input
            labelPlacement="outside"
            label="Password"
            type={showPass == false ? "password" : "text"}
            {...register("password")}
            isInvalid={Boolean(errors.password)}
            errorMessage={errors.password?.message}
            variant="faded"
            placeholder="Enter your password"
            startContent={<FaLock className="text-slate-400" />}
            endContent={
              showPass ? (
                <FaEye
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                  className="text-slate-400 cursor-pointer hover:text-white transition-colors"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                  className="text-slate-400 cursor-pointer hover:text-white transition-colors"
                />
              )
            }
            size="lg"
            classNames={{
              label: "!text-slate-300 mb-2",
              input: "text-white group-data-[has-value=true]:text-white",
              inputWrapper: "bg-slate-900/50 border-white/10 data-[hover=true]:border-blue-500/50 group-data-[focus=true]:border-blue-500",
            }}
          />

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all py-6 mt-2"
            size="lg"
            disabled={isLoading || !isValid}
            isLoading={isLoading}
          >
            Sign In
          </Button>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
