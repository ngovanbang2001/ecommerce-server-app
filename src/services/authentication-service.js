import UnauthorizedError from "../errors/unauthorized-error.js";
import { authenticationRepository } from "../repositories/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export default {
  async createUser({ email, password, name, phoneNumber }) {
    const genPwd = await bcrypt.genSalt(10)
    if(!genPwd) throw new InternalServerError("Error")
    const hasPwd = await bcrypt.hash(password, genPwd)
    if (!hasPwd) throw new InternalServerError("Error")
    await authenticationRepository.createUser({ email, password: hasPwd, name, phoneNumber })
  },

  async signIn({ password, email }) {
    if (!password || !email) throw new UnauthorizedError("Please enter your password and email");
    const user = await authenticationRepository.findUser({ email });
    if (!user) throw new UnauthorizedError("User not found");

    const checkPassword = bcrypt.compareSync(password, user.password)
    if (!checkPassword) throw new UnauthorizedError("Password is not invalid");

    const accessToken = this.generateAccessToken({ email, password });
    const refreshToken = this.generateRefreshToken({ email, password });

    return { accessToken, refreshToken }
  },

  generateAccessToken(data) {
    return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '24h' })
  },
  generateRefreshToken(data) {
    return jwt.sign(data, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '365d' })

  },
  generateAccessTokenFromRefreshToken(refreshToken) {
    try {
      const decode = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
      return generateAccessToken(decode)
    } catch (error) {
      throw new RefreshTokenExpiredError(err);
    }
  },
}
