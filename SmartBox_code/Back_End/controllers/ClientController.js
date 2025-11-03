import ClientServices from "../services/ClientService.js";

const clientService = new ClientServices(); // instância do service

export default {

  // Inserir usuário
  async insertUser(req, res) {
    try {
      const { nome, sobrenome, email, senha } = req.body;

      // Validações básicas
      if (!nome || nome.length <= 1) return res.status(400).json({ error: "O nome deve ter mais de 1 caractere." });
      if (!sobrenome || sobrenome.length < 10) return res.status(400).json({ error: "O sobrenome deve ter pelo menos 10 caracteres." });
      if (!email || !email.toLowerCase().endsWith("@gmail.com")) return res.status(400).json({ error: 'O email deve terminar com "@gmail.com".' });
      if (!senha || senha.length < 6) return res.status(400).json({ error: "A senha deve ter pelo menos 6 caracteres." });

      const result = await clientService.InsertUserService({ nome, sobrenome, email, senha });
      return res.status(201).json({ user: result });

    } catch (erro) {
      console.error(erro);
      return res.status(400).json({ error: erro.message.includes("Email já inserido") ? erro.message : "Erro inesperado, tente novamente mais tarde." });
    }
  },

  // Login de usuário
  async loginUser(req, res) {
    try {
      const user = req.body;
      const result = await ClientServices.LoginUser(user); // método estático
      return res.status(200).json({ user: result });
    } catch (errorLogin) {
      console.error(errorLogin);
      return res.status(400).json({ error: errorLogin.message.includes("Usuário não existe") ? "Usuário não existe" : "Erro inesperado no login." });
    }
  },

  // Deletar usuário pelo ID
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deletedUser = await clientService.DeleteUserService(id);

      return res.status(200).json({
        message: "Usuário deletado com sucesso",
        deletedUser
      });

    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  }
};
