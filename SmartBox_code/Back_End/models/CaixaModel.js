import { Model, DataTypes} from "sequelize";
import DbConection from "../db/db.js";


class CaixaModel extends Model {}

CaixaModel.init({
  id_caixa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  fk_id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  data_criacao:{
    type:DataTypes.DATE,
    allowNull:false,
    defaultValue:DataTypes.NOW
  },
  id_maquina_smart:{
    type:DataTypes.STRING(255),
    allowNull:false
  }
},{
    sequelize:DbConection,
     timestamps:false,
     tableName:"caixa_personalizada"
}

);
export default CaixaModel
