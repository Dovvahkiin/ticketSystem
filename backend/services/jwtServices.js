import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
const rSecret = process.env.JWT_REFRESH_SECRET; //refresh secret
const aSecret = process.env.JWT_ACCESS_SECRET; //access secret

class JWTService {
  static generateAccessToken(user) {
    return jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      aSecret,
      {
        expiresIn: "15m",
      },
    );
  }

  static generateRefreshToken(user) {
    return jwt.sign(
      {
        id: user._id,
      },
      rSecret,
      {
        expiresIn: "30d",
      },
    );
  }

  static verifyAccessToken(token) {
    return jwt.verify(token, aSecret);
  }

  static verifyRefreshToken(token) {
    return jwt.verify(token, rSecret);
  }
}

export default JWTService;
