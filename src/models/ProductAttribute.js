'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class ProductAttribute extends Model {
    static associate(models) {
      ProductAttribute.hasMany(models.ProductSKU, { foreignKey: 'sku', as: 'ProductOrderItem' })
    }
  }

  ProductAttribute.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      type: DataTypes.STRING,
      value: DataTypes.STRING,
      isDeleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'ProductAttribute'
    }
  )
  return ProductAttribute
}