'use strict';

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      name: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      email: DataTypes.STRING,
      avatar: DataTypes.STRING,
      isDeleted: DataTypes.BOOLEAN,
      password: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM,
        values: ['USER', 'ADMIN'],
        defaultValue: 'USER'
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
