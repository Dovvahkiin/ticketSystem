import JWTService from "../services/jwtServices.js";

export default function verifyRToken(req, res, next) {
  //verify refresh token middleware
  const token = req.cookies.refreshToken;

  if (!token) return res.status(401).json({ message: "No refresh token!" });

  try {
    req.user = JWTService.verifyRefreshToken(token);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token!" });
  }
}
