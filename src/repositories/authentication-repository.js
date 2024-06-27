import db, { sequelize } from '../models'

export default {
  async createUser({ email, name, password, phoneNumber }) {
    const t = await sequelize.transaction();
    try {
      const emailExits = await db.User.findOne({ where: { email } })

      if (emailExits) throw new UnauthorizedError("Email already exists");
      await db.User.create({ email, name, password, phoneNumber }, { transaction: t },);
      await t.commit();
    } catch (error) {
      console.log({ error });
      await t.rollback();
    }
  },

  async findUser({ email }) {
    return await db.User.findOne({ where: { email } })
  },
  refreshTokenService(token) {
  }
}
