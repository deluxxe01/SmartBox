
import CaixaRepository from "../Repository/CaixaRepository.js"
import RepositoryCustomCaixa from "../Repository/customCaixaRepository.js"
class CaixaService{

     static async createBox(customCaixa,caixaInfos,payload){

        const res = await fetch("http://52.72.137.244:3000/queue/items",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })/* <- enviando o payload da maquina e pagando o position que a  maquina retornou */

        const {position} = await res.json()// <- pegando o position do objeto enviado

        caixaInfos.position_maquina_smart = position
        

        const caixa = await CaixaRepository.createBox(caixaInfos)

        

        customCaixa.fk_caixa_position = caixa.dataValues.position_caixa

        const createCustomCaixa = await RepositoryCustomCaixa.criarPersonalizacaoCaixa(customCaixa)

        

          return caixa

    }

    static async getPositionCaixa(position){
        //http://52.72.137.244:3000/queue/items/68f9281f973f2b637aff39c6/position
        try{
            const res = await fetch(`http://52.72.137.244:3000/queue/items/${position}/position`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
        })
        
        const resposta = await res.json()

        return resposta
 }catch(err){

    console.log("erro: ",err)

}
    }

    static async getMyBox(position){

        const caixa = await CaixaRepository.getMybox(position)
        
        return caixa
    }

    static async atualizarEstoque(obj){
        console.log("log do estoque: ",obj)

        const payload={
            cor:obj.cor,
            op:null

        }
        

        const res = await fetch(`http://52.72.137.244:3000/estoque/${obj.position}`,{
            method:'PUT',
            headers:{
                 "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        console.log("res do mpositionleware",res)

        const response = await res.json()

        return response

    }

    static async getEstoque(){

        const res = await fetch("http://52.72.137.244:3000/estoque",{
            method:"GET",
            headers:{
                 "Content-Type":"application/json"
            }
        })

        const resposta = await res.json()

        return resposta
    }

    static async removeEstoque(position){

        const res = await fetch(`http://52.72.137.244:3000/estoque/${position}`,{
            method:"DELETE",
            headers:{
                 "Content-Type":"application/json"
            }
        
        })

        const response = await res.json()

        return response

    }
}

export default CaixaService