import { userRepository } from "../repositories";

export default {
  async info({ email }) {
    const user = await userRepository.getInfo({email});
    if(!user) throw new NotFoundError("User not found")
    return user
  },

  async updateProfile({ email, name, address, phoneNumber, avatar }) {
      const user = await userRepository.update({ email, name, address, phoneNumber, avatar });
      return user
  },

}
