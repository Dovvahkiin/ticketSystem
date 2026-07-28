import express from "express";
import UserControllers from "../controllers/userController.js";

const userCtrl = new UserControllers();
const userRouter = express.Router();

console.log("LOading");

userRouter.route("/register").post(userCtrl.registerController);

export default userRouter;
