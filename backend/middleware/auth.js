import JWTService from "../services/jwtServices.js";

class AuthenticationFunctions {
  static authetication = (req, res, next) => {
    const token = req.cookies.accessToken;

    if (!token) return res.status(401).json({ message: "Unauthorized!" });

    try {
      req.user = JWTService.verifyAccessToken(token);
      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid Token!" });
    }
  };

  static checkLoginAuth = (req, res, next) => {
    //checking if user is logged in, so cannot login again!
    const token = req.cookies.accessToken;
    if (!token) return next();

    try {
      JWTService.verifyAccessToken(token);
      return res
        .status(403)
        .json({ message: "Cannot access page because you are logged in!" });
    } catch (error) {
      next();
    }
  };

  // make authorization middleware
}
export default AuthenticationFunctions;
