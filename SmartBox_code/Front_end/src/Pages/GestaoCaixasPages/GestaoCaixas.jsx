import { useState, useEffect } from 'react';
import MenuAdm from '../../Components/Menu/MenuAdm.jsx';
import './GestaoCaixas.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function GestaoCaixas() {
  const navigate = useNavigate()
  const { id } = useParams();
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(null); // para pré-visualização
  const [caixas, setCaixas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  // Carrega todas as caixas ao abrir a página
  useEffect(() => {
    carregarCaixas();
  }, []);

useEffect(() => {
  if (!id) return; // se abrir sem ID pelo menu, apenas ignora

  const carregarCaixaPorId = async () => {
    try {
      const res = await fetch(`http://localhost:3000/catalogo/${id}`);
      const data = await res.json();

      setSelectedId(data.id);
      setDescricao(data.descricao);
      setValor(data.valor);
      setPreview(`http://localhost:3000/catalogo/${data.id}/imagem`);
      setImagem(null);

    } catch (err) {
      console.error("Erro ao carregar caixa:", err);
    }
  };

  carregarCaixaPorId();
}, [id]);
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

        navigate('/catalogoadmin')
      } else {
        console.error("Erro ao adicionar caixa");
      }
    } catch (err) {
      console.error("Erro ao conectar com o servidor:", err);
    }

  };
const handleBuscarCaixa = (termo) => {
  setSearchTerm(termo);

  const caixaEncontrada = caixas.find((caixa) =>
    caixa.descricao.toLowerCase().includes(termo.toLowerCase())
  );

  if (caixaEncontrada) {
    setSelectedId(caixaEncontrada.id); // <-- AQUI
    setDescricao(caixaEncontrada.descricao);
    setValor(caixaEncontrada.valor);
    setPreview(`http://localhost:3000/catalogo/${caixaEncontrada.id}/imagem`);
    setImagem(null);
  } else {
    setSelectedId(null);
    setDescricao('');
    setValor('');
    setPreview(null);
    setImagem(null);
  }
};


  const handleExcluirCaixa = async (id) => {
  if (!id) {
    alert("Nenhuma caixa selecionada!");
    return;
  }

  try {
    const res = await fetch(`http://localhost:3000/catalogo/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Caixa excluída!");
      carregarCaixas();
      setSelectedId(null);
      setDescricao('');
      setValor('');
      setPreview(null);
      setImagem(null);
      setSearchTerm('');
    } else {
      alert("Erro ao excluir caixa");
    }
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
  value={searchTerm}
  onChange={(e) => handleBuscarCaixa(e.target.value)}
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
           <button onClick={() => handleExcluirCaixa(selectedId)}>Excluir</button>
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

        </div>
      </div>
    </div>
  );
}

export default GestaoCaixas;
