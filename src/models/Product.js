'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.hasMany(models.Category, { foreignKey: 'id', as: 'category' })
      Product.hasMany(models.ProductImage, { foreignKey: 'id', as: 'images' })
    }
  }

  Product.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      SKU: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      categoryId: DataTypes.INTEGER,
      isDeleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Product'
    }
  )
  return Product
}