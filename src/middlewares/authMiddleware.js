import UnauthorizedError from "../errors/unauthorized-error";
import { ACCESS_TOKEN } from "../utils/constants";
import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  const token= req.cookies[ACCESS_TOKEN]
  if (!token){
    return next();
  }

  try {
      const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
      req.user = decode;
      next();
  } catch (e) {
    throw new UnauthorizedError(e)
  }
}
