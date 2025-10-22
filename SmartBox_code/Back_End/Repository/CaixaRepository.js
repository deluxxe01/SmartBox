import CaixaModel from "../models/CaixaModel.js"

class CaixaRepository{

    static async createBox(infosCaixa){

        const consulta = await CaixaModel.create(infosCaixa)

        return consulta



    }

    
}
export default CaixaRepository