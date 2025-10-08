import { Model, DataTypes} from "sequelize";
import DbConection from "../db/db";


class CaixaModel extends Model {}

CaixaModel.init({
  id_caixa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  id_cliente: {
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
  }
},{
    sequelize:DbConection,
     timestamps:false,
     tableName:"caixa_personalizad"
}

);
export default CaixaModel
