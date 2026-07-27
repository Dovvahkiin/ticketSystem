import rateLimit from "express-rate-limit";
import { config } from "../config/serverConfig.js";

export const limiter = rateLimit(config.server.rateLimit);
