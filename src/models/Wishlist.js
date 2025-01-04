'use strict';
const { DataTypes } = require('sequelize');
const BaseModel = require('./BaseModel');

module.exports= (sequelize) => {
  class Wishlist extends BaseModel {
    static associate(models) {
    }
  }

  Wishlist.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Wishlist'
    }
  )
  return Wishlist
}
