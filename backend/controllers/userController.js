import WhichValidator from "../validators/authValidator.js";
import AuthServices from "../services/authServices.js";
import { setCookies, clearCookies } from "../utils/setCookies.js";
const auth = new AuthServices();

class UserControllers {
  registerController = async (req, res) => {
    try {
      const data = req.body;
      console.log(data);
      const validationResult = WhichValidator.usingValidator("register", data);

      if (!validationResult.success) {
        return res.status(400).json({
          message: "Validation failed!",
          errors: validationResult.error.issues,
        });
      }
      const user = await auth.registerService(validationResult.data);
      console.log(user);
      return res.status(201).json({
        message: "User is created successfully!",
        user,
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
        error: error.message,
      });
    }
  };

  loginController = async (req, res) => {
    try {
      const data = req.body;
      const validationResult = WhichValidator.usingValidator("login", data);

      if (!validationResult.success) {
        return res.status(400).json({
          message: "Validation failed!",
          error: validationResult.error.issues,
        });
      }

      const tokens = await auth.loginService(validationResult.data);
      console.log(tokens);

      setCookies(res, tokens);

      return res.status(200).json({
        message: "User is logged in!",
        tokens,
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error!",
        error: error.message,
      });
    }
  };

  logoutController = async (req, res) => {
    clearCookies(res);
    return res.status(200).json({ message: "You are logged out!" });
  };
}

export default UserControllers;
