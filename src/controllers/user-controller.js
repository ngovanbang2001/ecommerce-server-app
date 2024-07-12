import { userService } from "../services/index.js"
import NotFoundError from "../errors/not-found-error.js";

export default {
  async info(req, res) {
    const { email } = req.user
    if (!email) throw new NotFoundError("Not Found email")
    const data = await userService.info({ email });
    const { password , ...rest} = data
    return res.status(200).json({ user: rest })
  },

  async updateProfile(req, res) {
    const { email } = req.user
    if (!email) throw new NotFoundError("Not Found email")
    const { name, address, phoneNumber } = req.body
    const data = await userService.info({ email, name, address, phoneNumber });
    const { password , ...rest} = data
    return res.status(200).json({ user: rest })
  },

}
