'use strict';
const { DataTypes } = require('sequelize');
const BaseModel = require('./BaseModel');

module.exports = (sequelize) => {
  class ProductSKU extends BaseModel {
    static associate(models) {
      ProductSKU.hasMany(models.CartItem, { foreignKey: 'sku', as: 'cartItem' })
      ProductSKU.hasMany(models.OrderItem, { foreignKey: 'sku', as: 'orderItem' })
      ProductSKU.hasMany(models.Review, { foreignKey: 'sku', as: 'review'})
    }
  }

  ProductSKU.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'ProductSKU'
    }
  )
  return ProductSKU
}