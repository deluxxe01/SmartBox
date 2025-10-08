import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [usuarioAtual,setUsuarioAtual] = useState()
  const [messageSuccess,setMessageSuccess] = useState({
    titulo:'',
    message:''
  })
 

  return (
    <GlobalContext.Provider value={{
      usuarioAtual,
      setUsuarioAtual,
      messageSuccess,
      setMessageSuccess
         
    
    
         
         
         }}>
      {children}
    </GlobalContext.Provider>
  );
};