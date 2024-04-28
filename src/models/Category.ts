import { Model } from 'sequelize'
const Schema = (sequelize, DataTypes) => {
  class Category extends Model {
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

export default Schema