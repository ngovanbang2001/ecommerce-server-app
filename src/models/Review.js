'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
    }
  }

  Review.init(
    {
      id: {
        
        type: DataTypes.UUID,
        primaryKey: true
      },
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      link: DataTypes.STRING,
      image: DataTypes.STRING,
      isDeleted: DataTypes.BOOLEAN,
      productId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Review'
    }
  )
  return Review
}