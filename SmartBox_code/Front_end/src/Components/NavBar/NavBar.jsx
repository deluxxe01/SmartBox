import React from 'react'
import './NavBar.css'
function NavBar() {
  
  return (
    <div className='navbar'>
      <div className='conatainer_logo_smartbox_nav'>
        <img
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
  <img src=".\public\icon\sacola.svg" alt="" />
  <img src=".\public\icon\user.svg" alt="" />
</div>

</div>
    </div>
  )
}

export default NavBar