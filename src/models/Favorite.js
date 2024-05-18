'use strict';
const { Model } = require('sequelize')

module.exports= (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(models) {
      Favorite.hasOne(models.User, { foreignKey: 'id', as: 'user' })
      Favorite.hasMany(models.Product, { foreignKey: 'id', as: 'product' })
    }
  }

  Favorite.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
    },
    {
      sequelize,
      modelName: 'Favorite'
    }
  )
  return Favorite
}
