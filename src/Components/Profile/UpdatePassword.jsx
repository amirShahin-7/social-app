import { Button, Input } from "@heroui/react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../Context/AuthContext";
import { changePassAPI } from "../../Services/authServices";
import { profileSchema } from "../Auth/AuthSchema";

const UpdatePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const { setToken } = useContext(AuthContext);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      password: "",
      newPassword: "",
    },
    resolver: zodResolver(profileSchema),
    mode: "all",
    reValidateMode: "onChange",
  });

  async function handlePass(values) {
    setIsLoading(true);
    const res = await changePassAPI(values, "change-password");
    setIsLoading(false);
    if (res.message === "success") {
      toast.success("Your Password Changed Successfully");
      localStorage.setItem("userToken", res.token);
      setToken(res.token);
      reset();
    } else {
      toast.error(res);
    }
  }

  return (
    <div className="theme-card rounded-3xl shadow-xl overflow-hidden p-6 w-full mb-8 md:mb-0">
      <h3 className="text-xl font-semibold  mb-6 border-b border-white/10 pb-4 bg-linear-to-r from-[#005acd] via-[#0093cb] to-[#005acd] bg-clip-text text-transparent dark:text-white">
        Change Password
      </h3>

      <form onSubmit={handleSubmit(handlePass)} className="flex flex-col gap-5">
        <Input
          label="Current Password"
          labelPlacement="outside"
          placeholder="Enter current password"
          type={!showPass ? "password" : "text"}
          {...register("password")}
          isInvalid={!!errors.password}
          errorMessage={errors.password?.message}
          variant="bordered"
          radius="full"
          size="lg"
          color="primary"
          classNames={{
            label:
              " bg-linear-to-r from-[#005acd] via-[#0093cb] to-[#005acd] bg-clip-text text-transparent dark:text-white",
            inputWrapper:
              "bg-white dark:bg-slate-900/50 border-[#6dd7fd]/30 dark:border-blue-500",
            input: "theme-text-primary",
          }}
          startContent={<FaLock className="text-slate-500" />}
          endContent={
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="focus:outline-none"
            >
              {showPass ? (
                <FaEye className="text-slate-400 hover:text-white transition-colors" />
              ) : (
                <FaEyeSlash className="text-slate-400 hover:text-white transition-colors" />
              )}
            </button>
          }
        />

        <Input
          label="New Password"
          labelPlacement="outside"
          placeholder="Enter new password"
          type={!showNewPass ? "password" : "text"}
          {...register("newPassword")}
          isInvalid={!!errors.newPassword}
          errorMessage={errors.newPassword?.message}
          variant="bordered"
          radius="full"
          size="lg"
          color="primary"
          classNames={{
            label:
              " bg-linear-to-r from-[#005acd] via-[#0093cb] to-[#005acd] bg-clip-text text-transparent dark:text-white",
            inputWrapper:
              "bg-white dark:bg-slate-900/50 border-[#6dd7fd]/30 dark:border-blue-500",
            input: "theme-text-primary",
          }}
          startContent={<FaLock className="text-slate-500" />}
          endContent={
            <button
              type="button"
              onClick={() => setShowNewPass(!showNewPass)}
              className="focus:outline-none"
            >
              {showNewPass ? (
                <FaEye className="text-slate-400 hover:text-white transition-colors" />
              ) : (
                <FaEyeSlash className="text-slate-400 hover:text-white transition-colors" />
              )}
            </button>
          }
        />

        <Button
          type="submit"
          className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mt-2 shadow-lg shadow-purple-500/20"
          size="lg"
          radius="lg"
          isDisabled={isLoading || !isValid}
          isLoading={isLoading}
        >
          Update Password
        </Button>
      </form>
    </div>
  );
};

export default UpdatePassword;
