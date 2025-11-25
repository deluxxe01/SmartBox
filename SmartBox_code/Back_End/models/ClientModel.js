import { Model, DataTypes } from "sequelize";
import DbConection from "../db/db.js";

class ModelClient extends Model {}

ModelClient.init(
  {
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    senha: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cep: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false
    },

    // 🔥 Campo novo
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    sequelize: DbConection,
    timestamps: false,
    tableName: "cliente"
  }
);

export default ModelClient;
