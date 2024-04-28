import { Model } from 'sequelize'
const Schema = (sequelize, DataTypes) => {
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
      user: DataTypes.INTEGER,
      product: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Cart'
    }
  )
  return Cart
}

export default Schema