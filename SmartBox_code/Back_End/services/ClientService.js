import clientRepo from "../Repository/ClientRepository.js";

class ClientServices {

  // Inserir usuário
  async InsertUserService(user) {
    const emailRepetido = await clientRepo.findEmail(user);
    if (emailRepetido.length > 0) {
      throw new Error("Email já inserido, por favor insira outro");
    }

    const consulta = await clientRepo.InsertUser(user);
    console.log("serviceClient:", consulta);
    return consulta;
  }

  // Login de usuário (mantendo static)
  static async LoginUser(user) {
    const consulta = await clientRepo.LoginUser(user);

    if (!consulta || consulta.length === 0) {
      throw new Error("Usuário não existe");
    }

    const usuario = consulta[0].dataValues;

    // 🔥 Adiciona isAdmin no retorno
    return {
      id_cliente: usuario.id_cliente,
      nome: usuario.nome,
      sobrenome: usuario.sobrenome,
      email: usuario.email,
      senha: usuario.senha,
      isAdmin: usuario.isAdmin || false // true se for admin, false caso contrário
    };
  }

  // Deletar usuário pelo ID
  async deleteUserById(id) {
    try {
      const resultado = await clientRepo.deleteUserById(id);
      console.log(resultado); 
      if (!resultado) {
        throw new Error("Usuário não encontrado");
      }

      return resultado;
    } catch(erro) {
      console.log('erro ao fazer a interação com o banco', erro);
      throw erro;
    }
  }

  static async updateUser(obj) {
    const emailCadastrado = await clientRepo.findEmail(obj); 
    if (emailCadastrado.length > 0) {
      throw new Error("esse email ja esta em nosso sistema, utilize outro ");
    }

    const user = await clientRepo.UpdateUser(obj);
    return user;
  }
}

export default ClientServices;
