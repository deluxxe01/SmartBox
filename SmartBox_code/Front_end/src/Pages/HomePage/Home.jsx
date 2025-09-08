import React from 'react'
import './Home.css'
import NavBar from '../../Components/NavBar/NavBar'


function Home() {



  return (
    <div className='Container'>
    <NavBar />
    
    <div className='Container-Titulo'>
     <h1 className='TituloHome'>Sua SmartBox. Seu Jeito</h1>
     <p className='PHome'>Personalize sua caixa multifunções com cores únicas e use-a como quiser!</p>
    </div>
      
      <div className='Container-ButtonIrCadastro'>
        <button className='Button'>Cadastre-se</button>
      </div>

      <div className='Colors'>
          <div className='Vermelho'></div>
          <div className='Circulo'></div>

          <div className='Preto'></div>
          <div className='Circulo2'></div>

          <div className='Azul'></div>
          <div className='Circulo3'></div>
      </div>
    </div>
  )
}

export default Home