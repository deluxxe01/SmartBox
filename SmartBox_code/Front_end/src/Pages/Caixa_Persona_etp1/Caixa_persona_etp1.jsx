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
          <div className="container_h1_caixa_personalizada_etp1">
            <h1 className="h1_caixa_personalizada_etp1">
              Personalização da caixa: 1° andar
            </h1>
          </div>

          {/* Seleção de andares */}
          <div className="container_infos_andares_caixa">
            <div className="container_andares_caixa">
              <h2>Andares</h2>
            </div>
            <div className="container_numero_andares">
              <h2>1° andar</h2>
              <h2>2° andar</h2>
              <h2>3° andar</h2>
            </div>
          </div>

          {/* Cor do chassi */}
          <div className="container_cor_chasi">
            <div className="container_cor_chasi_h1">
              <h1>Cor do chassi</h1>
            </div>
            <div className="cores_chasi">
              <button>Vermelho</button>
              <button>Preto</button>
              <button>Azul</button>
            </div>
          </div>

          {/* Cor da paleta esquerda */}
          <div className="container_cor_lamina_esq">
            <div className="h1_cor_lamina_esq">
              <h1>Cor da paleta esquerda</h1>
            </div>
            <div className="cor_lamina_esq">
              <button>Vermelho</button>
              <button>Preto</button>
              <button>Azul</button>
              <button>Verde</button>
              <button>Branco</button>
              <button>Amarelo</button>
            </div>
          </div>

          {/* Cor da paleta frontal */}
          <div className="container_cor_lamina_front">
            <div className="h1_cor_lamina_front">
              <h1>Cor da paleta frontal</h1>
            </div>
            <div className="cor_lamina_front">
              <button>Vermelho</button>
              <button>Preto</button>
              <button>Azul</button>
              <button>Verde</button>
              <button>Branco</button>
              <button>Amarelo</button>
            </div>
          </div>
          
 {/* Cor da paleta dir */}
          <div className="container_cor_lamina_dir">
            <div className="h1_cor_lamina_dir">
              <h1>Cor da paleta direita</h1>
            </div>
            <div className="cor_lamina_dir">
              <button>Vermelho</button>
              <button>Preto</button>
              <button>Azul</button>
              <button>Verde</button>
              <button>Branco</button>
              <button>Amarelo</button>
            </div>
          </div>









        </div>
    
      </div>
    
    
    </div>
  );
}

export default Caixa_persona_etp1;
