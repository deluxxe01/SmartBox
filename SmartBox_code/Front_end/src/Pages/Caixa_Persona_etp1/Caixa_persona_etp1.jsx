import './Caixa_persona_etp1.css';
import NavBar from '../../Components/NavBar/NavBar';
import React, { useState } from 'react';

function Caixa_persona_etp1() {
  // Estados para guardar as escolhas
  const [corChassi, setCorChassi] = useState('null');
  const [corLaminaEsq, setCorLaminaEsq] = useState('null');
  const [corLaminaFront, setCorLaminaFront] = useState('null');
  const [corLaminaDir, setCorLaminaDir] = useState('null');
  const [andares, setAndares] = useState(1);

console.log({ corChassi, corLaminaEsq, corLaminaFront, corLaminaDir, andares });

  return (
    <div>
      <div className="container_page_caixa_persona">
        <div className="container_m3D">
          <div className='container_select_de_paginas'>
            <img src="./images/logo_smartBox.svg" className='img_logo_select_paginas' alt="Logo" />
          </div>
          <img
            src="https://i1.sndcdn.com/artworks-7n7INsM9YyE3b2KH-kyEyFw-t1080x1080.jpg"
            alt="Preview Caixa"
            className="no_biches_img"
          />
        </div>

        <div className="container_personalizacao_caixa">
          <div className="container_p_caixa_personalizada_etp1">
            <p className="p_caixa_personalizada_etp1">
              Personalização da caixa: 1° andar
            </p>
          </div>

          <div className="container_infos_andares_caixa">
            <div className="p_container_andares_caixa">
              <p>Andares</p>
            </div>
            <div className="container_numero_andares">
              <p 
                className={andares === 1 ? 'andar_selecionado' : ''} 
                onClick={() => setAndares(1)}
              >
                1 unidade
              </p>
              <p 
                className={andares === 2 ? 'andar_selecionado' : ''} 
                onClick={() => setAndares(2)}
              >
                2 unidades
              </p>
              <p 
                className={andares === 3 ? 'andar_selecionado' : ''} 
                onClick={() => setAndares(3)}
              >
                3 unidades
              </p>
            </div>
          </div>

          {/* O resto do código das cores... */}
          <div className="container_cor_chasi">
            <div className="container_cor_chasi_p"><p>Cor do chassi</p></div>
            <div className="cores_chasi">
              <div className={`container_cor_chasi_bnt_vermelho ${corChassi === 'vermelho' ? 'selecionado' : ''}`}><button className='cor_chasi_bnt_vermelho' onClick={() => setCorChassi('vermelho')}></button></div>
              <div className={`container_cor_chasi_bnt_preto ${corChassi === 'preto' ? 'selecionado' : ''}`}><button className='cor_chasi_bnt_preto' onClick={() => setCorChassi('preto')}></button></div>
              <div className={`container_cor_chasi_bnt_azul ${corChassi === 'azul' ? 'selecionado' : ''}`}><button className='cor_chasi_bnt_azul' onClick={() => setCorChassi('azul')}></button></div>
            </div>
          </div>

          <div className="container_cor_lamina_esq">
            <div className="p_cor_lamina_esq"><p>Cor da paleta esquerda</p></div>
            <div className="cores_lamina_esq">
              <div className={`container_cor_lamina_bnt_vermelho ${corLaminaEsq === 'vermelho' ? 'selecionado' : ''}`}><button className="cor_lamina_bnt_vermelho" onClick={() => setCorLaminaEsq('vermelho')}></button></div>
              <div className={`container_cor_lamina_bnt_preto ${corLaminaEsq === 'preto' ? 'selecionado' : ''}`}><button className="cor_lamina_bnt_preto" onClick={() => setCorLaminaEsq('preto')}></button></div>
              <div className={`container_cor_lamina_bnt_azul ${corLaminaEsq === 'azul' ? 'selecionado' : ''}`}><button className="cor_lamina_bnt_azul" onClick={() => setCorLaminaEsq('azul')}></button></div>
              <div className={`container_cor_lamina_bnt_verde ${corLaminaEsq === 'verde' ? 'selecionado' : ''}`}><button className="cor_lamina_bnt_verde" onClick={() => setCorLaminaEsq('verde')}></button></div>
              <div className={`container_cor_lamina_bnt_branco ${corLaminaEsq === 'branco' ? 'selecionado' : ''}`}><button className="cor_lamina_bnt_branco" onClick={() => setCorLaminaEsq('branco')}></button></div>
              <div className={`container_cor_lamina_bnt_amarelo ${corLaminaEsq === 'amarelo' ? 'selecionado' : ''}`}><button className="cor_lamina_bnt_amarelo" onClick={() => setCorLaminaEsq('amarelo')}></button></div>
            </div>
          </div>

          <div className="container_cor_lamina_front">
            <div className="p_cor_lamina_front"><p>Cor da paleta frontal</p></div>
            <div className="cor_lamina_front">
              <div className={`container_cor_lamina_bnt_vermelho ${corLaminaFront === 'vermelho' ? 'selecionado' : ''}`}><button className="cor_lamina_bnt_vermelho" onClick={() => setCorLaminaFront('vermelho')}></button></div>
              <div className={`container_cor_lamina_bnt_preto ${corLaminaFront === 'preto' ? 'selecionado' : ''}`}><button className="cor_lamina_bnt_preto" onClick={() => setCorLaminaFront('preto')}></button></div>
              <div className={`container_cor_lamina_bnt_azul ${corLaminaFront === 'azul' ? 'selecionado' : ''}`}><button className="cor_lamina_bnt_azul" onClick={() => setCorLaminaFront('azul')}></button></div>
              <div className={`container_cor_lamina_bnt_verde ${corLaminaFront === 'verde' ? 'selecionado' : ''}`}><button className="cor_lamina_bnt_verde" onClick={() => setCorLaminaFront('verde')}></button></div>
              <div className={`container_cor_lamina_bnt_branco ${corLaminaFront === 'branco' ? 'selecionado' : ''}`}><button className="cor_lamina_bnt_branco" onClick={() => setCorLaminaFront('branco')}></button></div>
              <div className={`container_cor_lamina_bnt_amarelo ${corLaminaFront === 'amarelo' ? 'selecionado' : ''}`}><button className="cor_lamina_bnt_amarelo" onClick={() => setCorLaminaFront('amarelo')}></button></div>
            </div>
          </div>

          <div className="container_cor_lamina_dir">
            <div className="p_cor_lamina_dir"><p>Cor da paleta direita</p></div>
            <div className="cor_lamina_dir">
              <div className={`container_cor_lamina_bnt_vermelho ${corLaminaDir === 'vermelho' ? 'selecionado' : ''}`}><button className="cor_lamina_bnt_vermelho" onClick={() => setCorLaminaDir('vermelho')}></button></div>
              <div className={`container_cor_lamina_bnt_preto ${corLaminaDir === 'preto' ? 'selecionado' : ''}`}><button className="cor_lamina_bnt_preto" onClick={() => setCorLaminaDir('preto')}></button></div>
              <div className={`container_cor_lamina_bnt_azul ${corLaminaDir === 'azul' ? 'selecionado' : ''}`}><button className="cor_lamina_bnt_azul" onClick={() => setCorLaminaDir('azul')}></button></div>
              <div className={`container_cor_lamina_bnt_verde ${corLaminaDir === 'verde' ? 'selecionado' : ''}`}><button className="cor_lamina_bnt_verde" onClick={() => setCorLaminaDir('verde')}></button></div>
              <div className={`container_cor_lamina_bnt_branco ${corLaminaDir === 'branco' ? 'selecionado' : ''}`}><button className="cor_lamina_bnt_branco" onClick={() => setCorLaminaDir('branco')}></button></div>
              <div className={`container_cor_lamina_bnt_amarelo ${corLaminaDir === 'amarelo' ? 'selecionado' : ''}`}><button className="cor_lamina_bnt_amarelo" onClick={() => setCorLaminaDir('amarelo')}></button></div>
            </div>
          </div>

          <div className='container_bnt_proxima_etapa'>
            {/* O BOTÃO COM O NOME CORRIGIDO */}
            <button className='bnt_proxima_etapa'>Próxima etapa</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Caixa_persona_etp1;