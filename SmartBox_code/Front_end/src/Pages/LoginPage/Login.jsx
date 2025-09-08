
import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar'
import eyeOpen from '../../../public/icon/eyeOpen.png'
import eyeClosed from '../../../public/icon/eyeClosed.png'

function Login() {
  const [senhaVisivel, setSenhaVisivel] = useState(false)
  const navigate = useNavigate()

  const toggleVisibilidade = () => {
    setSenhaVisivel(!senhaVisivel)
  }

    const irParaOutraPagina = () => {
    navigate('/cadastro')
  }

  return (
    <div className='ContainerLogin'>

      <div className='Container-A'>
        <NavBar />

        <div className='Container-B'>

        <div className='Container-C'>

<div className='Títulos'> 
<h1 className='H1-Login'>Bem Vindo de Volta</h1> <h1 className='H1-Login'>Entre com uma conta</h1>
</div>    

<div className='Container-D'>

<div className='Container-Email'>
<label className='Label-Email'htmlFor="InptEmail">Email</label>
<input className='Inpt-Email' placeholder='usuario@gmail.com'type="text" />
</div>

<div className='Container-Buttons'>
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

<div className='Container-E'>

  <div className='Container-Senha'>
  <label className='Label-Senha'htmlFor="">Senha</label>
  <input className='Inpt-Senha' id='senha' placeholder='SenhaForte123'type={senhaVisivel ? 'text' : 'password'} />
  <img src={senhaVisivel ? eyeClosed : eyeOpen} alt="Mostrar ou ocultar senha" onClick={toggleVisibilidade} />
  </div>

<div className='Linhas'>
  
  <div class='Linha1'></div>
  <p className='Ou'>Ou</p>
  <div class='Linha2'></div>

</div>

<div className='IrCadastro'>
  <p className='Pergunta'>Não possui uma conta?</p> <p onClick={irParaOutraPagina} className='Resposta'>Faça Cadastro</p>
</div>
</div>
<button className='Button-Login'>Logar</button> 
        </div>

        

        </div>
      </div>
    </div>
  )
}

export default Login