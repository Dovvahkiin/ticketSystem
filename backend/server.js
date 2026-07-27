import { PORT } from "./config/serverConfig.js";
import chalk from "chalk";
import app from "./app.js";

app.listen(PORT, () => {
  console.log(chalk.yellow("\n ----------------------------------"));
  console.log(chalk.blue(`\n Ticket app listening on port ${PORT}!\n`));
});
