
import NavBar from '../../Components/NavBar/NavBar.jsx'
import './Perfil.css'
import React, { useState } from 'react'

function Perfil() {

  const [lixeiraAtual, setLixeiraAtual] = useState('/icon/deleteblack.png')

    const trocarImagem = () => {
    if (lixeiraAtual === '/icon/deleteblack.png') {
      setLixeiraAtual('/icon/delete.png')
    } else {
      setLixeiraAtual('/icon/deleteblack.png')
    }
  }

//Terminar de ajustar lixeira
  return ( 
        <div className='Container-Perfil'>
<NavBar/>
<div className='Perfil-Usuario' >
            <div className='Primeira-diva'>
            <h1 className='Titulo-Perfil'> Perfil de Usuário</h1>
            <img  className='Lixeira'src={lixeiraAtual}alt="Botão para excluir conta"  onClick={trocarImagem}/>
            </div>

            <div className='Segunda-diva'>
                 <img  className='icon'src=".\public\icon\garota1.png" alt="Botão para excluir conta" />
                 <p className='Add-Foto'>+ Adcionar uma foto de perfil</p>

                 <button className='Encerrar-button'> Encessar Sessão</button>
                 <button className='Editar-button'>Editar</button>
            </div>

            <div className='Terceira-diva'>

              <div className='InptUm'>
              <label  className="LabelForPerfil" htmlFor="">Nome </label>
              <input className="Inpt-Perfil" type='text' />
              </div>
                  <div className='InptDois'>
                  <label className="LabelForPerfil" htmlFor="">Sobrenome</label>
                  <input className="Inpt-Perfil" type='text' />
                  </div>
                    <div className='InptTres'>
                    <label className="LabelForPerfil" htmlFor="">Email</label>
                    <input className="Inpt-Perfil" type='text' />
                    </div>
                       <div className='InptQuatro'>
                      <label className="LabelForPerfil" htmlFor="">Senha</label>
                       <input className="Inpt-Perfil" type='text' />
                       </div>
            </div>
</div>
      
        
        
        
        </div>
  )
}

export default Perfil