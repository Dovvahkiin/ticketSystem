import z from "zod";

class AuthValidator {
  static emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  static RegisterValidator() {
    return z.object({
      username: z
        .string()
        .min(4, "Username must have at least 4 characters")
        .max(20, "Username is too long"),

      password: z.string().min(8, "Password must have at least 8 characters"),

      email: z
        .string()
        .min(1, "Email is required")
        .email()
        .regex(this.emailRegex, "Invalid email address"),
    });
  }

  static LoginValidator() {
    return z.object({
      username: z.string().min(4, "Username must have at least 4 characters"),

      password: z.string().min(8, "Password must have at least 8 characters"),
    });
  }
}

export default AuthValidator;
