import UnauthorizedError from "../errors/unauthorized-error.js";
import { authenticationRepository } from "../repositories/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export default {
  async createUser({ email, password, name, phoneNumber }) {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) throw new UnauthorizedError(err);
        await authenticationRepository.createUser({ email, password: hash, name, phoneNumber })
      });
    });
  },
  async signIn({ password, email }) {
    if (!password || !email) throw new UnauthorizedError("Please enter your password and email");
    const user = await authenticationRepository.findUser({ email});
    if (!user) throw new UnauthorizedError("User not found");
    const checkPassword = bcrypt.compareSync(password, user.password)
      if (!checkPassword) throw new UnauthorizedError("Password is not invalid");
      const accessToken = this.generalAccessToken({ email, password });
      const refreshToken = this.generalRefreshToken({ email, password });
      return { accessToken, refreshToken }
  },
  generalAccessToken(data) {
    const access_token = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '24h' })
    return access_token
  },
  generalRefreshToken(data) {
    const access_token = jwt.sign(data, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '365d' })
    return access_token
  }
}
