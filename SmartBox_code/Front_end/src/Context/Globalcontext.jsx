import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [usuarioAtual,setUsuarioAtual] = useState()
 

  return (
    <GlobalContext.Provider value={{
      usuarioAtual,
      setUsuarioAtual
         
    
    
         
         
         }}>
      {children}
    </GlobalContext.Provider>
  );
};