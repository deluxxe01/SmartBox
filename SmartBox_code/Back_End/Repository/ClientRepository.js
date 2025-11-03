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
        return consulta
    }

    // 🔹 Método para deletar usuário pelo ID
    static async deleteUserById(id) {
        const user = await ModelClient.findByPk(id); // busca pelo id
        if (!user) return null; // retorna null se não encontrar

        await user.destroy(); // deleta o usuário
        return user.dataValues; // retorna os dados do usuário deletado
    }
}

export default clientRepo;
