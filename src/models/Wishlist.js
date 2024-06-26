'use strict';
const { Model } = require('sequelize')

module.exports= (sequelize, DataTypes) => {
  class Wishlist extends Model {
    static associate(models) {
    }
  }

  Wishlist.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      isDeleted: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Wishlist'
    }
  )
  return Wishlist
}
