import './ErrorModal.css'
import { useState,useEffect } from 'react'

function ErrorModal({message,onClose}){
    const [isExiting, setIsExiting] = useState(false)

      useEffect(() => {
    if (isExiting) {
      // Após o tempo da animação (300ms), chama o onClose para remover o modal
      const timer = setTimeout(() => {
        onClose();
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isExiting, onClose]);

    

    return(

        <div className={`containerErrorModal ${isExiting ? 'exit' : ''}`}
         onClick={() => setIsExiting(true)} >

            <img className='imgErrorModal' src="./icon/iconUserError.svg" alt="" />
            <h2 className='errorModalH2'>Ops algo de errado!</h2>
            <p className='pModalError'>{message}</p>

        </div>

    )
}

export default ErrorModal