import './Caixa_persona_etp1.css';
import NavBar from '../../Components/NavBar/NavBar';

function Caixa_persona_etp1() {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <NavBar />
      </nav>

      {/* Container principal */}
      <div className="conatiner_page_caixa_persona">
        
        {/* Lado Preview 3D */}
        <div className="conatiner_m3D">
          <img
            src="https://i1.sndcdn.com/artworks-7n7INsM9YyE3b2KH-kyEyFw-t1080x1080.jpg"
            alt="Preview Caixa"
            className="no_biches_img"
          />
        </div>

        {/* Lado Personalização */}
        <div className="container_personalizacao_caixa">
          
          {/* Título */}
          <div className="container_p_caixa_personalizada_etp1">
            <p className="p_caixa_personalizada_etp1">
              Personalização da caixa: 1° andar
            </p>
          </div>

          {/* Seleção de andares */}
          <div className="container_infos_andares_caixa">
            <div className="p_container_andares_caixa">
              <p>Andares</p>
            </div>
            <div className="container_numero_andares">
              <p>1 unidade</p>
              <p>2 unidades</p>
              <p>3 unidades</p>
            </div>
          </div>

          {/* Cor do chassi */}
          <div className="container_cor_chasi">
            <div className="container_cor_chasi_p">
              <p>Cor do chassi</p>
            </div>
            <div className="cores_chasi">
              <div className='container_cor_chasi_bnt_vermelho'>
                <button className='cor_chasi_bnt_vermelho'></button>
              </div>               
              <div className='container_cor_chasi_bnt_preto'>
                <button className='cor_chasi_bnt_preto'></button>
              </div>
              <div className='container_cor_chasi_bnt_azul'>
                <button className='cor_chasi_bnt_azul'></button>
              </div>
            </div>
          </div>

          {/* Cor das lâminas */}
          {/** Esquerda **/}
          <div className="container_cor_lamina_esq">
            <div className="p_cor_lamina_esq">
              <p>Cor da paleta esquerda</p>
            </div>
            <div className="cores_lamina_esq">
              <div className="container_cor_lamina_bnt_vermelho">
                <button className="cor_lamina_bnt_vermelho"></button>
              </div>
              <div className="container_cor_lamina_bnt_preto">
                <button className="cor_lamina_bnt_preto"></button>
              </div>
              <div className="container_cor_lamina_bnt_azul">
                <button className="cor_lamina_bnt_azul"></button>
              </div>
              <div className="container_cor_lamina_bnt_verde">
                <button className="cor_lamina_bnt_verde"></button>
              </div>
              <div className="container_cor_lamina_bnt_branco">
                <button className="cor_lamina_bnt_branco"></button>
              </div>
              <div className="container_cor_lamina_bnt_amarelo">
                <button className="cor_lamina_bnt_amarelo"></button>
              </div>
            </div>
          </div>

          {/** Frontal **/}
          <div className="container_cor_lamina_front">
            <div className="p_cor_lamina_front">
              <p>Cor da paleta frontal</p>
            </div>
            <div className="cores_lamina_front">
              <div className="container_cor_lamina_bnt_vermelho">
                <button className="cor_lamina_bnt_vermelho"></button>
              </div>
              <div className="container_cor_lamina_bnt_preto">
                <button className="cor_lamina_bnt_preto"></button>
              </div>
              <div className="container_cor_lamina_bnt_azul">
                <button className="cor_lamina_bnt_azul"></button>
              </div>
              <div className="container_cor_lamina_bnt_verde">
                <button className="cor_lamina_bnt_verde"></button>
              </div>
              <div className="container_cor_lamina_bnt_branco">
                <button className="cor_lamina_bnt_branco"></button>
              </div>
              <div className="container_cor_lamina_bnt_amarelo">
                <button className="cor_lamina_bnt_amarelo"></button>
              </div>
            </div>
          </div>

          {/** Direita **/}
          <div className="container_cor_lamina_dir">
            <div className="p_cor_lamina_dir">
              <p>Cor da paleta direita</p>
            </div>
            <div className="cores_lamina_dir">
              <div className="container_cor_lamina_bnt_vermelho">
                <button className="cor_lamina_bnt_vermelho"></button>
              </div>
              <div className="container_cor_lamina_bnt_preto">
                <button className="cor_lamina_bnt_preto"></button>
              </div>
              <div className="container_cor_lamina_bnt_azul">
                <button className="cor_lamina_bnt_azul"></button>
              </div>
              <div className="container_cor_lamina_bnt_verde">
                <button className="cor_lamina_bnt_verde"></button>
              </div>
              <div className="container_cor_lamina_bnt_branco">
                <button className="cor_lamina_bnt_branco"></button>
              </div>
              <div className="container_cor_lamina_bnt_amarelo">
                <button className="cor_lamina_bnt_amarelo"></button>
              </div>
            </div>
          </div>

          {/* Botão próxima etapa */}
          <div className='container_bnt_proxima_etapa'>
            <button className='bnt_proxima_etapa'>Próxima etapa</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Caixa_persona_etp1;
