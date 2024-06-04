'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class ProductImage extends Model {
    static associate(models) {
    }
  }

  ProductImage.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      url: DataTypes.STRING,
      productId: DataTypes.INTEGER,
      isDeleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'ProductImage'
    }
  )
  return ProductImage
}