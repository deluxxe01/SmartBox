import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import './Home.css';
import '../CatalogoAdminPages/CatalogoAdmin.css'
import NavBar from '../../Components/NavBar/NavBar';

function Home() {
  const [ativo, setAtivo] = useState(2)
  const [scrollAtivado, setScrollAtivado] = useState(false)

  const navigate = useNavigate()

 const [caixasProntas, setCaixasProntas] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:3000/catalogo")
      .then((res) => res.json())
      .then((data) => setCaixasProntas(data))
      .catch((err) => console.error("Erro ao carregar catálogo:", err));
  }, []);
  const irParaOutraPagina = () => {
    navigate('/login')
  };

  // 👇 NOVO: Detecta o scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 100) {
        setScrollAtivado(true)
      } else {
        setScrollAtivado(false)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='Container'>
      <div className='Container1'>
        <NavBar />

        <div className='Container-Titulo'>
          <h1 className='TituloHome'>Sua SmartBox. Seu Jeito</h1>
          <p className='PHome'>Personalize sua caixa multifunções com cores únicas e use-a como quiser!</p>
        </div>

      <div className='ImagemCaixa'>
  {ativo === 0 && <img className="CaixaVermelha" src="public/images/caixaPreta.png" alt="Caixa vermelha" />}
  {ativo === 1 && <img className="CaixaAzul" src="public/images/caixaPreta.png" alt="Caixa azul" />}
  {ativo === 2 && <img className="CaixaPreta" src="public/images/caixaPreta.png" alt="Caixa preta" />}
     </div>

        <div className='Container-ButtonIrCadastro'>
          <button className='Button' onClick={irParaOutraPagina}>Entrar</button>
        </div>

        <div className='Colors'>
          <button
            className={`button button1 ${ativo === 0 ? 'ativo' : ''}`}
            onClick={() => setAtivo(0)}
          ></button>

          <button
            className={`button button2 ${ativo === 1 ? 'ativo' : ''}`}
            onClick={() => setAtivo(1)}
          ></button>

          <button
            className={`button button3 ${ativo === 2 ? 'ativo' : ''}`}
            onClick={() => setAtivo(2)}
          ></button>
        </div>
      </div>

      
      <div className={`Container2 ${scrollAtivado ? 'subir' : ''}`}>
        <h2 className='Comoperso'>Como Personalizar</h2>

        <div className='ImagensPersonaliza'>
          <img className="CaixaBranco" src="public/images/Group 2.png" alt="" />
          <img className="CaixaPerso" src="public/images/caixa perso 2.png" alt="" />
          <img className="CaixaPronta" src="public/images/caixa pronta 2.png" alt="" />
        </div>

        <div className='Textos2'>
          <h3 className="Number">1. Escolha seu estilo de caixa</h3>
          <h3 className="Number2">2. Deixe com a sua Cara</h3>
          <h3 className="Number3">3. Compre a sua SmartBox</h3>
        </div>

        <div className='Textos3'>
          <p className="Number4">Opte pelos nossos modelos maiores ou mais práticos.</p>
          <p className="Number5">Escolha diferentes formas  de montar a sua caixa.</p>
          <p className="Number6">Finalize seu pedido e receba sua caixa multifunções feita sob medida na sua casa.</p>
        </div>

      <div className='Container3'>
        <h2 className='TituloPerso'> Personalize a sua própria caixa</h2>
        
         <div className="container_caixas">
          {caixasProntas.map((c) => (
            <div
              key={c.id}
              className="CatalogoADM"
            >
              <img
                src={`http://localhost:3000/catalogo/${c.id}/imagem`}
                alt="Caixa"
                className="imagemCatalogo"
              />
              <p classname="descricaoCatalogo">{c.descricao}</p>
              <p className="precoCatalogo">R$ {parseFloat(c.valor).toFixed(2)}</p>
            </div>
          ))}
        </div>
        
      </div>

      </div>
    </div>
  );
}

export default Home;
