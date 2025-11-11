
import MenuAdm from '../../Components/Menu/MenuAdm.jsx'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import { useState, useEffect, useContext } from "react";
import './CatalogoAdmin.css'

function CatalogoAdmin() {

    const [caixasProntas, setCaixasProntas] = useState([]);
    
  
    useEffect(() => {
      fetch("http://localhost:3000/catalogo")
        .then((res) => res.json())
        .then((data) => setCaixasProntas(data))
        .catch((err) => console.error("Erro ao carregar catálogo:", err));
    }, []);

  return (
    <div className='ContainerDashboard'>
        
      <NavBar/>
      
      <div className='Dashboard-Um'>
       <MenuAdm />
      </div>

      <div className="containerCaixasAdmin">
          {caixasProntas.map((c) => (
            <div
              key={c.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                display: "inline-block",
                
              }}
            >
              <img
                src={`http://localhost:3000/catalogo/${c.id}/imagem`}
                alt="Caixa"
                width={150}
              />
              <p>{c.descricao}</p>
              <p>R$ {parseFloat(c.valor).toFixed(2)}</p>
            </div>
          ))}
        </div>
        </div>
  )
}

export default CatalogoAdmin