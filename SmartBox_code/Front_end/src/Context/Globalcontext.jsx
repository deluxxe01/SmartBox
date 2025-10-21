import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Inicializa com o valor do localStorage (se tiver) ou null
  const [usuarioAtual, setUsuarioAtual] = useState(() => {
    const usuarioSalvo = localStorage.getItem('usuarioAtual');
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  });

  // Sempre que usuarioAtual mudar, atualiza o localStorage
  useEffect(() => {
    if (usuarioAtual) {
      localStorage.setItem('usuarioAtual', JSON.stringify(usuarioAtual));
    } else {
      localStorage.removeItem('usuarioAtual');
    }
  }, [usuarioAtual]);

  const [messageSuccess, setMessageSuccess] = useState({
    titulo: '',
    message: ''
  });

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
