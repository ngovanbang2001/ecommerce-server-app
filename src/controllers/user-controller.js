import { userService } from "../services/index.js"
import NotFoundError from "../errors/not-found-error.js";

export default {
  async info(req, res) {
    console.log({ re: req.user});
    if(!req.user) throw new NotFoundError('Not found user')
    const data = await userService.info({ email });
    const { password , ...rest} = data
    return res.status(200).json({ user: rest })
  },

  async updateProfile(req, res) {
    if(!req.user) throw new NotFoundError('Not found user')
    const { name, address, phoneNumber } = req.user
    if (!email) throw new NotFoundError("Not Found email")
    const data = await userService.info({ email });
    const { password , ...rest} = data
    return res.status(200).json({ user: rest })
  },

}
