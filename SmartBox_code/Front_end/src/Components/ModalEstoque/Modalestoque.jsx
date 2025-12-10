import axios from "axios";
import { useEffect, useState } from "react";

function ModalEstoque({ onclose, estoque, updEstoque}){
  const [acao, setAcao] = useState("adicionar"); // adicionar | deletar
  const [posicao, setPosicao] = useState();
  const [cor,setCor] = useState("vermelho")

  const posicoesOcupadas = estoque.map((e) => e.pos);
  
  // Função para adicionar
  const adicionarItem = async (num) => {

   const payload = {
    cor:cor,
    op:null
   }
console.log(posicao)
console.log(cor)
   const res = await axios.put(`/api/box/update/${posicao}`,payload)
   console.log(res)
  };

  // Função para deletar
  const deletarItem = async (num) => {
    
    const res = await axios.delete(`/api/box/delete/${posicao}`)
    alert("Infos: ",res.data)
    // aqui você chama sua API de deletar
    // axios.delete(`/api/delete/${num}`)
  };

  const validar = () => {
    const num = Number(posicao);
    if (isNaN(num) || num < 0 || num > 26) {
      alert("A posição deve ser um número entre 0 e 26.");
      return;
    }

    const itemNaPosicao = estoque.find((e) => e.pos === num);

  // 📌 ADICIONAR
  if (acao === "adicionar") {

    // Se existe um item e a cor dele NÃO é null → posição ocupada
    if (itemNaPosicao && itemNaPosicao.cor !== null) {
      alert("Essa posição já está ocupada no estoque!");
      return;
    }

  }

    if (acao === "deletar" && !posicoesOcupadas.includes(num)) {
      alert("Essa posição não existe no estoque para deletar!");
      return;
    }

    if (acao === "adicionar"){adicionarItem(num),onclose()};
    if (acao === "deletar") {deletarItem(num),onclose()};

  };

  return (
    <div className="modal-overlay" style={styles.overlay}>
      <div className="modal-content" style={styles.modal}>
        <h2>Gerenciar Estoque</h2>

        {/* Select da ação */}
        <label>Ação:</label>
        <select
          value={acao}
          onChange={(e) => setAcao(e.target.value)}
          style={styles.input}
        >
          <option value="adicionar">Adicionar</option>
          <option value="deletar">Deletar</option>
        </select>

        {/* Input de posição */}
        <label>Posição:</label>

        {acao === "deletar" ? (
          <select
            value={posicao}
            onChange={(e) => setPosicao(e.target.value)}
            style={styles.input}
          >
            <option value="">Selecione</option>
            {posicoesOcupadas.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        ) : (
            <>
                <input
                    type="number"
                    placeholder="0 a 26"
                    value={posicao}
                    onChange={(e) => setPosicao(e.target.value)}
                    style={styles.input}
                />
                <label>Cor chassi</label>
                <select style={styles.input} name="" id="" value = {cor}  onChange={(e)=> setCor(e.target.value) }>
                    <option value="vermelho">vermelho</option>
                    <option value="azul">azul</option>
                    <option value="preto">preto</option>
                </select>
            </>
            
          
        )}

        <div style={styles.buttons}>
          <button onClick={validar} style={styles.btnConfirm}>Confirmar</button>
          <button onClick={()=>{onclose()}} style={styles.btnCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "8px",
    border: "1px solid #aaa",
    borderRadius: "6px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  btnConfirm: {
    padding: "8px 12px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },
  btnCancel: {
    padding: "8px 12px",
    background: "#d9534f",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },
};

export default ModalEstoque;