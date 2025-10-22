import ModelCustomCaixa from "../models/customCaixaModel.js";

class RepositoryCustomCaixa{


    static async criarPersonalizacaoCaixa(personalizacao){

    const result = await ModelCustomCaixa.create(personalizacao,{logging:false})
    
    
    return result
        


    }
}
export default RepositoryCustomCaixa















