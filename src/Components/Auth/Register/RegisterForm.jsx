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
import { schema } from "../AuthSchema";
import { authAPI } from "../../../Services/authServices";
import { HiOutlineSparkles } from "react-icons/hi2";

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
    reset,
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
    const res = await authAPI(values, "signup");
    setIsLoading(false);
    if (res.message == "success") {
      toast.success(res.message);
      reset();
      setTimeout(() => {
        navigate("/auth/login");
      }, 3000);
    } else {
      toast.error(res);
    }
  }

  return (
    <>
      <section className="bg-slate-800/60 backdrop-blur-md border border-white/10 lg:w-7/10 mx-auto p-8 rounded-3xl my-12 lg:my-0 shadow-2xl shadow-black/20">
        <div className=" text-center space-y-3 py-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-2 border border-white/5">
            <HiOutlineSparkles className="text-2xl text-purple-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">Create Account</h2>
          <span className="text-slate-400">
            Already have an account?
            <Link
              className="text-blue-400 ml-2 hover:text-blue-300 font-medium transition-colors"
              to={"/auth/login"}
            >
              Sign in
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
          <span className="relative z-10 bg-slate-800/0 px-4 text-sm text-slate-500 font-medium ">
            or continue with email
          </span>
        </div>

        <form
          onSubmit={handleSubmit(handleUser)}
          className="flex flex-col space-y-4"
        >
          <Input
            labelPlacement="outside"
            label="Full Name"
            type="text"
            {...register("name")}
            isClearable={true}
            isInvalid={errors.name ? true : false}
            errorMessage={errors.name?.message}
            variant="bordered"
            placeholder="Enter your full name"
            startContent={<FaUser className="text-slate-400" />}
            size="lg"
            color="white"
            classNames={{
              label: "text-white/60 mb-2",
              input:
                "group-data-[has-value=true]:text-green-300 [&:-webkit-autofill]:[-webkit-text-fill-color:white]",
              inputWrapper:
                "bg-slate-900/50 border-white/10 data-[hover=true]:border-blue-500/50 group-data-[focus=true]:border-blue-500",
              clearButton: "text-slate-500",
            }}
          />
          <Input
            labelPlacement="outside"
            label="Email Address"
            type="email"
            {...register("email")}
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
            isClearable={true}
            variant="bordered"
            placeholder="name@example.com"
            startContent={<IoIosMail className="text-slate-400 text-xl" />}
            size="lg"
            color="white"
            classNames={{
              label: "text-white/60 mb-2",
              input:
                "group-data-[has-value=true]:text-green-300 [&:-webkit-autofill]:[-webkit-text-fill-color:white]",
              inputWrapper:
                "bg-slate-900/50 border-white/10 data-[hover=true]:border-blue-500/50 group-data-[focus=true]:border-blue-500",
              clearButton: "text-slate-500",
            }}
          />
          <div className="flex gap-4">
            <Input
              className="flex-1"
              labelPlacement="outside"
              label="Password"
              type={showPass == false ? "password" : "text"}
              {...register("password")}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
              variant="bordered"
              placeholder="Create password"
              startContent={<FaLock className="text-slate-400" />}
              color="white"
              endContent={
                showPass ? (
                  <FaEye
                    onClick={() => setShowPass(!showPass)}
                    className="text-slate-400 cursor-pointer hover:text-white"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => setShowPass(!showPass)}
                    className="text-slate-400 cursor-pointer hover:text-white"
                  />
                )
              }
              size="lg"
              classNames={{
                label: "text-white/60 mb-2",
                input:
                  "group-data-[has-value=true]:text-green-300 [&:-webkit-autofill]:[-webkit-text-fill-color:white]",
                inputWrapper:
                  "bg-slate-900/50 border-white/10 data-[hover=true]:border-blue-500/50 group-data-[focus=true]:border-blue-500",
              }}
            />
            <Input
              className="flex-1"
              labelPlacement="outside"
              label="Confirm Password"
              type={showRePass == false ? "password" : "text"}
              {...register("rePassword")}
              isInvalid={
                !!errors.rePassword ||
                (touchedFields.rePassword && !passwordsMatch && true)
              }
              description={
                rePassword && !errors.rePassword ? (
                  passwordsMatch ? (
                    <span className="text-green-300 text-xs flex items-center gap-1 mt-1">
                      ✓ Match
                    </span>
                  ) : (
                    <span className="text-red-500 text-xs flex items-center gap-1 mt-1">
                      ⚠ No match
                    </span>
                  )
                ) : null
              }
              errorMessage={errors.rePassword?.message}
              endContent={
                showRePass ? (
                  <FaEye
                    onClick={() => setShowRePass(!showRePass)}
                    className="text-slate-400 cursor-pointer hover:text-white"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => setShowRePass(!showRePass)}
                    className="text-slate-400 cursor-pointer hover:text-white"
                  />
                )
              }
              variant="bordered"
              placeholder="Confirm password"
              startContent={<FaLock className="text-slate-400" />}
              size="lg"
              color="white"
              classNames={{
                label: "text-white/60 mb-2",
                input: "text-white group-data-[has-value=true]:text-green-300",
                inputWrapper:
                  "bg-slate-900/50 border-white/10 data-[hover=true]:border-blue-500/50 group-data-[focus=true]:border-blue-500",
              }}
            />
          </div>

          <div className="flex items-center flex-wrap gap-4">
            <Input
              labelPlacement="outside"
              label="Date of birth"
              type="date"
              {...register("dateOfBirth", {
                onBlur: () => {
                  trigger("dateOfBirth");
                },
              })}
              isInvalid={!!errors.dateOfBirth}
              errorMessage={errors.dateOfBirth?.message}
              variant="bordered"
              startContent={<FaBirthdayCake className="text-slate-400" />}
              size="lg"
              color="white"
              isClearable={true}
              className="flex-1"
              classNames={{
                label: "text-white/60 mb-2",
                input: `text-white/60`,
                inputWrapper:
                  "bg-slate-900/50 border-white/10 data-[hover=true]:border-blue-500/50 group-data-[focus=true]:border-blue-500",
                clearButton: "text-slate-500",
              }}
            />
            <Select
              aria-label="Gender"
              label="Gender"
              {...register("gender")}
              isInvalid={!!errors.gender}
              errorMessage={errors.gender?.message}
              variant="bordered"
              labelPlacement="outside"
              placeholder="Select gender"
              startContent={<FaVenusMars className="text-slate-400 text-lg" />}
              size="lg"
              color="white"
              isClearable={true}
              className="flex-1"
              classNames={{
                label: "text-white/60 mb-2",
                value:
                  "text-white/60 group-data-[has-value=true]:text-green-300",
                trigger:
                  "bg-slate-900/50 border-white/10 data-[hover=true]:border-blue-500/50 group-data-[focus=true]:border-blue-500",
                popoverContent:
                  "bg-slate-800 border border-white/10 text-white",
                clearButton: "text-slate-500",
              }}
            >
              <SelectItem
                key={"male"}
                className="text-slate-400 data-[hover=true]:bg-slate-700 data-[hover=true]:text-white"
              >
                Male
              </SelectItem>
              <SelectItem
                key={"female"}
                className="text-slate-400 data-[hover=true]:bg-slate-700 data-[hover=true]:text-white"
              >
                Female
              </SelectItem>
            </Select>
          </div>
          <Button
            type="submit"
            className="w-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg  hover:scale-[1.02] transition-all py-6 mt-4 disabled:opacity-30"
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
