import User from "../models/userModel.js";
import chalk from "chalk";
import bcrypt from "bcrypt";
const saltRounds = 5;

class AuthServices {
  registerService = async (data) => {
    const { username, email, password } = data;

    const existingUser = await User.findOne({ email });
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
}

export default AuthServices;
