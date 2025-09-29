

import ModelClient from "../models/ClientModel.js"
import clientRepo from "../Repository/ClientRepository.js"


class clientServices{

    async InsertUserService(user){
        //regra de negocio
        console.log(user)

       const consulta = await clientRepo.InsertUser(user)

    }
    static async LoginUser(user){
        //regra de negocio
        const consulta = await clientRepo.LoginUser(user)

        return consulta
    }

}

export default clientServices

