

import ModelClient from "../models/ClientModel.js"

class clientServices{

    async InsertUserService(user){
        //regra de negocio
        console.log(user)

       const consulta = await ModelClient.create(user)
        return consulta

    }

}

export default clientServices

