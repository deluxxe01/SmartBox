import CaixaService from "../services/CaixaService.js"
export default{

    async  createBox(req,res){

        try{
            const carrinho = req.body
            let vetorCaixas = []

           for(let item of carrinho){
            let {caixa} = item.payload
            console.log("personalização da caixa:",caixa)
            

            let customCaixa={
                Andar_caixa:caixa.codigoProduto,
                bloco1_cor_chasi:caixa.bloco1.cor,
                bloco1_cor_lamina_esq:"",
                bloco1_cor_lamina_front:"",
                bloco1_cor_lamina_dir:"",
                bloco1_desenho_lamina_dir:"",
                bloco1_desenho_lamina_front:"",
                bloco1_desenho_lamina_esq:""
            }
            

            //    const consulta = await CaixaService.createBox(caixa)
            //    vetorCaixas.push(consulta)
           }
            return res.status(201).json({test:"oi"})

        
        }catch(error){

        }







    }
}