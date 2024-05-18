'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.hasOne(models.User, { foreignKey: 'id', as: 'user' })
      Cart.hasMany(models.Product, { foreignKey: 'id', as: 'product' })
    }
  }

  Cart.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
    },
    {
      sequelize,
      modelName: 'Cart'
    }
  )
  return Cart
}
