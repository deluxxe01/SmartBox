import "./Caixa_persona_etp1.css";
import React, { useState, useContext } from "react";
import axios from "axios";
import NavBar from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Context/Globalcontext";

function SeletorCor({ titulo, corSelecionada, setCor }) {
  const cores = ["vermelho", "preto", "azul", "verde", "branco", "amarelo"];
  const { usuarioAtual } = useContext(GlobalContext);

  return (
    <div>
      <div className="titulo_secao">
        <p>{titulo}</p>
      </div>
      <div className="cores_container">
        {cores.map((cor) => (
          <div
            key={cor}
            className={`container_cor_bnt ${
              corSelecionada === cor ? "selecionado" : ""
            }`}
          >
            <button
              className={`cor_bnt ${cor}`}
              onClick={() => setCor(cor)}
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
}

function SeletorDesenho({ titulo, desenhoSelecionado, setDesenho }) {
  const desenhos = [
    { nome: "Barco", img: "./icon/barco_desenho.svg", cor: "#CB0019" },
    { nome: "Estrela", img: "./icon/estrela_desenho.svg", cor: "#2A7DF0" },
    { nome: "Casa", img: "./icon/casa_desenho.svg", cor: "#3DAE00" },
    { nome: "Sem desenho", img: "./icon/sem_image.svg", cor: "#222222" },
  ];

  return (
    <div>
      <div className="titulo_secao">
        <p>{titulo}</p>
      </div>
      <div className="desenhos_container">
        {desenhos.map((d) => (
          <button
            key={d.nome}
            style={{ backgroundColor: d.cor }}
            className={`desenho_bnt ${
              desenhoSelecionado === d.nome ? "selecionado" : ""
            }`}
            onClick={() => setDesenho(d.nome)}
          >
            <img src={d.img} alt={d.nome} className="desenho_img" />
          </button>
        ))}
      </div>
    </div>
  );
}

function Caixa_persona_etp1() {
  const [etapa, setEtapa] = useState("cores");
  const [andares, setAndares] = useState(1);
  const [maxAndarLiberado, setMaxAndarLiberado] = useState(1);
  const [erroMsg, setErroMsg] = useState("");
  const { usuarioAtual } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [personalizacoes, setPersonalizacoes] = useState({
    1: {
      corChassi: null,
      corLaminaEsq: null,
      corLaminaFront: null,
      corLaminaDir: null,
      desenhoLaminaEsq: null,
      desenhoLaminaFront: null,
      desenhoLaminaDir: null,
    },
    2: {
      corChassi: null,
      corLaminaEsq: null,
      corLaminaFront: null,
      corLaminaDir: null,
      desenhoLaminaEsq: null,
      desenhoLaminaFront: null,
      desenhoLaminaDir: null,
    },
    3: {
      corChassi: null,
      corLaminaEsq: null,
      corLaminaFront: null,
      corLaminaDir: null,
      desenhoLaminaEsq: null,
      desenhoLaminaFront: null,
      desenhoLaminaDir: null,
    },
  });

  // Atualiza cor de uma parte do andar
  const atualizarCor = (campo, valor) => {
    setPersonalizacoes((prev) => ({
      ...prev,
      [andares]: { ...prev[andares], [campo]: valor },
    }));
    setErroMsg("");
  };

  // Atualiza desenho de uma lâmina
  const atualizarDesenho = (lamina, valor) => {
    setPersonalizacoes((prev) => ({
      ...prev,
      [andares]: { ...prev[andares], [lamina]: valor },
    }));
    setErroMsg("");
  };

  const todasCoresSelecionadas = (andar) => {
    const config = personalizacoes[andar];
    return (
      config.corChassi &&
      config.corLaminaEsq &&
      config.corLaminaFront &&
      config.corLaminaDir
    );
  };

  const todosDesenhosSelecionados = (andar) => {
    const config = personalizacoes[andar];
    return (
      config.desenhoLaminaEsq &&
      config.desenhoLaminaFront &&
      config.desenhoLaminaDir
    );
  };

  const trocarAndar = (novoAndar) => {
    if (novoAndar >= 1 && novoAndar <= 3) {
      setAndares(novoAndar);
      setMaxAndarLiberado((prev) => Math.max(prev, novoAndar));
      setErroMsg("");
    }
  };

  

    const enviarCaixa = async () => {
      await axios.post('api/createbox',{
       
    payload:{

      caixa:{
        
        bloco1:{
          bloco1_cor_chasi:personalizacoes[1].corChassi,
         bloco1_lamina_cor_esq:personalizacoes[1].corLaminaEsq,
         bloco1_lamina_cor_front:personalizacoes[1].corLaminaFront,
        bloco1_lamina_cor_dir:personalizacoes[1].corLaminaDir,
        bloco1_desenho_lamina_dir:personalizacoes[1].desenhoLaminaEsq,
        bloco1_desenho_lamina_front:personalizacoes[1].desenhoLaminaFront,
        bloco1_desenho_lamina_esq:personalizacoes[1]. desenhoLaminaDir,
      },
        bloco2:{
        bloco2_cor_chasi:personalizacoes[2].corChassi,
        bloco2_lamina_cor_esq:personalizacoes[2].corLaminaEsq,
        bloco2_lamina_cor_front:personalizacoes[2].corLaminaFront,
        bloco2_lamina_cor_dir:personalizacoes[2].corLaminaDir,
        bloco2_desenho_lamina_dir:personalizacoes[2].desenhoLaminaEsq,
        bloco2_desenho_lamina_front:personalizacoes[2].desenhoLaminaFront,
        bloco2_desenho_lamina_esq:personalizacoes[2].desenhoLaminaDir,
        
        },
        bloco3:{
          bloco3_cor_chasi:personalizacoes[3].corChassi,
        bloco3_lamina_cor_esq:personalizacoes[3].corLaminaEsq,
        bloco3_lamina_cor_front:personalizacoes[3].corLaminaFront,
        bloco3_lamina_cor_dir:personalizacoes[3].corLaminaDir,
        bloco3_desenho_lamina_dir:personalizacoes[3].desenhoLaminaEsq,
        bloco3_desenho_lamina_front:personalizacoes[3].desenhoLaminaFront,
        bloco3_desenho_lamina_esq:personalizacoes[3].desenhoLaminaDir,
        
      },
    
    },
    sku:'caixinha',
          
  } ,
   
   
    callbackUrl: "http://localhost:3333/callback"
  }
  
  )
   









}
  const atual = personalizacoes[andares];

console.log(personalizacoes)


  return (
    <div className="container_page_caixa_persona">
      <div className="container_m3D">
        <div className="container_select_de_paginas">
          <img
            src="./images/logo_smartBox.svg"
            className="img_logo_select_paginas"
            alt="Logo"
          />
        </div>
      </div>

      <div className="container_personalizacao_caixa">
        <div>
          <p className="p_caixa_personalizada_etp1">
            Personalização ({etapa === "cores" ? "Cores" : "Desenhos"}): {andares}° andar
          </p>

          {/* Seletor de andares */}
          <div>
            <div className="titulo_secao">
              <p>Andares</p>
            </div>
            <div className="container_numero_andares">
              {[1, 2, 3].map((num) => {
                const validacaoParaAvancar =
                  etapa === "cores"
                    ? todasCoresSelecionadas(andares)
                    : todosDesenhosSelecionados(andares);
                const podeVoltar = num < andares;
                const podeAvancar = num === andares + 1 && validacaoParaAvancar;
                const mesmoAndar = num === andares;

                const habilitado = podeVoltar || podeAvancar || mesmoAndar;

                return (
                  <button
                    key={num}
                    className={`bnt_andar ${
                      andares === num ? "andar_selecionado" : ""
                    } ${!habilitado ? "andar_bloqueado" : ""}`}
                    onClick={() => habilitado && trocarAndar(num)}
                    disabled={!habilitado}
                  >
                    {num}° andar
                  </button>
                );
              })}
            </div>
          </div>

          {/* Escolha de cores ou desenhos */}
          {etapa === "cores" ? (
            <>
              <SeletorCor
                titulo="Cor do chassi"
                corSelecionada={atual.corChassi}
                setCor={(c) => atualizarCor("corChassi", c)}
              />
              <SeletorCor
                titulo="Cor da paleta esquerda"
                corSelecionada={atual.corLaminaEsq}
                setCor={(c) => atualizarCor("corLaminaEsq", c)}
              />
              <SeletorCor
                titulo="Cor da paleta frontal"
                corSelecionada={atual.corLaminaFront}
                setCor={(c) => atualizarCor("corLaminaFront", c)}
              />
              <SeletorCor
                titulo="Cor da paleta direita"
                corSelecionada={atual.corLaminaDir}
                setCor={(c) => atualizarCor("corLaminaDir", c)}
              />
            </>
          ) : (
            <>
              <SeletorDesenho
                titulo="Lâmina Esquerda"
                desenhoSelecionado={atual.desenhoLaminaEsq}
                setDesenho={(d) => atualizarDesenho("desenhoLaminaEsq", d)}
              />
              <SeletorDesenho
                titulo="Lâmina Frontal"
                desenhoSelecionado={atual.desenhoLaminaFront}
                setDesenho={(d) => atualizarDesenho("desenhoLaminaFront", d)}
              />
              <SeletorDesenho
                titulo="Lâmina Direita"
                desenhoSelecionado={atual.desenhoLaminaDir}
                setDesenho={(d) => atualizarDesenho("desenhoLaminaDir", d)}
              />
            </>
          )}

          {erroMsg && <p className="mensagem_erro">{erroMsg}</p>}
        </div>

        {/* Botões de navegação */}
        <div className="container_bnt_proxima_etapa">
          {etapa === "desenhos" && (
            <button
              className="bnt_voltar_etapa"
              onClick={() => {
                setEtapa("cores");
                setErroMsg("");
              }}
            >
              Voltar
            </button>
          )}

          <button
            className="bnt_proxima_etapa"
            onClick={() => {
              if (etapa === "cores") {
                for (let i = 1; i <= maxAndarLiberado; i++) {
                  if (!todasCoresSelecionadas(i)) {
                    setErroMsg(
                      `Por favor, complete a seleção de cores do ${i}° andar antes de continuar.`
                    );
                    return;
                  }
                }
                setErroMsg("");
                setEtapa("desenhos");
                setAndares(1); // começa os desenhos no 1º andar, mas pode trocar
              } else {
                
              }
            }}
          >
            {etapa === "cores" ? "Próxima etapa" : "Finalizar"}
          </button>

        <button onClick={()=>{enviarCaixa()}}>enviar caixa</button>
       
        </div>
      </div>
    </div>
  );
}

export default Caixa_persona_etp1;
