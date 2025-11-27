import { useState, useEffect, useContext } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import eyeOpen from '../../../public/icon/eyeOpen.png';
import eyeClosed from '../../../public/icon/eyeClosed.png';
import axios from 'axios';
import ErrorModal from '../../Components/errorModal/ErrorModal';
import { GlobalContext } from '../../Context/Globalcontext';
import ModalSuccess from '../../Components/ModalSuccessLogin/ModalSuccess';

function Login() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const navigate = useNavigate();
  const [messageErro, setMessageError] = useState("");
  const [verMessage, setVerMessage] = useState(false);
  const [inpt, setInpt] = useState({ email: "", senha: "" });

  const { usuarioAtual, setUsuarioAtual, messageSuccess, setMessageSuccess } = useContext(GlobalContext);

  const toggleVisibilidade = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  const irParaOutraPagina = () => {
    navigate('/cadastro');
  };

  const Logar = async () => {
    if (inpt.email === "" || inpt.senha === "") {
      setMessageError("Preencha todos os campos");
      setVerMessage(true);
      return;
    }

    try {
      const result = await axios.post('/api/clientsLogin', inpt);
      const usuario = result.data.user;
    

    // ✅ Coloque o console.log aqui
    console.log("usuario do login:", usuario);
      if (!usuario) {
        setMessageError("Email ou senha incorretos");
        setVerMessage(true);
        return;
      }

      // Atualiza estado global
      setUsuarioAtual(usuario);

      // Salva sessão
      sessionStorage.setItem("login", 1);
      sessionStorage.setItem("isAdmin", usuario.isAdmin ? "true" : "false");
// controle de admin
      sessionStorage.setItem("email", usuario.email);

      // Modal de sucesso
      setMessageSuccess({
        titulo: 'Login feito com sucesso',
        message: `Seja bem-vindo de novo ${usuario.nome}`
      });

      navigate('/perfil');

    } catch (err) {
      console.error("Erro no login:", err);
      setMessageError("Email ou senha incorretos");
      setVerMessage(true);
    }
  };

  return (
    <div className='ContainerLogin'>
      <div className='Container-A'>
        <NavBar />
        <div className='Container-B'>
          <div className='Container-C'>

            <div className='Títulos'>
              <h1 className='H1-Login'>Bem Vindo de Volta</h1>
              <h1 className='H1-Login'>Entre com uma conta</h1>
            </div>

            <div className='Container-D'>
              <div className='Container-Email'>
                {verMessage && <ErrorModal message={messageErro} onClose={() => setVerMessage(false)} />}
                <label className='Label-Email' htmlFor="InptEmail">Email</label>
                <input
                  className='Inpt-Email'
                  placeholder='usuario@gmail.com'
                  type="text"
                  onChange={(e) => setInpt({ ...inpt, email: e.target.value })}
                />
              </div>

              <div className='Container-Buttons'>
                <button className='ButtonGoogle'>
                  <img src=".\public\icon\GoogleIcon.png" alt="ícone" />
                  Google
                </button>
                <button className='ButtonLinkedin'>
                  <img src=".\public\icon\Linkedinicon.png" alt="ícone" />
                  Linkedin
                </button>
              </div>
            </div>

            <div className='Container-E'>
              <div className='Container-Senha'>
                <label className='Label-Senha'>Senha</label>
                <input
                  className='Inpt-Senha'
                  id='senha'
                  placeholder='SenhaForte123'
                  type={senhaVisivel ? 'text' : 'password'}
                  onChange={(e) => setInpt({ ...inpt, senha: e.target.value })}
                />
                <img src={senhaVisivel ? eyeClosed : eyeOpen} alt="Mostrar ou ocultar senha" onClick={toggleVisibilidade} />
              </div>

              <div className='Linhas'>
                <div className='Linha1'></div>
                <p className='Ou'>Ou</p>
                <div className='Linha2'></div>
              </div>

              <div className='IrCadastro'>
                <p className='Pergunta'>Não possui uma conta?</p>
                <p onClick={irParaOutraPagina} className='Resposta'>Faça Cadastro</p>
              </div>
            </div>

            <button className='Button-Login' onClick={Logar}>Logar</button>

           

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
