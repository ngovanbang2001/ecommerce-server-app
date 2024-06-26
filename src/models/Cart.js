'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.hasMany(models.CartItem, { foreignKey: 'id', as: 'cart' })
    }
  }

  Cart.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      totalPrice: DataTypes.DOUBLE,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Cart'
    }
  )
  return Cart
}
