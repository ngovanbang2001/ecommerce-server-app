'use strict';
const { DataTypes } = require('sequelize');
const BaseModel = require('./BaseModel');

module.exports = (sequelize) => {
  class Order extends BaseModel {
    static associate(models) {
      Order.hasMany(models.OrderItem, { foreignKey: 'id', as: 'order' })
    }
  }

  Order.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      paymentStatus: {
        type: DataTypes.ENUM,
        values: [
          "PENDING",
          "FAILED",
          "INPROGRESS",
          "COMPLETED",
          "REFUND",
          "CANCELLED",
          "DISPUTED"
        ],
        defaultValue: 'INPROGRESS'
      },
      shippingAddress: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      note: {
        type: DataTypes.TEXT,
        allowNull: true,
      }
    },
    {
      sequelize,
      modelName: 'Order'
    }
  )
  return Order
}