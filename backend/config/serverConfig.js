import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.SERVER_PORT || 3000;
export const FRONT_PORT = process.env.FRONT_PORT || 5173;
export const ENV = process.env.NODE_ENV || "development";
export const FRONTEND_URL = process.env.FRONTEND_URL;
export const MONGOOSE_URI = process.env.MONGOOSE_URI;

const productionOrigin = FRONTEND_URL || `http://localhost:${FRONT_PORT}`;

export const config = {
  server: {
    rateLimit: {
      windowMs: 10 * 60 * 1000,
      max: 50,
    },
    corsOptions: {
      origin:
        ENV === "production"
          ? [productionOrigin]
          : [`http://localhost:${FRONT_PORT}`],
      methods: "POST,GET,PUT,DELETE",
      allowedHeaders: "Content-Type,Authorization",
      credentials: true,
    },
  },
};
