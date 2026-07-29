import {
  accessTokenCookie,
  refreshTokenCookie,
} from "../config/cookieConfig.js";

export function setCookies(res, tokens) {
  res.cookie("accessToken", tokens.accessToken, accessTokenCookie);
  res.cookie("refreshToken", tokens.refreshToken, refreshTokenCookie);
}

export function clearCookies(res) {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
}
