import db from '../models'

export default {
  async list({ email }) {
    return await db.Product.findOne({ where: { email } })
  },

  async create({ email }) {
    return await db.Product.findOne({ where: { email } })
  },

  async update({ email }) {
    return await db.Product.findOne({ where: { email } })
  },

  async delete({ email }) {
    return await db.Product.findOne({ where: { email } })
  },
}
