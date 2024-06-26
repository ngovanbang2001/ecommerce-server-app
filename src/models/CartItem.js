'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    static associate(models) {
    }
  }

  CartItem.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      cartId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      sku: DataTypes.INTEGER,
      isDeleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'CartItem'
    }
  )
  return CartItem
}
