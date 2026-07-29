import { parse } from "dotenv";
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
    const parseData = registerSchema.safeParse(data);
    return parseData;
  }

  static loginValidator(data) {
    const loginSchema = z.object({
      username: z.string().min(4, "Username must have at least 4 characters"),

      password: z.string().min(8, "Password must have at least 8 characters"),
    });

    const parseData = loginSchema.safeParse(data);
    return parseData;
  }
}

class WhichValidator extends AuthValidator {
  static usingValidator(type, data) {
    if (type === "login") {
      return this.loginValidator(data);
    } else if (type === "register") {
      return this.registerValidator(data);
    }
  }
}

export default WhichValidator;
