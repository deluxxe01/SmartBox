import { Sequelize, DataTypes, Model } from "sequelize";
import CaixaModel from "./CaixaModel.js";
import DbConection from "../db/db.js";
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

  bloco1_cor_chasi: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

 bloco1_cor_lamina_esq: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  bloco1_cor_lamina_front: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  bloco1_cor_lamina_dir: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  bloco1_desenho_lamina_dir: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  bloco1_desenho_lamina_front: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  bloco1_desenho_lamina_esq: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  bloco2_cor_chasi:{
    type: DataTypes.STRING(100),
    allowNull: true,
  },

 bloco2_cor_lamina_esq: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  bloco2_cor_lamina_front: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  bloco2_cor_lamina_dir: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  bloco2_desenho_lamina_dir: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  bloco2_desenho_lamina_front: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },

  bloco2_desenho_lamina_esq: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  bloco3_cor_chasi:{
    type: DataTypes.STRING(100),
    allowNull: true,
  },

 bloco3_cor_lamina_esq: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  bloco3_cor_lamina_front: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  bloco3_cor_lamina_dir: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  bloco3_desenho_lamina_dir: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  bloco3_desenho_lamina_front: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },

  bloco3_desenho_lamina_esq: {
    type: DataTypes.STRING(100),
    allowNull: true,
  }
},{
  sequelize:DbConection,
  timestamps:true,
  tableName:'andarpersonalizado'
});


// Associação 1:N

// CaixaModel.hasMany(andarPersonalizadoModel, {
//   foreignKey: "caixa_id",
//   onDelete: "CASCADE",
// });

// andarPersonalizadoModel.belongsTo(CaixaModel, {
//   foreignKey: "caixa_id",
// });
export default andarPersonalizadoModel