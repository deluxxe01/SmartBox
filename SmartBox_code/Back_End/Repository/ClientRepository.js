
import ModelClient from "../models/ClientModel.js";
class clientRepo{

    static async InsertUser(obj){

        const consulta = await ModelClient.create(obj)

        return consulta


    }

    static async LoginUser(obj){
        const consulta = await ModelClient.findAll({
            where:{
            email:obj.email,
            senha:obj.senha
            }
        })
    }
}
export default clientRepo