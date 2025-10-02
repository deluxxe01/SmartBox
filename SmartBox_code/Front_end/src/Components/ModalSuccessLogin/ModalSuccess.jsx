 
 import './ModalSucess.css'
 import { useState } from 'react'

 function ModalSuccess({message}){

    const [isExiting, setIsExiting] = useState(false)

    return(
        
             <div className={`containerSucessModal ${isExiting ? 'exit' : ''}`}
         onClick={() => setIsExiting(true)} >

              <img className='imgSucessModal' src="./icon/iconSuccessLogin.svg" alt="" />
              <h2 className='SuccessModalH2'>{message.titulo}</h2>
              <p className='pModalSuccess'>{message.message}</p>
        </div>

        
    )

 }

 export default ModalSuccess