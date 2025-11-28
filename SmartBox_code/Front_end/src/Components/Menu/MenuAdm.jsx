import React from 'react'
import './MenuAdm.css'
import { useNavigate } from 'react-router-dom';
function MenuAdm({setPage}) {
   const navigate = useNavigate()

  return (
    <div className='MenuAdm-Container'>
     
     <div className ="Nomes">
        <p className='Fonts2' onClick={()=>{setPage(2)}} >Dashboard</p>
        <p className='Fonts3' onClick={()=>{setPage(3)}} >Gestão de Caixas</p>
         <p className='Fonts3' >Gestão de Clientes</p>
        <p className='Fonts1'  >Gestão de Pedidos</p>
        <p className='Fonts2'  >Gestão de Estoque</p>
        
     </div>
    </div>
  )
}

export default MenuAdm