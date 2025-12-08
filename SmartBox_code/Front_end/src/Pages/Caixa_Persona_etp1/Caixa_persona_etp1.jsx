import "./Caixa_persona_etp1.css";
import React, { useState, useContext } from "react";
import axios from "axios";
import NavBar from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Context/Globalcontext";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const mapaCores = {
  vermelho: 1,
  azul: 2,
  amarelo: 3,
  verde: 4,
  preto: 5,
  branco: 6,
  null: 0,
};

const mapaDesenhos = {
  "Sem desenho": 0,
  Casa: 1,
  Barco: 2,
  Estrela: 3,
  null: 0,
};

const converterCor = (corNome) => mapaCores[corNome] ?? 0;
const converterDesenho = (nome) => mapaDesenhos[nome] ?? 0;



function SeletorCor({ titulo, corSelecionada, setCor }) {
  const cores = ["vermelho", "preto", "azul", "verde", "branco", "amarelo"];

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

/* ================= COMPONENTE PRINCIPAL ================= */

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

  /* ================= FUNÇÕES AUXILIARES ================= */

  const atualizarCor = (campo, valor) => {
    setPersonalizacoes((prev) => ({
      ...prev,
      [andares]: { ...prev[andares], [campo]: valor },
    }));
    setErroMsg("");
  };

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

  /* ================= FUNÇÃO PARA ENVIAR CAIXA ================= */
  const enviarCaixa = async () => {
    try {
      const payload = {
        caixa: {
          bloco1: {
            bloco1_cor_chasi: converterCor(personalizacoes[1].corChassi),
            bloco1_lamina_cor_esq: converterCor(personalizacoes[1].corLaminaEsq),
            bloco1_lamina_cor_front: converterCor(personalizacoes[1].corLaminaFront),
            bloco1_lamina_cor_dir: converterCor(personalizacoes[1].corLaminaDir),
            bloco1_desenho_lamina_esq: converterDesenho(personalizacoes[1].desenhoLaminaEsq),
            bloco1_desenho_lamina_front: converterDesenho(personalizacoes[1].desenhoLaminaFront),
            bloco1_desenho_lamina_dir: converterDesenho(personalizacoes[1].desenhoLaminaDir),
          },
          bloco2: {
            bloco2_cor_chasi: converterCor(personalizacoes[2].corChassi),
            bloco2_lamina_cor_esq: converterCor(personalizacoes[2].corLaminaEsq),
            bloco2_lamina_cor_front: converterCor(personalizacoes[2].corLaminaFront),
            bloco2_lamina_cor_dir: converterCor(personalizacoes[2].corLaminaDir),
            bloco2_desenho_lamina_esq: converterDesenho(personalizacoes[2].desenhoLaminaEsq),
            bloco2_desenho_lamina_front: converterDesenho(personalizacoes[2].desenhoLaminaFront),
            bloco2_desenho_lamina_dir: converterDesenho(personalizacoes[2].desenhoLaminaDir),
          },
          bloco3: {
            bloco3_cor_chasi: converterCor(personalizacoes[3].corChassi),
            bloco3_lamina_cor_esq: converterCor(personalizacoes[3].corLaminaEsq),
            bloco3_lamina_cor_front: converterCor(personalizacoes[3].corLaminaFront),
            bloco3_lamina_cor_dir: converterCor(personalizacoes[3].corLaminaDir),
            bloco3_desenho_lamina_esq: converterDesenho(personalizacoes[3].desenhoLaminaEsq),
            bloco3_desenho_lamina_front: converterDesenho(personalizacoes[3].desenhoLaminaFront),
            bloco3_desenho_lamina_dir: converterDesenho(personalizacoes[3].desenhoLaminaDir),
          },
        },
        sku: "caixinha",
        codigoProduto: maxAndarLiberado,
        fk_id_cliente: usuarioAtual,
      };
        

      await axios.post("api/createbox", { payload });
      console.log("Caixa enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar caixa:", error);
    }
  };
const atual = personalizacoes[andares]; 
console.log(personalizacoes)



function Modelo({url}){
const gltf=useGLTF(url)
return <primitive object={gltf.scene} />

}

  return (
    <div className="container_page_caixa_persona">
      <NavBar />
      <div className="container_m3D">
        <div className="container_select_de_paginas">
          <Canvas camera={{position:[0,2,3],fov:75}}>
          <ambientLight intensity={2}/>
          <directionalLight position={[5,5,5]} intensity={3}/>
          <OrbitControls />

          <Modelo url="/models/caixa_pronta_colorida.glb" />
          </Canvas>
        </div>
      </div>

      <div className="container_personalizacao_caixa">
        <div>
          <p className="p_caixa_personalizada_etp1">
            Personalização ({etapa === "cores" ? "Cores" : "Desenhos"}): {andares}° andar
          </p>

        
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

          {/* Seletor cores ou desenhos */}
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

        {/* Botões */}
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
                setAndares(1);
              } else {
                enviarCaixa();
              }
            }}
          >
            {etapa === "cores" ? "Próxima etapa" : "Finalizar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Caixa_persona_etp1;
