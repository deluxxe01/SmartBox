import "./Caixa_persona_etp1.css";
import React, { useState, useContext } from "react";
import axios from "axios";
import NavBar from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Context/Globalcontext";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

/* ================= MAPAS ================= */
const mapaCoresHex = {
  vermelho: "#ff0000",
  azul: "#0072ff",
  amarelo: "#ffd500",
  verde: "#1fa700",
  preto: "#000000",
  branco: "#ffffff",
};

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

/* ================= SELETORES ================= */
function SeletorCor({ titulo, corSelecionada, setCor, opcoes }) {
  return (
    <div>
      <div className="titulo_secao">
        <p>{titulo}</p>
      </div>
      <div className="cores_container">
        {opcoes.map((cor) => (
          <div
            key={cor}
            className={`container_cor_bnt ${corSelecionada === cor ? "selecionado" : ""}`}
          >
            <button className={`cor_bnt ${cor}`} onClick={() => setCor(cor)}></button>
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
            className={`desenho_bnt ${desenhoSelecionado === d.nome ? "selecionado" : ""}`}
            onClick={() => setDesenho(d.nome)}
          >
            <img src={d.img} alt={d.nome} className="desenho_img" />
          </button>
        ))}
      </div>
    </div>
  );
}


function Modelo({ url, cores, desenhos }) {
  const gltf = useGLTF(url);
  const { materials, scene } = gltf;

  React.useEffect(() => {
    if (!materials) return;

    const atualizarMaterial = (materialName, corSelecionada, corPadrao, opacidadePadrao) => {
      if (!materials[materialName]) return;
      const corHex = corSelecionada ? mapaCoresHex[corSelecionada] : corPadrao;
      materials[materialName].color.set(corHex);
      materials[materialName].transparent = !corSelecionada;
      materials[materialName].opacity = corSelecionada ? 1 : opacidadePadrao;
    };

    atualizarMaterial("Material.001", cores.chassi, "#808080", 0.4); // Chassi
    atualizarMaterial("Material.002", cores.laminaDir, "#525252", 0.7); // Lâmina direita
    atualizarMaterial("Material.003", cores.laminaFront, "#525252", 0.7); // Lâmina frontal
    atualizarMaterial("Material.004", cores.laminaEsq, "#525252", 0.7); // Lâmina esquerda

    
  }, [cores, materials]);

  return <primitive object={scene} />;
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
    1: { corChassi: null, corLaminaEsq: null, corLaminaFront: null, corLaminaDir: null, desenhoLaminaEsq: null, desenhoLaminaFront: null, desenhoLaminaDir: null },
    2: { corChassi: null, corLaminaEsq: null, corLaminaFront: null, corLaminaDir: null, desenhoLaminaEsq: null, desenhoLaminaFront: null, desenhoLaminaDir: null },
    3: { corChassi: null, corLaminaEsq: null, corLaminaFront: null, corLaminaDir: null, desenhoLaminaEsq: null, desenhoLaminaFront: null, desenhoLaminaDir: null },
  });

  const atualizarCor = (campo, valor) => {
    setPersonalizacoes((prev) => ({ ...prev, [andares]: { ...prev[andares], [campo]: valor } }));
    setErroMsg("");
  };

  const atualizarDesenho = (lamina, valor) => {
    setPersonalizacoes((prev) => ({ ...prev, [andares]: { ...prev[andares], [lamina]: valor } }));
    setErroMsg("");
  };

  const todasCoresSelecionadas = (andar) => {
    const c = personalizacoes[andar];
    return c.corChassi && c.corLaminaEsq && c.corLaminaFront && c.corLaminaDir;
  };

  const todosDesenhosSelecionados = (andar) => {
    const c = personalizacoes[andar];
    return c.desenhoLaminaEsq && c.desenhoLaminaFront && c.desenhoLaminaDir;
  };

  const trocarAndar = (novoAndar) => {
    if (novoAndar >= 1 && novoAndar <= 3) {
      setAndares(novoAndar);
      setMaxAndarLiberado((prev) => Math.max(prev, novoAndar));
      setErroMsg("");
    }
  };

const enviarCaixa = async () => {
  try {
    // Valida se todos os desenhos foram escolhidos
    for (let i = 1; i <= maxAndarLiberado; i++) {
      if (!todosDesenhosSelecionados(i)) {
        setErroMsg(`Por favor, complete a seleção de desenhos do ${i}° andar.`);
        return;
      }
    }

    setErroMsg(""); // Limpa erro anterior
   

    const payloadFinal = [{
      payload: {
        orderId: "",     // você preenche depois
        id_client: usuarioAtual?.id_usuario ?? "",

        caixa: {
          codigoProduto: maxAndarLiberado,

          bloco1: {
            cor: converterCor(personalizacoes[1].corChassi),
            lamina1: converterCor(personalizacoes[1].corLaminaEsq),
            lamina2: converterCor(personalizacoes[1].corLaminaFront),
            lamina3: converterCor(personalizacoes[1].corLaminaDir),
            padrao1: converterDesenho(personalizacoes[1].desenhoLaminaEsq),
            padrao2: converterDesenho(personalizacoes[1].desenhoLaminaFront),
            padrao3: converterDesenho(personalizacoes[1].desenhoLaminaDir)
          },

          bloco2: {
            cor: converterCor(personalizacoes[2].corChassi),
            lamina1: converterCor(personalizacoes[2].corLaminaEsq),
            lamina2: converterCor(personalizacoes[2].corLaminaFront),
            lamina3: converterCor(personalizacoes[2].corLaminaDir),
            padrao1: converterDesenho(personalizacoes[2].desenhoLaminaEsq),
            padrao2: converterDesenho(personalizacoes[2].desenhoLaminaFront),
            padrao3: converterDesenho(personalizacoes[2].desenhoLaminaDir)
          },

          bloco3: {
            cor: converterCor(personalizacoes[3].corChassi),
            lamina1: converterCor(personalizacoes[3].corLaminaEsq),
            lamina2: converterCor(personalizacoes[3].corLaminaFront),
            lamina3: converterCor(personalizacoes[3].corLaminaDir),
            padrao1: converterDesenho(personalizacoes[3].desenhoLaminaEsq),
            padrao2: converterDesenho(personalizacoes[3].desenhoLaminaFront),
            padrao3: converterDesenho(personalizacoes[3].desenhoLaminaDir)
          }
        },

        sku: "caixa"
      },

      callbackUrl: "http://localhost:3333/callback"
    }];

    // Requisição para API
    const response = await axios.post("/api/createbox", payloadFinal);

    console.log("Caixa enviada com sucesso!", response.data);
    setErroMsg("Caixa enviada com sucesso! ✅");

    // Exemplo: navegar para outra página
    // navigate("/pagina-de-sucesso");

  } catch (error) {
    console.error("Erro ao enviar caixa:", error);
    setErroMsg("Erro ao enviar a caixa. Tente novamente.");
  }
};


  const atual = personalizacoes[andares];


  return (
    <div className="container_page_caixa_persona">
      <NavBar />
     <div className="container_m3D_e_persona">
      <div className="container_m3D">
        <Canvas camera={{ position: [0, 2, 3], fov: 75 }}>
          <ambientLight intensity={2} />
          <directionalLight position={[5, 5, 5]} intensity={3} />
          <OrbitControls />
          <Modelo
            url="/models/caixa_pronta_colorida.glb"
            cores={{
              chassi: atual.corChassi,
              laminaEsq: atual.corLaminaEsq,
              laminaFront: atual.corLaminaFront,
              laminaDir: atual.corLaminaDir,
            }}
          />
        </Canvas>
      </div>

      <div className="container_personalizacao_caixa">
        <p className="p_caixa_personalizada_etp1">
          Personalização ({etapa === "cores" ? "Cores" : "Desenhos"}): {andares}° andar
        </p>

        {/* ANDARES */}
        <div>
          <div className="titulo_secao">
            <p>Andares</p>
          </div>
          <div className="container_numero_andares">
            {[1, 2, 3].map((num) => {
              const validacaoParaAvancar =
                etapa === "cores" ? todasCoresSelecionadas(andares) : todosDesenhosSelecionados(andares);
              const podeVoltar = num < andares;
              const podeAvancar = num === andares + 1 && validacaoParaAvancar;
              const mesmoAndar = num === andares;
              const habilitado = podeVoltar || podeAvancar || mesmoAndar;

              return (
                <button
                  key={num}
                  className={`bnt_andar ${andares === num ? "andar_selecionado" : ""} ${
                    !habilitado ? "andar_bloqueado" : ""
                  }`}
                  onClick={() => habilitado && trocarAndar(num)}
                  disabled={!habilitado}
                >
                  {num}° andar
                </button>
              );
            })}
          </div>
        </div>

        {/* SELETORES */}
        {etapa === "cores" ? (
          <>
            <SeletorCor
              titulo="Cor do chassi"
              corSelecionada={atual.corChassi}
              setCor={(c) => atualizarCor("corChassi", c)}
              opcoes={["vermelho", "azul", "preto"]}
            />
            <SeletorCor
              titulo="Cor da paleta esquerda"
              corSelecionada={atual.corLaminaEsq}
              setCor={(c) => atualizarCor("corLaminaEsq", c)}
              opcoes={["vermelho", "azul", "preto", "verde", "amarelo", "branco"]}
            />
            <SeletorCor
              titulo="Cor da paleta frontal"
              corSelecionada={atual.corLaminaFront}
              setCor={(c) => atualizarCor("corLaminaFront", c)}
              opcoes={["vermelho", "azul", "preto", "verde", "amarelo", "branco"]}
            />
            <SeletorCor
              titulo="Cor da paleta direita"
              corSelecionada={atual.corLaminaDir}
              setCor={(c) => atualizarCor("corLaminaDir", c)}
              opcoes={["vermelho", "azul", "preto", "verde", "amarelo", "branco"]}
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

        {/* BOTÕES */}
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
                    setErroMsg(`Por favor, complete a seleção de cores do ${i}° andar antes de continuar.`);
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
      </div>
  );
}

export default Caixa_persona_etp1;
