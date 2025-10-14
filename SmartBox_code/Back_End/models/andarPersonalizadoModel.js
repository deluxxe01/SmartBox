import { Sequelize, DataTypes, Model } from "sequelize";
import CaixaModel from "./CaixaModel";
import DbConection from "../db/db";

class andarPersonalizadoModel extends Model {}

andarPersonalizadoModel.init({
  id_andar: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  caixa_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  Andar_caixa: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  cor_chasi: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  cor_lamina_esq: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cor_lamina_front: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cor_lamina_dir: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desenho_lamina_dir: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desenho_lamina_front: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  desenho_lamina_esq: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
  sequelize:DbConection,
  timestamps:false,
  tableName:'andarpersonalizado'
});
// Associação 1:N

CaixaModel.hasMany(andarPersonalizadoModel, {
  foreignKey: "caixa_id",
  onDelete: "CASCADE",
});

andarPersonalizadoModel.belongsTo(CaixaModel, {
  foreignKey: "caixa_id",
});