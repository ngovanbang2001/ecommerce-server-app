'use strict';
const { DataTypes } = require('sequelize');
const BaseModel = require('./BaseModel');

module.exports = (sequelize) => {
  class Cart extends BaseModel {
    static associate(models) {
      Cart.hasMany(models.CartItem, { foreignKey: 'id', as: 'cart' })
    }
  }

  Cart.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      totalPrice: {
        type:  DataTypes.DOUBLE,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Cart'
    }
  )
  return Cart
}
