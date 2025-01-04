const { Model, DataTypes } = require('sequelize');

class BaseModel extends Model {
  static async softDelete(id) {
    return this.update({ isDeleted: true }, { where: { id } });
  }

  static async restore(id) {
    return this.update({ isDeleted: false }, { where: { id } });
  }

  static init(attributes, options) {
    const baseAttributes = {
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    };

    return super.init({ ...attributes, ...baseAttributes }, { ... options, paranoid: true, timestamps: true });
  }
}

module.exports = BaseModel;