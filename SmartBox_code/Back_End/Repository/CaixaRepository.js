import CaixaModel from "../models/CaixaModel.js"

class CaixaRepository{

    static async createBox(personalizacao,infosCaixa){

        const consulta = await CaixaModel.create(caixa)

        return consulta



    }

    
}
export default CaixaRepository