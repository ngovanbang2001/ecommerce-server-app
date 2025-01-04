'use strict';
const { DataTypes } = require('sequelize');
const BaseModel = require('./BaseModel');

module.exports = (sequelize) => {
  class User extends BaseModel {
    static associate(models) {
      User.hasOne(models.Cart, { foreignKey: 'userId', as: 'cart' })
      User.hasMany(models.Wishlist, { foreignKey: 'userId', as: 'wishlist' })
      User.hasMany(models.Order, { foreignKey: 'userId', as: 'order' })
      User.hasMany(models.Review, { foreignKey: 'userId', as: 'review' })
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM,
        values: ['USER', 'ADMIN'],
        defaultValue: 'USER'
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'User'
    }
  )
  return User
}
