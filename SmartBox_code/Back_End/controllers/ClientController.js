

export default {
    async insertUser(req,res){

   let {nome,sobrenome,email,senha} = req.body

    if(nome.length > 2){
        console.log("nome dentro do padrão ")
    }else{
        console.log('nome muito curto')
    }

    }
}
