import React, { useContext, useEffect, useState } from 'react'
import './Perfil.css' 
import { GlobalContext } from '../../Context/Globalcontext.jsx'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar.jsx'

function Perfil() {
  const { usuarioAtual, setUsuarioAtual } = useContext(GlobalContext) // ajuste para permitir limpar usuário
  const navigate = useNavigate()

  useEffect(() => {
    if (!usuarioAtual) {
      navigate('/login')
    }
  }, [usuarioAtual, navigate])

  if (!usuarioAtual) return <p>Carregando</p>

  const [lixeiraAtual, setLixeiraAtual] = useState('/icon/deleteblack.png') 

  // Função para deletar a conta do usuário
  const handleDeleteAccount = async () => {
    const confirmar = window.confirm("Tem certeza que deseja apagar sua conta? Esta ação é irreversível.")

    if (!confirmar) return;

    try {
      const response = await fetch(`http://localhost:3000/clients/${usuarioAtual.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        alert("Conta excluída com sucesso.")
        setUsuarioAtual(null)
        navigate('/login')
      } else {
        const erroData = await response.json()
        alert(`Erro ao excluir conta: ${erroData.error || 'Erro desconhecido'}`)
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor.")
      console.error(error)
    }
  }

  // Função para deslogar (encerrar sessão)
  const handleLogout = () => {
    setUsuarioAtual(null)
    navigate('/login')
  }

  return (
    <div className='Container-Perfil'>
      <NavBar/>
      <div className='Perfil-Usuario' >
        <div className='Primeira-diva'> 
          <h1 className='Titulo-Perfil'> Perfil de Usuário</h1> 
          {/* Troca evento de clique para deletar */}
          <img 
            className='Lixeira'
            src={lixeiraAtual}
            alt="Botão para excluir conta" 
            onClick={handleDeleteAccount}
            onMouseEnter={() => setLixeiraAtual('/icon/delete.png')}
            onMouseLeave={() => setLixeiraAtual('/icon/deleteblack.png')}
          /> 
        </div> 
        <div className='Segunda-diva'> 
          <img className='icon' src=".\public\icon\garota1.png" alt="Foto de perfil" /> 
          <p className='Add-Foto'>+ Adcionar uma foto de perfil</p>
          {/* Botão para encerrar sessão */}
          <button className='Encerrar-button' onClick={handleLogout}> Encerrar Sessão</button> 
          <button className='Editar-button'>Editar</button>
        </div> 
        <div className='Terceira-diva'>
          <div className='InptUm'> 
            <label className="LabelForPerfil" htmlFor="">Nome</label>
            <input className="Inpt-Perfil" type='text' value={usuarioAtual.nome} readOnly /> 
          </div> 
          <div className='InptDois'>
            <label className="LabelForPerfil" htmlFor="">Sobrenome</label>
            <input className="Inpt-Perfil" type='text'  value={usuarioAtual.sobrenome} readOnly />
          </div> 
          <div className='InptTres'> 
            <label className="LabelForPerfil" htmlFor="">Email</label> 
            <input className="Inpt-Perfil" type='text'  value={usuarioAtual.email} readOnly /> 
          </div> 
          <div className='InptQuatro'> 
            <label className="LabelForPerfil" htmlFor="">Senha</label>
            <input className="Inpt-Perfil" type='text'  value={usuarioAtual.senha} readOnly />
          </div>
        </div> 
      </div> 
    </div>
  )
}

export default Perfil
