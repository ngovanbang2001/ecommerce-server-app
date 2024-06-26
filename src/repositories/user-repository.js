import db from '../models'

export default {
  async getInfo({ email }) {
    return await db.User.findOne({ where: { email } })
  },
}
