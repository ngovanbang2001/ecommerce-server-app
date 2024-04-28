import { Model } from 'sequelize'
const Schema = (sequelize, DataTypes) => {
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
      user: DataTypes.INTEGER,
      product: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Favorite'
    }
  )
  return Favorite
}

export default Schema