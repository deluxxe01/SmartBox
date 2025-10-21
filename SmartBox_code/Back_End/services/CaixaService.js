import CaixaRepository from "../Repository/CaixaRepository.js"
import RepositoryCustomCaixa from "../Repository/customCaixaRepository.js"
class CaixaService{

     static async createBox(customCaixa,caixaInfos){
        console.log("personalização caixa: ",customCaixa)

        console.log("informação da caixa: ",caixaInfos)

        // const caixa = await CaixaRepository.createBox(obj)

        //  return caixa

    }
}

export default CaixaService