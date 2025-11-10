import CaixaRepository from "../Repository/CaixaRepository.js"
import RepositoryCustomCaixa from "../Repository/customCaixaRepository.js"
class CaixaService{

     static async createBox(customCaixa,caixaInfos,payload){

        const res = await fetch("http://52.1.197.112:3000/queue/items",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })/* <- enviando o payload da maquina e pagando o id que a  maquina retornou */

        const {id} = await res.json()// <- pegando o id do objeto enviado
        caixaInfos.id_maquina_smart = id
        

        const caixa = await CaixaRepository.createBox(caixaInfos)

        

        customCaixa.fk_caixa_id = caixa.dataValues.id_caixa

        const createCustomCaixa = await RepositoryCustomCaixa.criarPersonalizacaoCaixa(customCaixa)

        

          return caixa

    }

    static async getPositionCaixa(id){
        //http://52.1.197.112:3000/queue/items/68f9281f973f2b637aff39c6/position
        const res = await fetch(`http://52.1.197.112:3000/queue/items/${id}/position`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        
        const resposta = await res.json()

        return resposta

    }
}

export default CaixaService