'use strict';

const { DataTypes } = require('sequelize');
const BaseModel = require('./BaseModel');

module.exports = (sequelize) => {
  class CartItem extends BaseModel {
    static associate(models) {
    }
  }

  CartItem.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      cartId: {
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
      }
    },
    {
      sequelize,
      modelName: 'CartItem'
    }
  )
  return CartItem
}
