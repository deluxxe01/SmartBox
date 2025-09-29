

import { error } from "console"
import ModelClient from "../models/ClientModel.js"
import clientRepo from "../Repository/ClientRepository.js"


class clientServices{

    async InsertUserService(user){
        //regra de negocio
       const emailRepetido = await clientRepo.findEmail(user)

       if(emailRepetido.length>0){
        throw new Error("Email já inserido ,porfavor insira outro")
       }

       const consulta = await clientRepo.InsertUser(user)

    }
    static async LoginUser(user){
        //regra de negocio
        const consulta = await clientRepo.LoginUser(user)

        return consulta
    }

}

export default clientServices

