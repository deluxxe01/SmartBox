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

        console.log("retorno do banco: ",caixa)

        customCaixa.fk_caixa_id = caixa.dataValues.id_caixa

        const createCustomCaixa = await RepositoryCustomCaixa.criarPersonalizacaoCaixa(customCaixa)

        console.log("retorno do banco da criação das customizações da caixa: ",createCustomCaixa)

          return caixa

    }
}

export default CaixaService