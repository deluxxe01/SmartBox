import CatalogoModel from "../models/CatalogoModel.js";

const CatalogoController = {

  // Criar uma nova caixa
  createCaixa: async (req, res) => {
    try {
      const { descricao, valor } = req.body;
      const imagem = req.file ? req.file.buffer : null;

      if (!descricao || !valor || !imagem) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios" });
      }

      const novaCaixa = await CatalogoModel.create({
        descricao,
        valor,
        imagem,
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
  },

  // Atualizar caixa
  updateCaixa: async (req, res) => {
    try {
      const { id } = req.params;
      const { descricao, valor } = req.body;
      const imagem = req.file ? req.file.buffer : null;

      if (!descricao || !valor) {
        return res
          .status(400)
          .json({ error: "Descrição e valor são obrigatórios" });
      }

      const caixaAtualizada = await CatalogoModel.update(
        { descricao, valor, ...(imagem && { imagem }) },
        { where: { id }, returning: true }
      );

      if (!caixaAtualizada[1][0]) {
        return res.status(404).json({ error: "Caixa não encontrada" });
      }

      return res.status(200).json(caixaAtualizada[1][0]);
    } catch (error) {
      console.error("Erro ao atualizar caixa:", error);
      return res.status(500).json({ error: "Erro ao atualizar caixa" });
    }
  },

  // EXCLUIR caixa 🔥
  deleteCaixa: async (req, res) => {
    try {
      const { id } = req.params;

      const caixa = await CatalogoModel.findByPk(id);

      if (!caixa) {
        return res.status(404).json({ error: "Caixa não encontrada" });
      }

      await caixa.destroy();

      return res.status(200).json({ message: "Caixa excluída com sucesso" });
    } catch (error) {
      console.error("Erro ao excluir caixa:", error);
      return res.status(500).json({ error: "Erro ao excluir caixa" });
    }
  },

  // Buscar imagem
  getImagemCaixa: async (req, res) => {
    try {
      const { id } = req.params;
      const caixa = await CatalogoModel.findByPk(id);

      if (!caixa || !caixa.imagem) {
        return res.status(404).send("Imagem não encontrada");
      }

      res.setHeader("Content-Type", "image/png");
      res.send(caixa.imagem);
    } catch (error) {
      console.error("Erro ao buscar imagem:", error);
      res.status(500).send("Erro ao buscar imagem");
    }
  },
};

export default CatalogoController;
