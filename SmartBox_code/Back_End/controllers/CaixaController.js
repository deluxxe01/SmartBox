import CaixaService from "../services/CaixaService.js"
export default{

    async  createBox(req,res){

        try{
            const carrinho = req.body
            let vetorCaixas = []

           for(let item of carrinho){
            let {caixa} = item.payload
            
            

            let customCaixa={
                fk_caixa_id:"não possui",
                Andar_caixa:caixa.codigoProduto,
                bloco1_cor_chasi:caixa.bloco1.cor,
                bloco1_cor_lamina_esq:caixa.bloco1.lamina1,
                bloco1_cor_lamina_front:caixa.bloco1.lamina2,
                bloco1_cor_lamina_dir:caixa.bloco1.lamina3,
                bloco1_desenho_lamina_dir:caixa.bloco1.padrao1,
                bloco1_desenho_lamina_front:caixa.bloco1.padrao2,
                bloco1_desenho_lamina_esq:caixa.bloco1.padrao3,
                bloco2_cor_chasi:caixa.bloco2.cor,
                bloco2_cor_lamina_esq:caixa.bloco2.lamina1,
                bloco2_cor_lamina_front:caixa.bloco2.lamina2,
                bloco2_cor_lamina_dir:caixa.bloco2.lamina3,
                bloco2_desenho_lamina_dir:caixa.bloco2.padrao1,
                bloco2_desenho_lamina_front:caixa.bloco2.padrao2,
                bloco2_desenho_lamina_esq:caixa.bloco2.padrao3,
                bloco3_cor_chasi:caixa.bloco3.cor,
                bloco3_cor_lamina_esq:caixa.bloco3.lamina1,
                bloco3_cor_lamina_front:caixa.bloco3.lamina2,
                bloco3_cor_lamina_dir:caixa.bloco3.lamina3,
                bloco3_desenho_lamina_dir:caixa.bloco3.padrao1,
                bloco3_desenho_lamina_front:caixa.bloco3.padrao2,
                bloco3_desenho_lamina_esq:caixa.bloco3.padrao3

            }
            let caixaInfos = {
                fk_id_cliente:item.payload.id_client,
                nome:item.payload.sku,
                id_maquina_smart:"false"
            }
            

               const consulta = await CaixaService.createBox(customCaixa,caixaInfos,item)
                
           }
            return res.status(201).json({test:"foi"})

        
        }catch(error){

        }
    },
     async getPositionCaixa(req,res){

        const id_smart = req.params.id 
        console.log("id smart pegado pela minha rota get: ",id_smart)

        const result = await CaixaService.getPositionCaixa(id_smart)
        console.log("controller service: ",result)

        return res.status(200).json({status:result})



    },
    async getMyBox(req,res){

        const id = req.params.id
        
        console.log("id: ",id)

        const consulta = await CaixaService.getMyBox(id)

        return res.status(200).json(consulta)
        
    }
}