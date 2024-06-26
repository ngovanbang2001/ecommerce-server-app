'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {
    }
  }

  OrderItem.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      orderId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      sku: DataTypes.INTEGER,
      
    },
    {
      sequelize,
      modelName: 'OrderItem'
    }
  )
  return OrderItem
}