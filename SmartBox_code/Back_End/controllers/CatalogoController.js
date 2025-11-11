
import CatalogoModel from "../models/CatalogoModel.js"; // seu model do catálogo

const CatalogoController = {

  // Criar uma nova caixa
  createCaixa: async (req, res) => {
    try {
      const { descricao, valor } = req.body;
      const imagem = req.file ? req.file.buffer : null; // multer coloca a imagem em req.file

      if (!descricao || !valor || !imagem) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
      }

      const novaCaixa = await CatalogoModel.create({
        descricao,
        valor,
        imagem
      });

      return res.status(201).json(novaCaixa);

    } catch (error) {
      console.error("Erro ao criar caixa:", error);
      return res.status(500).json({ error: "Erro ao criar caixa" });
    }
  },

  // Listar todas as caixas
  getCaixas: async (req, res) => {
    try {
      const caixas = await CatalogoModel.findAll();
      return res.status(200).json(caixas);
    } catch (error) {
      console.error("Erro ao buscar caixas:", error);
      return res.status(500).json({ error: "Erro ao buscar caixas" });
    }
  }

};

export default CatalogoController;
