import CaixaRepository from "../Repository/CaixaRepository.js"
import RepositoryCustomCaixa from "../Repository/customCaixaRepository.js"
class CaixaService{

     static async createBox(obj){

        const caixa = await CaixaRepository.createBox(obj)

         return caixa

    }
}

export default CaixaService