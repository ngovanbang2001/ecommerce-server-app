'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {
      Article.hasMany(models.Product, { foreignKey: 'id', as: 'product' })
    }
  }

  Article.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      link: DataTypes.STRING,
      image: DataTypes.STRING,
      isDeleted: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Article'
    }
  )
  return Article
}