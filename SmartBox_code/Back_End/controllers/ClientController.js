
import clientServices from "../services/ClientService.js"

export default {

    async insertUser(req,res){

   let {nome,sobrenome,email,senha} = req.body

    if(nome.length <= 1){

         return res.status(400).json({error:"nome com poucos caracteres!"})
    }
    
    if(sobrenome.length < 10){

        return res.status(400).json({error:" sobrenome com poucos caracteres! "})
    }
    if(email.toLowerCase().endsWith("@gmail.com")){
        console.log(email.toLowerCase().endsWith("@gmail.com"))
        
        return res.status(400).json({error:"Gmail com terminação invalida!, Por favor escolha uma email valido!"})
    }
    if(senha.length <= 6){
        return res.status(400).json({error:"Porfavor insira uma senha com mais de 6 digitos !"})
    }
    console.log({nome,email,senha,sobrenome})

    const result =  new clientServices().InsertUserService({nome,email,senha,sobrenome})

    return res.status(201).json({result:result})

    }
}
