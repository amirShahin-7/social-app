import * as zod from "zod";

export const schema = zod.object({
  name: zod
    .string()
    .nonempty("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(25, "Name must be at most 25 characters"),
  email: zod.email("Enter a valid email address"),
  password: zod
    .string()
    .nonempty("Password is required")
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
    ),
  rePassword: zod.string().min(1, "Confirm your password"),
  dateOfBirth: zod.coerce.date().refine(
    (date) => {
      const today = new Date();
      if (date > today) return false;

      let age = today.getFullYear() - date.getFullYear();
      const monthDiff = today.getMonth() - date.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < date.getDate())
      ) {
        age--;
      }

      return age >= 13;
    },
    {
      message: "You must be at least 13 years old",
    }
  ),
  gender: zod.enum(["male", "female"], {
    errorMap: () => ({ message: "Gender is required" }),
  }),
});

export const loginSchema = zod.object({
  email: zod.email("Enter a valid email address"),
  password: zod
    .string()
    .nonempty("Password is required")
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
    ),
});

export const profileSchema = zod.object({
  password: zod
    .string()
    .nonempty("Password is required")
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
    ),
  newPassword: zod
    .string()
    .nonempty("New Password is required")
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
    ),
});
