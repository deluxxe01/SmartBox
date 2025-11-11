import React from 'react'
import './MenuAdm.css'
import { useNavigate } from 'react-router-dom';
function MenuAdm() {
   const navigate = useNavigate()

  return (
    <div className='MenuAdm-Container'>
     
     <div className ="Nomes">
        <p className='Fonts1'  onClick={() => navigate('/perfil')}>Conta</p>
        <p className='Fonts2'  onClick={() => navigate('/Caixa_persona_etp1')}>Dashboard</p>
        <p className='Fonts3'  onClick={() => navigate('/gestaoCaixas')}>Gestão de Caixas</p>
         <p className='Fonts3'  onClick={() => navigate('/catalogoAdmin')}>Gestão de Clientes</p>
        <p className='Fonts1'  onClick={() => navigate('/Caixa_persona_etp1')}>Gestão de Pedidos</p>
        <p className='Fonts2'  onClick={() => navigate('/Caixa_persona_etp1')}>Gestão de Produtos</p>
        <p className='Fonts3'  onClick={() => navigate('/Caixa_persona_etp1')}>Gestão de Clientes</p>
     </div>
    </div>
  )
}

export default MenuAdm