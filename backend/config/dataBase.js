import mongoose from "mongoose";
import chalk from "chalk";
import { MONGOOSE_URI } from "./serverConfig.js";

const connectDataBase = async () => {
  try {
    await mongoose.connect(MONGOOSE_URI);
    console.log(chalk.green(" Connection to MongoDB Successful!"));
    console.log(chalk.yellow("\n ----------------------------------"));
  } catch (error) {
    console.error(
      "\nMongoDB error! Details:\n" + chalk.red(`${error.message}\n`),
    );
    console.log(chalk.yellow("\----------------------------------\n"));
    //    process.exit(1);
  }
};

export default connectDataBase;
