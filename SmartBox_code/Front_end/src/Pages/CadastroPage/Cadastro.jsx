import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './cadastro.css'
import NavBar from '../../Components/NavBar/NavBar'
import eyeOpen from '../../../public/icon/eyeOpen.png'
import eyeClosed from '../../../public/icon/eyeClosed.png'
import { useEffect } from 'react';
import axios from 'axios';
import ErrorModal from '../../Components/errorModal/ErrorModal';
import { GlobalContext } from '../../Context/Globalcontext';
import { useContext } from 'react';

function cadastro() {
  const [errorMessage,setErrorMenssage] = useState('')
  const [mostrarMensagen,setMostrarMenssagen] = useState(false)
  const [senhaVisivel, setSenhaVisivel] = useState(false)
  const [user,setUser] = useState({
    nome:'',
    sobrenome:'',
    email:'',
    senha:''
  })
  const {usuarioAtual,setUsuarioAtual,messageSuccess,setMessageSuccess} = useContext(GlobalContext)
   const navigate = useNavigate()
  


  const toggleVisibilidade = () => {
    setSenhaVisivel(!senhaVisivel)
  }

   const irParaOutraPagina = () => {
    navigate('/login')
  }



/////////////////////////////////////////////////////////////////////////// 
/* v- bloco de codigo para o cadastro do cliente */
  const cadastrarUser = async () => {
  try{

    if(user.nome == "" || user.senha=="" || user.email=="" || user.sobrenome == ""){
      setErrorMenssage("Prencha todos os campos de informação")
      setMostrarMenssagen(true)
      
    }
    
      const result = await axios.post('/api/clients',user)
      setUsuarioAtual(result.data.user)
       setMessageSuccess({
        titulo:'Cadastro concluído!',
        message:`Seja muito Bem-Vindo ${result.data.user.nome}`
  })
      console.log(result)
      
      navigate('/catalogo')

     
    
  }catch(erro){

    if(erro.response){

      if(erro.response.status === 400){
        console.log("log do erro",erro.response)

        setErrorMenssage(erro.response.data.error) // pega a menssagen de erro da pai e informa pro cliente
        setMostrarMenssagen(true)
      }else{
      }

    }else{
        console.log('Erro de rede ou servidor indisponível:', erro.response);
    }

  }
   

  }
////////////////////////////////////////////////////////////////////////////////////// 
/* ^- bloco de codigo para o cadastro do cliente */

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
          {mostrarMensagen ? <ErrorModal message={errorMessage} onClose={()=>{setMostrarMenssagen(false)}}/>:''}
          <div className='Container-NomeCadastro'>
           
          <label className='Label-Nome'htmlFor="InptEmail" >Nome</label>
          <input className='Inpt-Nome' placeholder='Digite seu nome'type="text"onChange={(e)=>{
            setUser({
              ...user,
              nome:e.target.value
            })
          }} />
          </div>

          <div className='Container-SobrenomeCadastro'>
          <label className='Label-Sobrenome'htmlFor="InptEmail">Sobrenome</label>
          <input className='Inpt-Sobrenome' placeholder='Digite seu sobrenome'type="text"  onChange={(e)=>{
            setUser({
              ...user,
              sobrenome:e.target.value
            })
          }} />
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
           <input className='Inpt-Email' placeholder='usuario@gmail.com'type="text" onChange={(e)=>{
            setUser({
              ...user,
              email:e.target.value
            })
           }} />
          </div>

          <div className='Container-SenhaCadastro'>
            <label className='Label-Senha'htmlFor="">Senha</label>
            <input className='Inpt-Senha' id='senha' placeholder='SenhaForte123'type={senhaVisivel ? 'text' : 'password'} onChange={(e)=>{
              setUser({
                ...user,
                senha:e.target.value
              })
            }} />
            <img src={senhaVisivel ? eyeClosed : eyeOpen} alt="Mostrar ou ocultar senha" onClick={toggleVisibilidade}  />
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
             <button className='ButtonCadastro' onClick={cadastrarUser}>Cadastrar</button>
         </div>
        </div>

        </div>

      </div>
    </div>
  )
}

export default cadastro