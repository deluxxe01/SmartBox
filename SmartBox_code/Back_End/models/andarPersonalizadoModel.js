import { Sequelize, Datatypes, Model } from "sequelize";
import CaixaModel from "./CaixaModel";
class andarPersonalizadoModel extends Model {}

andarPersonalizadoModel.init({
  id_andar: {
    type: Datatypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  caixa_id: {
    type: Datatypes.INTEGER,
    allowNull: false,
  },

  Andar_caixa: {
    type: Datatypes.INTEGER,
    allowNull: false,
  },

  cor_chasi: {
    type: Datatypes.STRING,
    allowNull: false,
  },

  cor_lamina_esq: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  cor_lamina_front: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  cor_lamina_dir: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  desenho_lamina_dir: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  desenho_lamina_front: {
    type: Datatypes.STRING,
    allowNull: false,
  },

  desenho_lamina_dir: {
    type: Datatypes.STRING,
    allowNull: false,
  },
});
// Associação 1:N

CaixaModel.hasMany(andarPersonalizadoModel, {
  foreignKey: "caixa_id",
  onDelete: "CASCADE",
});

andarPersonalizadoModel.belongsTo(CaixaModel, {
  foreignKey: "caixa_id",
});