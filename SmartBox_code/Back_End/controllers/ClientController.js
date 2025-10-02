
import clientServices from "../services/ClientService.js"

export default {

    async insertUser(req,res){

    
    try{    

   let {nome,sobrenome,email,senha} = req.body

    if(nome.length <= 1){

         return res.status(400).json({error:"nome com poucos caracteres"})

    }
    
    if(sobrenome.length < 10){

        return res.status(400).json({error:" sobrenome com poucos caracteres "})
    }
    if(!email.toLowerCase().endsWith("@gmail.com")){

        console.log(email.toLowerCase().endsWith("@gmail.com"))
        
        return res.status(400).json({error:"Gmail com terminação invalida, Por favor escolha um email valido"})
    }

    if(senha.length < 6){
     
        return res.status(400).json({error:"Porfavor insira uma senha com mais de 6 digitos "})
    }
    

    const result =  await new clientServices().InsertUserService({nome,email,senha,sobrenome})

    console.log("resultado",result)

    return res.status(201).json({result:result})
   }catch(erro){
    if (erro.message.includes('Email já inserido')) {
      return res.status(400).json({ error: erro.message });
    }

   }

    },
    async loginUser(req,res){
        const user = req.body

        const result = await clientServices.LoginUser(user)
        console.log("login: ",result)

        return res.status(200).json({user:result})



    }
}
