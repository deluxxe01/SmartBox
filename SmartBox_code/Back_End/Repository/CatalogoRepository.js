import pool from "../database/db.js"; // sua conexão com o banco

const CatalogoRepository = {
  // Inserir caixa (com imagem BYTEA)
  async insertCaixa(caixa) {
    const { imagem, descricao, valor } = caixa;
    const query = `
      INSERT INTO catalogo_caixa (imagem, descricao, valor)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [imagem, descricao, valor];
    const result = await pool.query(query, values);
    return result.rows[0];
  },

  // Listar todas as caixas
  async listarCatalogo() {
    const result = await pool.query("SELECT id, descricao, valor FROM catalogo_caixa ORDER BY id DESC");
    return result.rows;
  },

  // Buscar caixa por ID
  async buscarCaixaPorId(id) {
    const result = await pool.query("SELECT * FROM catalogo_caixa WHERE id = $1", [id]);
    return result.rows[0];
  },

  // Deletar caixa
  async deletarCaixa(id) {
    const result = await pool.query("DELETE FROM catalogo_caixa WHERE id = $1 RETURNING *", [id]);
    return result.rowCount > 0;
  }
};

export default CatalogoRepository;