import { userService } from "../services/index.js"

export default {
  async info(req, res, next) {
    if(!req.user) return res.status(200).json('ok')
    const { email } = req.user
    if (!email) throw new NotFoundError("Not Found email")
    const data = await userService.info({ email });
    return res.status(200).json({ user: data })
  },
}
