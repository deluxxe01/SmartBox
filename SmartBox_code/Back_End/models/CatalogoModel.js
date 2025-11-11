import { DataTypes} from "sequelize";
import DbConection from "../db/db.js"; // mesma conexão usada no ClientModel

const CatalogoModel = DbConection.define("catalogo_caixa", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  imagem: {
    type: DataTypes.BLOB("long"), // armazenar imagem em bytes (BYTEA no PostgreSQL)
    allowNull: true,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  criado_em: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize:DbConection,
  tableName: "catalogo_caixa",
  timestamps: false,
});

export default CatalogoModel;
