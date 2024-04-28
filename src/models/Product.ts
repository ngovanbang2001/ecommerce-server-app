import { Model } from 'sequelize'
const Schema = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.hasMany(models.Category, { foreignKey: 'id', as: 'category' })
    }
  }

  Product.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      color: DataTypes.STRING,
      size: DataTypes.STRING,
      isDeleted: DataTypes.BOOLEAN,
      quantity: DataTypes.INTEGER,
      category: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Product'
    }
  )
  return Product
}

export default Schema