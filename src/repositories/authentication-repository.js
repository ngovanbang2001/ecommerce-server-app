import db from '../models'

export default {
  async createUser({ email, name, password, phoneNumber }) {
    const emailExits = await db.User.findOne({ where: { email } })
    if(emailExits) throw new UnauthorizedError("Email already exists");
    await db.User.create({ email, name, password, phoneNumber });
  },
  
  async findUser({ email }) {
    return await db.User.findOne({ where: { email } })
  },
  refreshTokenService(token) {
  }
}
