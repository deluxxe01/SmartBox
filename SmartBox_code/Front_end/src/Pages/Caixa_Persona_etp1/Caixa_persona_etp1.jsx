import './Caixa_persona_etp1.css';
import React, { useState } from 'react';

// Componente genérico para seleção de cor
function SeletorCor({ titulo, corSelecionada, setCor }) {
  const cores = ['vermelho', 'preto', 'azul', 'verde', 'branco', 'amarelo'];

  return (
    <div>
      <div className="titulo_secao"><p>{titulo}</p></div>
      <div className="cores_container">
        {cores.map(cor => (
          <div
            key={cor}
            className={`container_cor_bnt ${corSelecionada === cor ? 'selecionado' : ''}`}
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

function Caixa_persona_etp1() {
  const [personalizacoes, setPersonalizacoes] = useState({
    1: { corChassi: null, corLaminaEsq: null, corLaminaFront: null, corLaminaDir: null },
    2: { corChassi: null, corLaminaEsq: null, corLaminaFront: null, corLaminaDir: null },
    3: { corChassi: null, corLaminaEsq: null, corLaminaFront: null, corLaminaDir: null },
  });

  const [andares, setAndares] = useState(1);
  const [maxAndarLiberado, setMaxAndarLiberado] = useState(1);
  const [erroMsg, setErroMsg] = useState('');

  const atualizarCor = (campo, valor) => {
    setPersonalizacoes(prev => ({
      ...prev,
      [andares]: {
        ...prev[andares],
        [campo]: valor
      }
    }));
    setErroMsg('');
  };

  const todasCoresSelecionadas = (andar) => {
    const config = personalizacoes[andar];
    return Object.values(config).every(cor => cor !== null);
  };

  const trocarAndar = (novoAndar) => {
    const podeVoltar = novoAndar < andares;
    const podeAvancar = novoAndar === andares + 1 && todasCoresSelecionadas(andares);
    const mesmoAndar = novoAndar === andares;

    const habilitado = podeVoltar || podeAvancar || mesmoAndar;

    if (habilitado) {
      setAndares(novoAndar);
      setMaxAndarLiberado(prev => Math.max(prev, novoAndar));
      setErroMsg('');
    } else {
      setErroMsg('Selecione todas as cores antes de avançar para o próximo andar.');
    }
  };

  const atual = personalizacoes[andares];

console.log('Personalizações atuais:', personalizacoes);






  return (
    <div className="container_page_caixa_persona">
      {/* Lado esquerdo */}
      <div className="container_m3D">
        <div className="container_select_de_paginas">
          <img src="./images/logo_smartBox.svg" className="img_logo_select_paginas" alt="Logo" />
        </div>
      
        


      </div>

      {/* Lado direito */}
      <div className="container_personalizacao_caixa">
        <div>
          <p className="p_caixa_personalizada_etp1">
            Personalização da caixa: {andares}° andar
          </p>

          {/* Botões de navegação por andar */}
          <div>
            <div className="titulo_secao"><p>Andares</p></div>
            <div className="container_numero_andares">
              {[1, 2, 3].map(num => {
                const podeVoltar = num < andares;
                const podeAvancar = num === andares + 1 && todasCoresSelecionadas(andares);
                const mesmoAndar = num === andares;

                const habilitado = podeVoltar || podeAvancar || mesmoAndar;

                return (
                  <button
                    key={num}
                    className={`bnt_andar ${andares === num ? 'andar_selecionado' : ''} ${!habilitado ? 'andar_bloqueado' : ''}`}
                    onClick={() => habilitado && trocarAndar(num)}
                    disabled={!habilitado}
                  >
                    {num}° andar
                  </button>
                );
              })}
            </div>
          </div>

          {/* Seletores de cor */}
          <SeletorCor titulo="Cor do chassi" corSelecionada={atual.corChassi} setCor={(c) => atualizarCor('corChassi', c)} />
          <SeletorCor titulo="Cor da paleta esquerda" corSelecionada={atual.corLaminaEsq} setCor={(c) => atualizarCor('corLaminaEsq', c)} />
          <SeletorCor titulo="Cor da paleta frontal" corSelecionada={atual.corLaminaFront} setCor={(c) => atualizarCor('corLaminaFront', c)} />
          <SeletorCor titulo="Cor da paleta direita" corSelecionada={atual.corLaminaDir} setCor={(c) => atualizarCor('corLaminaDir', c)} />

          {/* Mensagem de erro */}
          {erroMsg && <p className="mensagem_erro">{erroMsg}</p>}
        </div>

        {/* Botão visual de próxima etapa (sem função) */}
        <div className="container_bnt_proxima_etapa">
          <button className="bnt_proxima_etapa">
            Próxima etapa
          </button>
        </div>
      </div>
    </div>
  );
}

export default Caixa_persona_etp1;
