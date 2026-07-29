import express from "express";
import UserControllers from "../controllers/userController.js";
import verifyRToken from "../middleware/refreshToken.js";
import AuthenticationFunctions from "../middleware/auth.js";

const userCtrl = new UserControllers();
const userRouter = express.Router();

console.log("Loading");

userRouter.route("/register").post(userCtrl.registerController);
userRouter.route("/logout").post(userCtrl.logoutController);
userRouter
  .route("/login")
  .post(AuthenticationFunctions.checkLoginAuth, userCtrl.loginController);

export default userRouter;
