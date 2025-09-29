
import NavBar from '../../Components/NavBar/NavBar.jsx'
import './Perfil.css'

function Perfil() {
  return (
   
        
      
        
        <div className='Container-Perfil'>
<NavBar/>
<div className='Perfil-Usuario' >
            <div className='Primeira-diva'>
            <h1 className='Titulo-Perfil'> Perfil de Usuário</h1>
            <img  className='Lixeira'src=".\public\icon\lixeira.png" alt="Botão para excluir conta" />
            </div>

            <div className='Segunda-diva'>
                 <img  className='icon'src=".\public\icon\garota1.png" alt="Botão para excluir conta" />
                 <p className='Add-Foto'>+ Adcionar uma foto de perfil</p>

                 <button className='Encerrar-button'> Encessar Sessão</button>
                 <button className='Editar-button'>Editar</button>
            </div>

            <div className='Terceira-diva'>
                <input className="Inpt-Perfil" type='text' />
                  <input className="Inpt-Perfil" type='text' />
                     <input className="Inpt-Perfil" type='text' />
            </div>
</div>
      
        
        
        
        </div>
  )
}

export default Perfil