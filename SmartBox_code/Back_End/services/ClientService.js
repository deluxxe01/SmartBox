import ModelClient from "../models/ClientModel.js";
import clientRepo from "../Repository/ClientRepository.js";

class clientServices {
  async InsertUserService(user) {
    // Regra de negócio
    const emailRepetido = await clientRepo.findEmail(user);

    if (emailRepetido.length > 0) {
      throw new Error("Email já inserido, por favor insira outro");
    }

    const consulta = await clientRepo.InsertUser(user);
    console.log("serviceClient", consulta);

    return consulta;
  }

  static async LoginUser(user) {
    // Regra de negócio
    const consulta = await clientRepo.LoginUser(user);

    if (!consulta) {
      throw new Error("Usuário não existe");
    }

    return consulta;
  }

  // Novo método para deletar usuário
  async DeleteUserService(id) {
    try {
      // Chama o repositório para deletar pelo id
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

export default clientServices;
