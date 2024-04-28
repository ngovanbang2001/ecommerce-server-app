import { Model } from 'sequelize'

const Schema = (sequelize, DataTypes) => {
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
      product: DataTypes.INTEGER,
      isDeleted: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Article'
    }
  )
  return Article
}

export default Schema