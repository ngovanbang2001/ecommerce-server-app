'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Product, { foreignKey: 'id', as: 'category' })
    }

  }

  Category.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      isDeleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Category'
    }
  )
  return Category
}

