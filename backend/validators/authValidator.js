import z from "zod";

class AuthValidator {
  static registerValidator(data) {
    const registerSchema = z.object({
      username: z
        .string()
        .min(4, "Username must have at least 4 characters")
        .max(20, "Username is too long"),

      password: z.string().min(8, "Password must have at least 8 characters"),

      email: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email address"),
    });
    return registerSchema.safeParse(data);
  }

  static loginValidator(data) {
    const loginSchema = z.object({
      username: z.string().min(4, "Username must have at least 4 characters"),

      password: z.string().min(8, "Password must have at least 8 characters"),
    });

    return loginSchema.safeParse(data);
  }
}

export default AuthValidator;
