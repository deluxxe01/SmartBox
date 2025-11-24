import CatalogoRepository from "../Repository/CatalogoRepository.js";

class CatalogoService {
  
  // Inserir caixa
  async insertCaixaService(caixa) {
    const consulta = await CatalogoRepository.insertCaixa(caixa);
    console.log("serviceCatalogo:", consulta);
    return consulta;
  }

  // Listar todas as caixas
  async listarCatalogoService() {
    const consulta = await CatalogoRepository.listarCatalogo();
    return consulta;
  }
async atualizarCaixaService(id, caixa) {
  const consulta = await CatalogoRepository.atualizarCaixa(id, caixa);
  if (!consulta) {
    throw new Error("Caixa não encontrada");
  }
  return consulta;
}
  // Buscar uma caixa pelo ID
  async buscarCaixaPorIdService(id) {
    const consulta = await CatalogoRepository.buscarCaixaPorId(id);
    if (!consulta) {
      throw new Error("Caixa não encontrada");
    }
    return consulta;
  }

  // Deletar caixa pelo ID
  async deletarCaixaService(id) {
    const consulta = await CatalogoRepository.deletarCaixa(id);
    if (!consulta) {
      throw new Error("Caixa não encontrada");
    }
    return consulta;
  }
}

export default CatalogoService;
