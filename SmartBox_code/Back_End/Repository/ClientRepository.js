import ModelClient from "../models/ClientModel.js";

class clientRepo {

    static async InsertUser(obj){
        const consulta = await ModelClient.create(obj)
        console.log("repo",consulta.dataValues)
        return consulta.dataValues
    }
    
    static async findEmail(obj){
        const consulta = await ModelClient.findAll({
            where:{
                email: obj.email
            }
        })
        return consulta // retorna array vazio se não houver emails
    }

    static async LoginUser(obj){
        const consulta = await ModelClient.findAll({
            where:{
                email: obj.email,
                senha: obj.senha
            }
        })
        console.log("log que pertence ao login: ",consulta[0].dataValues)
        
        return consulta // não precisa retonar o primeiro indice do vetor com dataValues pq 
    }

    //deletar usuário pelo ID
    static async deleteUserById(id) {
        const user = await ModelClient.findByPk(id); // busca pelo id
        console.log(user);
        if (!user) return null; 

        await user.destroy(); 
        return user.dataValues; // retorna os dados do usuário deletado
    }
}

export default clientRepo;
