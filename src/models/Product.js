'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.hasMany(models.Article, { foreignKey: 'productId', as: 'productArticle'})
      Product.hasMany(models.Review, { foreignKey: 'productId', as: 'productReview'})
      Product.hasMany(models.ProductSKU, { foreignKey: 'productId', as: 'productSKU'})
      Product.hasMany(models.ProductImage, { foreignKey: 'productId', as: 'productImage'})
      Product.hasMany(models.Wishlist, { foreignKey: 'productId', as: 'productWishlist'})
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