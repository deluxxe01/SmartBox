import { useState, useEffect, useContext } from "react";
import ModalSuccess from "../../Components/ModalSuccessLogin/ModalSuccess.jsx";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import { GlobalContext } from "../../Context/Globalcontext.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import "./CatalogoAdmin.css";

function CatalogoAdmin() {
  const [caixasProntas, setCaixasProntas] = useState([]);
  const { messageSuccess } = useContext(GlobalContext);

  useEffect(() => {
    fetch("http://localhost:3000/catalogo")
      .then((res) => res.json())
      .then((data) => setCaixasProntas(data))
      .catch((err) => console.error("Erro ao carregar catálogo:", err));
  }, []);

  return (
    <div className="container_pai_catalogo">
     

        <div className="container_h1_boxs">
          <h1>Catálogo</h1>
        </div>

        <div className="container_caixas">
          {caixasProntas.map((c) => (
            <div
              key={c.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                display: "inline-block",
                margin: "10px",
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
  );
}

export default CatalogoAdmin;
