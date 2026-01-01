import { Button, Input, Select, SelectItem } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { FaBirthdayCake, FaEye, FaEyeSlash } from "react-icons/fa";
import {
  FaFacebook,
  FaGoogle,
  FaLock,
  FaUser,
  FaVenusMars,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthContext";
import { addUser } from "../../../Services/AuthServices";
import { schema } from "../AuthSchema";

const RegisterForm = () => {
  const { isLoading, setIsLoading, showPass, setShowPass } =
    useContext(AuthContext);
  const [showRePass, setShowRePass] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    trigger,
    control,

    formState: { errors, isValid, touchedFields },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "",
      gender: "",
    },
    resolver: zodResolver(schema),
    mode: "all",
    reValidateMode: "onChange",
  });

  const password = useWatch({ control, name: "password" });
  const rePassword = useWatch({ control, name: "rePassword" });
  const passwordsMatch = password && rePassword && password === rePassword;

  async function handleUser(values) {
    setIsLoading(true);
    const res = await addUser(values);
    setIsLoading(false);
    if (res.message == "success") {
      toast.success(res.message);
      setTimeout(() => {
        navigate("/auth/login");
      }, 3000);
    }
  }

  return (
    <>
      <section className="bg-white lg:w-6/10 mx-auto  p-6 rounded-3xl my-12 lg:my-0">
        <div className=" text-center space-y-3 py-3">
          <h2 className="text-3xl font-bold">Create Account</h2>
          <span>
            Already Have Account ?
            <Link className="text-blue-500 ml-2" to={"/auth/login"}>
              Sign in
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
            label="Full Name"
            type="text"
            {...register("name")}
            isClearable={true}
            isInvalid={errors.name ? true : false}
            errorMessage={errors.name?.message}
            variant="bordered"
            color="primary"
            placeholder="Enter your full name"
            startContent={<FaUser className="text-gray-500 mr-2" />}
            size="lg"
          />
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
            placeholder="Create a strong password"
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
          <Input
            labelPlacement="outside-top"
            label="Confirm Password"
            type={showRePass == false ? "password" : "text"}
            {...register("rePassword")}
            isInvalid={Boolean(
              errors.rePassword ||
                (touchedFields.rePassword && !passwordsMatch && true)
            )}
            description={
              rePassword && !errors.rePassword ? (
                passwordsMatch ? (
                  <span className="text-green-500 text-xs flex items-center gap-1">
                    ✓ Passwords match
                  </span>
                ) : (
                  <span className="text-orange-500 text-xs flex items-center gap-1">
                    ⚠ Passwords do not match
                  </span>
                )
              ) : null
            }
            errorMessage={errors.rePassword?.message}
            endContent={
              showRePass ? (
                <FaEye
                  onClick={() => {
                    setShowRePass(!showRePass);
                  }}
                  className="text-gray-700 ml-2 cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => {
                    setShowRePass(!showRePass);
                  }}
                  className="text-gray-700 ml-2 cursor-pointer"
                />
              )
            }
            variant="bordered"
            color="primary"
            placeholder="Re-enter your password"
            startContent={<FaLock className="text-gray-500 mr-2" />}
            size="lg"
          />

          <div className="flex items-center flex-wrap  gap-3">
            <Input
              labelPlacement="outside-top"
              label="Date of birth"
              type="date"
              {...register("dateOfBirth", {
                onBlur: () => {
                  trigger("dateOfBirth");
                },
              })}
              isInvalid={Boolean(errors.dateOfBirth)}
              errorMessage={errors.dateOfBirth?.message}
              isClearable={true}
              variant="bordered"
              color="primary"
              startContent={<FaBirthdayCake className="text-gray-500 mr-2" />}
              size="lg"
              className="flex-1"
            />
            <Select
              aria-hidden="false"
              label="Gender"
              {...register("gender")}
              isInvalid={Boolean(errors.gender)}
              errorMessage={errors.gender?.message}
              isClearable={true}
              variant="bordered"
              color="primary"
              labelPlacement="outside-top"
              placeholder="Select your gender"
              startContent={
                <FaVenusMars className="text-gray-500 mr-2 text-xl" />
              }
              size="lg"
              className="flex-1"
            >
              <SelectItem key={"male"}>Male</SelectItem>
              <SelectItem key={"female"}>Female</SelectItem>
            </Select>
          </div>
          <Button
            type="submit"
            color="primary"
            variant="shadow"
            className="my-3 disabled:bg-linear-to-r disabled:from-gray-500 disabled:via-gray-300 disabled:to-gray-100 disabled:shadow-gray-300 disabled:cursor-not-allowed"
            size="lg"
            disabled={isLoading || !isValid || !passwordsMatch}
            isLoading={isLoading}
          >
            Create Account
          </Button>
        </form>
      </section>
    </>
  );
};

export default RegisterForm;
