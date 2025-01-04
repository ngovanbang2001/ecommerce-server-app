'use strict';

const { DataTypes } = require('sequelize');
const BaseModel = require('./BaseModel');

module.exports = (sequelize) => {
  class Category extends BaseModel {
    static associate(models) {
      Category.hasMany(models.Product, { foreignKey: 'categoryId', as: 'category' })
    }

  }

  Category.init(
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
    },
    {
      sequelize,
      modelName: 'Category'
    }
  )
  return Category
}

