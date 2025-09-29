import './Caixa_persona_etp1.css';
import React, { useState } from 'react';

function SeletorCor({ titulo, corSelecionada, setCor }) {
  const cores = ['vermelho', 'preto', 'azul', 'verde', 'branco', 'amarelo'];

  return (
    <div>
      <div className="titulo_secao"><p>{titulo}</p></div>
      <div className="cores_container">
        {cores.map(cor => (
          <div key={cor} className={`container_cor_bnt ${corSelecionada === cor ? 'selecionado' : ''}`}>
            <button className={`cor_bnt ${cor}`} onClick={() => setCor(cor)}></button>
          </div>
        ))}
      </div>
    </div>
  );
}

function SeletorDesenho({ titulo, desenhoSelecionado, setDesenho }) {
  const desenhos = [
    { nome: 'Barco', img: './icon/barco_desenho.svg' },
    { nome: 'Estrela', img: './icon/estrela_desenho.svg' },
    { nome: 'Casa', img: './icon/casa_desenho.svg' },
    { nome: 'Sem desenho', img: './icon/sem_image.svg' }
  ];

  return (
    <div>
      <div className="titulo_secao"><p>{titulo}</p></div>
      <div className="desenhos_container">
        {desenhos.map(d => (
          <button
            key={d.nome}
            className={`desenho_bnt ${desenhoSelecionado === d.nome ? 'selecionado' : ''}`}
            onClick={() => setDesenho(d.nome)}
          >
            <img src={d.img} alt={d.nome} className="desenho_img" />
            <span>{d.nome}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Caixa_persona_etp1() {
  const [etapa, setEtapa] = useState('cores');
  const [personalizacoes, setPersonalizacoes] = useState({
    1: { corChassi: null, corLaminaEsq: null, corLaminaFront: null, corLaminaDir: null, desenhoLaminaEsq: null, desenhoLaminaFront: null, desenhoLaminaDir: null },
    2: { corChassi: null, corLaminaEsq: null, corLaminaFront: null, corLaminaDir: null, desenhoLaminaEsq: null, desenhoLaminaFront: null, desenhoLaminaDir: null },
    3: { corChassi: null, corLaminaEsq: null, corLaminaFront: null, corLaminaDir: null, desenhoLaminaEsq: null, desenhoLaminaFront: null, desenhoLaminaDir: null },
  });

  const [andares, setAndares] = useState(1);
  const [maxAndarLiberado, setMaxAndarLiberado] = useState(1);
  const [erroMsg, setErroMsg] = useState('');

  const atualizarCor = (campo, valor) => {
    setPersonalizacoes(prev => ({ ...prev, [andares]: { ...prev[andares], [campo]: valor } }));
    setErroMsg('');
  };

  const atualizarDesenho = (lamina, valor) => {
    setPersonalizacoes(prev => ({ ...prev, [andares]: { ...prev[andares], [lamina]: valor } }));
    setErroMsg('');
  };

  const todasCoresSelecionadas = (andar) => {
    const config = personalizacoes[andar];
    return config.corChassi && config.corLaminaEsq && config.corLaminaFront && config.corLaminaDir;
  };

  const todosDesenhosSelecionados = (andar) => {
    const config = personalizacoes[andar];
    return config.desenhoLaminaEsq && config.desenhoLaminaFront && config.desenhoLaminaDir;
  };

  const trocarAndar = (novoAndar) => {
    const validacaoParaAvancar = etapa === 'cores'
      ? todasCoresSelecionadas(andares)
      : todosDesenhosSelecionados(andares);

    const podeVoltar = novoAndar < andares;
    const podeAvancar = novoAndar === andares + 1 && validacaoParaAvancar;
    const mesmoAndar = novoAndar === andares;

    if (etapa === 'desenhos' && maxAndarLiberado === 1 && novoAndar !== 1) {
      setErroMsg("Só é possível escolher desenhos no 1º andar.");
      return;
    }

    const habilitado = podeVoltar || podeAvancar || mesmoAndar;

    if (habilitado) {
      setAndares(novoAndar);
      setMaxAndarLiberado(prev => Math.max(prev, novoAndar));
      setErroMsg('');
    } else {
      const itemFaltante = etapa === 'cores' ? 'cores' : 'desenhos';
      setErroMsg(`Selecione todos os ${itemFaltante} antes de avançar para o próximo andar.`);
    }
  };

  const irParaEtapaDesenhos = () => {
    for (let i = 1; i <= maxAndarLiberado; i++) {
      if (!todasCoresSelecionadas(i)) {
        setErroMsg(`Por favor, complete a seleção de cores do ${i}° andar antes de continuar.`);
        return;
      }
    }
    setErroMsg('');
    setEtapa('desenhos');
  };

  const atual = personalizacoes[andares];

  return (
    <div className="container_page_caixa_persona">
      <div className="container_m3D">
        <div className="container_select_de_paginas">
          <img src="./images/logo_smartBox.svg" className="img_logo_select_paginas" alt="Logo" />
        </div>
      </div>

      <div className="container_personalizacao_caixa">
        <div>
          <p className="p_caixa_personalizada_etp1">
            Personalização ({etapa === 'cores' ? 'Cores' : 'Desenhos'}): {andares}° andar
          </p>

          <div>
            <div className="titulo_secao"><p>Andares</p></div>
            <div className="container_numero_andares">
              {[1, 2, 3].map(num => {
                const validacaoParaAvancar = etapa === 'cores' ? todasCoresSelecionadas(andares) : todosDesenhosSelecionados(andares);
                const podeVoltar = num < andares;
                const podeAvancar = num === andares + 1 && validacaoParaAvancar;
                const mesmoAndar = num === andares;

                const habilitado = (etapa === 'desenhos' && maxAndarLiberado === 1)
                  ? num === 1
                  : (podeVoltar || podeAvancar || mesmoAndar);

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

          {etapa === 'cores' ? (
            <>
              <SeletorCor titulo="Cor do chassi" corSelecionada={atual.corChassi} setCor={(c) => atualizarCor('corChassi', c)} />
              <SeletorCor titulo="Cor da paleta esquerda" corSelecionada={atual.corLaminaEsq} setCor={(c) => atualizarCor('corLaminaEsq', c)} />
              <SeletorCor titulo="Cor da paleta frontal" corSelecionada={atual.corLaminaFront} setCor={(c) => atualizarCor('corLaminaFront', c)} />
              <SeletorCor titulo="Cor da paleta direita" corSelecionada={atual.corLaminaDir} setCor={(c) => atualizarCor('corLaminaDir', c)} />
            </>
          ) : (
            <>
              {(maxAndarLiberado > 1 || andares === 1) ? (
                <>
                  <SeletorDesenho titulo="Lâmina Esquerda" desenhoSelecionado={atual.desenhoLaminaEsq} setDesenho={(d) => atualizarDesenho('desenhoLaminaEsq', d)} />
                  <SeletorDesenho titulo="Lâmina Frontal" desenhoSelecionado={atual.desenhoLaminaFront} setDesenho={(d) => atualizarDesenho('desenhoLaminaFront', d)} />
                  <SeletorDesenho titulo="Lâmina Direita" desenhoSelecionado={atual.desenhoLaminaDir} setDesenho={(d) => atualizarDesenho('desenhoLaminaDir', d)} />
                </>
              ) : (
                <p className="mensagem_erro">Só é possível escolher desenhos no 1º andar.</p>
              )}
            </>
          )}

          {erroMsg && <p className="mensagem_erro">{erroMsg}</p>}
        </div>

        <div className="container_bnt_proxima_etapa">
          {etapa === 'desenhos' && (
            <button className="bnt_voltar_etapa" onClick={() => { setEtapa('cores'); setErroMsg(''); }}>
              Voltar
            </button>
          )}

          <button className="bnt_proxima_etapa" onClick={etapa === 'cores' ? irParaEtapaDesenhos : () => alert('Personalização finalizada!')}>
            {etapa === 'cores' ? 'Próxima etapa' : 'Finalizar'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Caixa_persona_etp1;
