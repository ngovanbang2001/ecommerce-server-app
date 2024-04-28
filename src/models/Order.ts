import { Model } from 'sequelize'
const Schema = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.hasOne(models.User, { foreignKey: 'id', as: 'user' })
      Order.hasMany(models.Product, { foreignKey: 'id', as: 'product' })
    }
  }

  Order.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      status: {
        type: DataTypes.ENUM,
        values: [
          'created',
          'processing',
          'shipped',
          'delivered',
          'completed',
          'cancelled',
          'returned'
        ]
      },
      user: DataTypes.INTEGER,
      product: DataTypes.INTEGER,
      amount: DataTypes.DOUBLE,
      note: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Order'
    }
  )
  return Order
}

export default Schema