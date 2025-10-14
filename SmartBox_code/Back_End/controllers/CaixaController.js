import CaixaService from "../services/CaixaService.js"
export default{

    async  createBox(req,res){

        try{

            const formCaixa = req.body

            const consulta = await CaixaService.createBox()
        
        }catch(error){

        }







    }
}