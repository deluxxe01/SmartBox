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

  // Login de usuário (método estático)
  static async LoginUser(user) {
    const consulta = await clientRepo.LoginUser(user);

    if (!consulta || consulta.length === 0) {
      throw new Error("Usuário não existe");
    }

    // retorna apenas o primeiro usuário encontrado
    return consulta[0].dataValues;
  }

  // Deletar usuário pelo ID
  async DeleteUserService(id) {
    try {
      const resultado = await clientRepo.deleteUserById(id);

      if (!resultado) {
        throw new Error("Usuário não encontrado");
      }

      return resultado;
    } catch (error) {
      console.error("Erro no DeleteUserService:", error);
      throw error; // relança para o controller tratar
    }
  }
}

export default ClientServices;
