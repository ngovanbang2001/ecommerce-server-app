import UnauthorizedError from "../errors/unauthorized-error";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants";
import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  const token = req.cookies[ACCESS_TOKEN]

  if (!token) {
    clearCookie(res)
    throw new UnauthorizedError("Need sign in to access")
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
    if (err) {
      const refreshToken = req.cookies[REFRESH_TOKEN]
      jwt.verify(refreshToken, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
        if (err) {
          clearCookie(res)
          throw new UnauthorizedError("Need sign in to access")
        }
        jwt.sign(decoded, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '24h' })
        const optionCookie = {
          httpOnly: true,
          sameSite: process.env.NODE_ENV === "development" ? true : "none",
          secure: process.env.NODE_ENV === "development" ? false : true,
        }
        res.cookie(ACCESS_TOKEN, accessToken, optionCookie)
        res.send()
      })
    }

    req.user = decoded;
    next();
  });
}

function clearCookie (res) {
  res.clearCookie(ACCESS_TOKEN)
  res.clearCookie(REFRESH_TOKEN)
}
