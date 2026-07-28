import AuthValidator from "../validators/authValidator.js";
import AuthServices from "../services/authServices.js";
const auth = new AuthServices();

class UserControllers {
  registerController = async (req, res) => {
    try {
      const data = req.body;
      console.log(data);
      const validationResult = AuthValidator.registerValidator(data);

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
}

export default UserControllers;
