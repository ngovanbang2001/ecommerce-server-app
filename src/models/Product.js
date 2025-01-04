'use strict';
const { DataTypes } = require('sequelize');
const BaseModel = require('./BaseModel');

module.exports = (sequelize) => {
  class Product extends BaseModel {
    static associate(models) {
      Product.hasMany(models.Article, { foreignKey: 'productId', as: 'article'})
      Product.hasMany(models.ProductSKU, { foreignKey: 'productId', as: 'productSKU'})
      Product.hasMany(models.Wishlist, { foreignKey: 'productId', as: 'wishlist'})
    }
  }

  Product.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Product'
    }
  )
  return Product
}