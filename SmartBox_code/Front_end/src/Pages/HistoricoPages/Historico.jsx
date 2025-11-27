
import NavBar from '../../Components/NavBar/NavBar.jsx'
import './Historico.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { GlobalContext } from '../../Context/Globalcontext';

function Historico() {

   const {usuarioAtual,setUsuarioAtual} = useContext(GlobalContext)
    useEffect(()=>{

      const getMyBox = async()=>{

        console.log(usuarioAtual)
  
         const minhasCaixas = await axios.get(`/api/MyBox/${usuarioAtual.id_cliente}`)
  
         console.log(minhasCaixas)
      }

      if(usuarioAtual?.id_cliente){

        getMyBox()
      }
      


    
    },[])
  return (
    <div>
        
      <NavBar/>

      <div>
        <h1 className='h1HistoricoPage'>Historico</h1>
      </div>
      <div>
        
      </div>
        
        
        
        
        </div>
  )
}

export default Historico