'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class ProductSKU extends Model {
    static associate(models) {
      ProductSKU.hasMany(models.CartItem, { foreignKey: 'sku', as: 'productCartItem' })
      ProductSKU.hasMany(models.OrderItem, { foreignKey: 'sku', as: 'ProductOrderItem' })
    }
  }

  ProductSKU.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      name: DataTypes.STRING,
      productId: DataTypes.INTEGER,
      price: DataTypes.DOUBLE,
      quantity: DataTypes.INTEGER,
      colorAttributeId: DataTypes.INTEGER,
      sizeAttributeId: DataTypes.INTEGER,
      isDeleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'ProductSKU'
    }
  )
  return ProductSKU
}