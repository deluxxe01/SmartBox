import React from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom';
function NavBar() {
  const navigate = useNavigate()

  const irParaOutraPagina = () => {
    navigate('/')
  }
  return (
    <div className='navbar'>
      <div className='conatainer_logo_smartbox_nav'>
        <img
          onClick={irParaOutraPagina}
          src=".\public\images\logo_smartBox.svg"
          alt="Logotipo da SmartBox com design de caixa estilizada e o texto SmartBox. O logotipo é centralizado na barra de navegação, transmitindo um tom moderno e profissional. O ambiente ao redor apresenta um layout limpo da barra de navegação."
        />
      </div>

<div className='container_links_nav_bar'>

     <div className='Infos'>
      <p>Catálago</p>
      <p>Suas Caixas</p>

      </div>

<div className='container_Icons'>
  <img src=".\public\icon\sacola.svg" alt="" onClick={()=>{
    navigate('/carrinho')
  }} />
  <img src=".\public\icon\user.svg" alt="" />
</div>

</div>
    </div>
  )
}

export default NavBar