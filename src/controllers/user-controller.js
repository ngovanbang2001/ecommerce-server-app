import { userService } from "../services/index.js"

export default {
  async info(req, res) {
    if(!req.user) return res.status(200).json('Not found user')
    const { email } = req.user
    if (!email) throw new NotFoundError("Not Found email")
    const data = await userService.info({ email });
    const { password , ...rest} = data
    return res.status(200).json({ user: rest })
  },
}
