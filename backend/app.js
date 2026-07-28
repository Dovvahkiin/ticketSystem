import express from "express";
import chalk from "chalk";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { config } from "./config/serverConfig.js";
import { limiter } from "./middleware/rateLimiter.js";
import ExpressMongoSanitize from "express-mongo-sanitize";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors(config.server.corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(ExpressMongoSanitize());
app.use(limiter);

export default app;
