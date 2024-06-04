'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {
      OrderItem.hasOne(models.User, { foreignKey: 'id', as: 'user' })
      OrderItem.hasMany(models.Product, { foreignKey: 'id', as: 'product' })
    }
  }

  OrderItem.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      quantity: DataTypes.INTEGER,
      price: DataTypes.DOUBLE,
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'OrderItem'
    }
  )
  return OrderItem
}