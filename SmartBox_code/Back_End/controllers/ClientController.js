import clientServices from "../services/ClientService.js"

export default {
  async insertUser(req, res) {
    try {
      let { nome, sobrenome, email, senha } = req.body;

      // Validação do nome
      if (nome.length <= 1) {
        return res.status(400).json({ error: "O nome deve ter mais de 1 caractere." });
      }

      // Validação do sobrenome
      if (sobrenome.length < 10) {
        return res.status(400).json({ error: "O sobrenome deve ter pelo menos 10 caracteres." });
      }

      // Validação do email
      if (!email.toLowerCase().endsWith("@gmail.com")) {
        console.log(email.toLowerCase().endsWith("@gmail.com"));
        return res.status(400).json({
          error: 'O email deve ser válido e terminar com "@gmail.com", forneça um email válido.'
        });
      }

      // Validação da senha
      if (senha.length < 6) {
        return res.status(400).json({
          error: "A senha deve ter pelo menos 6 caracteres.insira uma senha mais forte."
        });
      }

      // Inserção do usuário
      const result = await new clientServices().InsertUserService({ nome, email, senha, sobrenome });
      console.log("Resultado:", result);

      return res.status(201).json({ user: result });

    } catch (erro) {
      // Verifica se o erro é relacionado ao email já cadastrado
      if (erro.message.includes('Email já inserido')) {
        return res.status(400).json({ error: erro.message });
      }
      
      // Caso ocorra outro erro, envia uma resposta genérica
      return res.status(500).json({ error: "Erro inesperado, tente novamente mais tarde." });
    }
  },

  async loginUser(req, res) {
    const user = req.body;
    
    try {
      // Tentativa de login
      const result = await clientServices.LoginUser(user);
      console.log("Login:", result);

      return res.status(200).json({ user: result });
      
    } catch(erro){
    
    if (erro.message.includes('Email já inserido')) {
      return res.status(400).json({ error: erro.message });
    }

   }

    },
    async loginUser(req,res){

        try{
            const user = req.body

            const result = await clientServices.LoginUser(user)
            console.log("login: ",result)

            return res.status(200).json({user:result})
         }catch(errorLogin){

            if(errorLogin.message.includes("Usuario não existe")){
                return res.status(400).json({message:"Usuario não existe"})
            }

         }


    }
}
