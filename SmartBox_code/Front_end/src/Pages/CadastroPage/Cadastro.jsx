import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './cadastro.css'
import NavBar from '../../Components/NavBar/NavBar'
import eyeOpen from '../../../public/icon/eyeOpen.png'
import eyeClosed from '../../../public/icon/eyeClosed.png'

function cadastro() {
  const [senhaVisivel, setSenhaVisivel] = useState(false)
   const navigate = useNavigate()


  const toggleVisibilidade = () => {
    setSenhaVisivel(!senhaVisivel)
  }

   const irParaOutraPagina = () => {
    navigate('/login')
  }

  return (
    <div className='ContainerCadastro'>
      
      <div className='Container-1'>
        <NavBar />
        <div className='Container-2'>

        <div className='Container-3'>
         <div className='TítulosCadastro'> 
         <h1 className='H1-Login'>Seja bem Vindo!</h1> <h1 className='H1-Login'>Entre com uma conta</h1>
         </div> 

        <div className='Container-4'>
          <div className='Container-NomeCadastro'>
          <label className='Label-Nome'htmlFor="InptEmail">Nome</label>
          <input className='Inpt-Nome' placeholder='Digite seu nome'type="text" />
          </div>

          <div className='Container-SobrenomeCadastro'>
          <label className='Label-Sobrenome'htmlFor="InptEmail">Sobrenome</label>
          <input className='Inpt-Sobrenome' placeholder='Digite seu sobrenome'type="text" />
          </div>

          <div className='Container-ButtonsCadastro'>
           <button className='ButtonGoogle'>
           <img src=".\public\icon\GoogleIcon.png" alt="ícone"  />
           Google
           </button>

           <button className='ButtonLinkedin'>
           <img src=".\public\icon\Linkedinicon.png" alt="ícone"  />
            Linkedin
           </button>
          </div>
        </div>
   
        <div className='Container-5'>
          <div className='Container-EmailCadastro'>
           <label className='Label-Email'htmlFor="InptEmail">Email</label>
           <input className='Inpt-Email' placeholder='usuario@gmail.com'type="text" />
          </div>

          <div className='Container-SenhaCadastro'>
            <label className='Label-Senha'htmlFor="">Senha</label>
            <input className='Inpt-Senha' id='senha' placeholder='SenhaForte123'type={senhaVisivel ? 'text' : 'password'} />
            <img src={senhaVisivel ? eyeClosed : eyeOpen} alt="Mostrar ou ocultar senha" onClick={toggleVisibilidade} />
          </div>

          <div className='LinhasCadastro'>
            <div class='Linha1'></div>
            <p className='Ou'>Ou</p>
            <div class='Linha2'></div>
          </div>

          <div className='Irlogin'>
          <p className='Pergunta'>Já possui uma conta?</p> <p onClick={irParaOutraPagina} className='Resposta'>Faça Login</p>
          </div>
        </div>


         <div className='ContainerButtonCadastro'>
             <button className='ButtonCadastro'>Cadastrar</button>
         </div>
        </div>

        </div>

      </div>
    </div>
  )
}

export default cadastro