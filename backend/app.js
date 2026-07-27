import express from "express";
import chalk from "chalk";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { config } from "./config/serverConfig.js";

dotenv.config();

const app = express();

app.use(helmet());

export default app;
