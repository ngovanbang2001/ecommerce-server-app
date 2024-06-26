'use strict';

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Cart, { foreignKey: 'userId', as: 'userCart' })
      User.hasMany(models.Wishlist, { foreignKey: 'userId', as: 'userWishlist' })
      User.hasMany(models.Order, { foreignKey: 'userId', as: 'userOrder' })
      User.hasMany(models.Review, { foreignKey: 'userId', as: 'userReview' })
    }
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
