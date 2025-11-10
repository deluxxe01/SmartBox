import { useState, useEffect } from 'react';
import MenuAdm from '../../Components/Menu/MenuAdm.jsx';
import './GestaoCaixas.css';

function GestaoCaixas() {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(null); // para pré-visualização
  const [caixas, setCaixas] = useState([]);

  // Carrega todas as caixas ao abrir a página
  useEffect(() => {
    carregarCaixas();
  }, []);

  const carregarCaixas = async () => {
    try {
      const res = await fetch("http://localhost:3000/catalogo");
      const data = await res.json();
      setCaixas(data);
    } catch (err) {
      console.error("Erro ao carregar caixas:", err);
    }
  };

  const handleAdicionarCaixa = async () => {
    if (!imagem || !descricao || !valor) {
      alert("Preencha todos os campos");
      return;
    }

    const formData = new FormData();
    formData.append("imagem", imagem);
    formData.append("descricao", descricao);
    formData.append("valor", valor);

    try {
      const res = await fetch("http://localhost:3000/catalogo", {
        method: "POST",
        body: formData
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Caixa adicionada:", data);
        setDescricao('');
        setValor('');
        setImagem(null);
        setPreview(null); // limpa preview
        carregarCaixas(); // Atualiza a lista
      } else {
        console.error("Erro ao adicionar caixa");
      }
    } catch (err) {
      console.error("Erro ao conectar com o servidor:", err);
    }
  };

  const handleExcluirCaixa = async (id) => {
    try {
      await fetch(`http://localhost:3000/catalogo/${id}`, {
        method: "DELETE"
      });
      carregarCaixas(); // Atualiza a lista
    } catch (err) {
      console.error("Erro ao excluir caixa:", err);
    }
  };

  return (
    <div className='Container-GestaoCaixas'>
      <h1 className='Titulo-Dashboard'>Gestão de Caixas</h1>
      <MenuAdm />

      <div className='ContainerInfosCaixa'>
        <input
          className="InputSearch"
          type="text"
          placeholder="Buscar caixa..."
        />

        <div className='ContainerInfosCaixa2'>
          <p>+ Adicionar uma imagem da caixa</p>
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              setImagem(file);

              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setPreview(reader.result); // define preview
                };
                reader.readAsDataURL(file);
              } else {
                setPreview(null);
              }
            }}
          />

          <div className='InptDescrição'>
            <label>Descrição</label>
            <input
              className="InptDes"
              type="text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className='InptValor'>
            <label>Valor</label>
            <input
              className="InptDes"
              type="text"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </div>

          <div className='ButtonsContainer'>
            <button className='AdcionarButtons' onClick={handleAdicionarCaixa}>
              Adicionar caixa
            </button>
          </div>
        </div>

        <p className='P-VisuCaixa'>Visualização da Caixa</p>
        <div className='Container-VisuCaixa'>
          {/* Pré-visualização da caixa que está sendo adicionada */}
          {preview && (
            <div style={{ border: '1px solid #ccc', padding: '10px', display: 'inline-block', margin: '10px' }}>
              <img src={preview} alt="Pré-visualização" width={150} />
              <p>{descricao}</p>
              <p>R$ {parseFloat(valor || 0).toFixed(2)}</p>
            </div>
          )}

          {/* Lista de caixas já cadastradas */}
          {caixas.map((caixa) => (
            <div key={caixa.id} style={{ border: '1px solid #ccc', padding: '10px', display: 'inline-block', margin: '10px' }}>
              <img
                src={`http://localhost:3000/catalogo/${caixa.id}/imagem`}
                alt="Caixa"
                width={150}
              />
              <p>{caixa.descricao}</p>
              <p>R$ {parseFloat(caixa.valor).toFixed(2)}</p>
              <button onClick={() => handleExcluirCaixa(caixa.id)}>Excluir</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GestaoCaixas;
