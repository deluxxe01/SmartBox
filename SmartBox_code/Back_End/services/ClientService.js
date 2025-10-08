import { error } from "console";
import ModelClient from "../models/ClientModel.js";
import clientRepo from "../Repository/ClientRepository.js";

class clientServices {
  async InsertUserService(user) {
    //regra de negocio
    const emailRepetido = await clientRepo.findEmail(user);

<<<<<<< HEAD
    if (emailRepetido.length > 0) {
      throw new Error("Email já inserido ,porfavor insira outro");
=======
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
       console.log("service",consulta)
       return consulta

    }
    static async LoginUser(user){
        //regra de negocio
        const consulta = await clientRepo.LoginUser(user)

        return consulta
>>>>>>> 721e0cdbf2a975e21ccf89dd6706130c4802f961
    }

    const consulta = await clientRepo.InsertUser(user);
    console.log("serviceClient", consulta);

    return consulta;
  }
  static async LoginUser(user) {
    //regra de negocio
    const consulta = await clientRepo.LoginUser(user);

    if (!consulta) {

      throw new Error("Usuario não existe");
      
    }

    return consulta;
  }
}

export default clientServices;
