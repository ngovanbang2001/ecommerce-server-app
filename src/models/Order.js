'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.hasOne(models.OrderItem, { foreignKey: 'id', as: 'order' })
    }
  }

  Order.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      userId: DataTypes.INTEGER,
      status: {
        type: DataTypes.ENUM,
        values: [
          'created',
          'processing',
          'shipped',
          'delivered',
          'completed',
          'cancelled',
          'returned'
        ]
      },
      totalPrice: DataTypes.DOUBLE,
      note: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Order'
    }
  )
  return Order
}