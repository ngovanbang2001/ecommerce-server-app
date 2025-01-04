'use strict';
const { DataTypes } = require('sequelize');
const BaseModel = require('./BaseModel');

module.exports = (sequelize) => {
  class OrderItem extends BaseModel {
    static associate(models) {
    }
  }

  OrderItem.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      status: {
        type: DataTypes.ENUM,
        values: [
          "CREATED",
          "PROCESSING",
          "SHIPPED",
          "DELIVERED",
          "COMPLETED",
          "CANCELLED",
          "RETURNED"
        ],
        defaultValue: 'PROCESSING'
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sku: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'OrderItem'
    }
  )
  return OrderItem
}