import User from "../models/userModel";
import AuthValidator from "../validators/authValidator";
import chalk from "chalk";
import bcrypt from "bcrypt";
const saltRounds = 5;
const validate = new AuthValidator();

class authServices {
  register = async (data) => {
    const { username, email, password } = data;
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new error(chalk.red("User already exists."));

    const passwordHash = await bcrypt.hash(password, saltRounds);
    console.log("Password is hashed!");

    const user = User.create({
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

export default authServices;
