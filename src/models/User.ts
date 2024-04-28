import { Model } from 'sequelize'
const Schema = (sequelize, DataTypes) => {
  class User extends Model {
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      userName: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      email: DataTypes.STRING,
      avatar: DataTypes.STRING,
      isDeleted: DataTypes.BOOLEAN,
      password: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM,
        values: ['user', 'admin']
      },
      address: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User'
    }
  )
  return User
}

export default Schema