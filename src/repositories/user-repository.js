import db from '../models'

export default {
  async getInfo({ email }) {
    return await db.User.findOne({
      attributes: { exclude: ['password'] },
      where: { email } })
  },

  async update({ email, name, address, phoneNumber }) {
    return await db.User.update({
      name, address, phoneNumber
    },{ where: { email } })
  },
}
