import { where } from "sequelize"
import CaixaModel from "../models/CaixaModel.js"

class CaixaRepository{

    static async createBox(infosCaixa){

        const consulta = await CaixaModel.create(infosCaixa)

        return consulta



    }
    static async getMybox(id_user){

        const consulta = await CaixaModel.findAll({
            where:{
            fk_id_cliente:id_user
        }})
        console.log("caixa")

        return consulta
    }
    

  
}
export default CaixaRepository