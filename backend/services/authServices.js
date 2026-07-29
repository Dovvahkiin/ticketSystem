import User from "../models/userModel.js";
import chalk from "chalk";
import bcrypt from "bcrypt";
import JWTService from "./jwtServices.js";
import { check } from "zod";

const saltRounds = 5;

class AuthServices {
  registerService = async (data) => {
    const { username, email, password } = data;

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) throw new Error(chalk.red("User already exists."));

    const passwordHash = await bcrypt.hash(password, saltRounds);
    console.log("Password is hashed!");

    const user = await User.create({
      username,
      email,
      password: passwordHash,
    });

    return {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    };
  };

  loginService = async (userDetails) => {
    const { username, password } = userDetails;

    const user = await User.findOne({ username });
    if (!user) throw new Error(chalk.red("Invalid credentials!"));

    const checkPassword = await bcrypt.compare(
      userDetails.password,
      user.password,
    );

    if (!checkPassword) throw new Error(chalk.red("Invalid credentials!"));

    //fix 404 postman
    //make tests

    const accessT = JWTService.generateAccessToken({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    });

    const refreshT = JWTService.generateRefreshToken({
      id: user._id,
      username: user.username,
    });

    return {
      accessToken: accessT,
      refreshToken: refreshT,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    };
  };
}

export default AuthServices;
