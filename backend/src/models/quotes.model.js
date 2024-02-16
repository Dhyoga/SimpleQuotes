import { Model, DataTypes } from "sequelize"

const TABLE_NAME = "quotes"

class Quote extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: "Quote",
      timestamps: false,
    }
  }
}

const QuoteSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  author: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "author",
  },
  quote: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "quote",
  },
}

export { Quote, QuoteSchema }
