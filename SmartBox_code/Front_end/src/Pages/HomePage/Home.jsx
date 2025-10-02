import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'
import NavBar from '../../Components/NavBar/NavBar'


function Home() {
  const [ativo, setAtivo] = useState(null)

  const toggleButton = () => {
    setAtivo(!ativo)
  }

  const navigate = useNavigate()
   const irParaOutraPagina = () => {
    navigate('/cadastro')
  }


  return (
    <div className='Container'>
    <div className='Container1'>
    <NavBar />
    
    <div className='Container-Titulo'>
     <h1 className='TituloHome'>Sua SmartBox. Seu Jeito</h1>
     <p className='PHome'>Personalize sua caixa multifunções com cores únicas e use-a como quiser!</p>
    </div>
      
      <div className='Container-ButtonIrCadastro'>
        <button className='Button' onClick={irParaOutraPagina}>Cadastre-se</button>
      </div>

      <div className='Colors'>
          <button className={`button red ${ativo === 0 ? 'ativo' : ''}`} onClick={() => setAtivo(0)}></button>
           <button className={`button blue ${ativo === 1 ? 'ativo' : ''}`} onClick={toggleButton}></button>
            <button className={`button ${ativo === 2 ? 'ativo' : ''}`} onClick={toggleButton}></button>
      </div>

      </div>
      <div className='Container2'>
        
        <h2 className='Comoperso'>Como Personalizar</h2>

        <div className='ImagensPersonaliza'>
          <img className="CaixaBranco"src="public/images/Group 2.png" alt="" />
          <img className="CaixaPerso"src="public/images/caixa perso 2.png" alt="" />
          <img className="CaixaPronta"src="public/images/caixa pronta 2.png" alt="" />
        </div>

          <div className='Textos2'>
            <h3 className="Number">1. Escolha seu estilo de caixa</h3>
             <h3 className="Number2">2. Deixe com a sua Cara</h3>
             <h3 className="Number3">3. Compre a sua SmartBox</h3>
          </div>

           <div className='Textos3'>
            <p className="Number4">Opte pelos nossos modelos maiores ou mais práticos.</p>
             <p className="Number5">Escolha diferentes formas  de montar a sua caixa.</p>
             <p className="Number6">Finalize seu pedido e receba sua caixa multifunções feita sob medida na sua casa.</p>
          </div>
      
          
      </div>
    </div>
  )
}

export default Home