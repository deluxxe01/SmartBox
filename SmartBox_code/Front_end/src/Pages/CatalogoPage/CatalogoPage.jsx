import React from 'react'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import './CatalogoPage.css'
import { useEffect } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../Context/Globalcontext.jsx'

function CatalogoPage() {
  const {usuarioAtual,setUsuarioAtual}=useContext(GlobalContext)

  useEffect(()=>{
    console.log("catalogo",usuarioAtual)

  },[usuarioAtual])
  return (
    <div>
        
      <NavBar/>
        
        
        
        
        </div>
  )
}

export default CatalogoPage