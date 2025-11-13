import { useState, useEffect, useContext } from "react";
import ModalSuccess from "../../Components/ModalSuccessLogin/ModalSuccess.jsx";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import { GlobalContext } from "../../Context/Globalcontext.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import "./CatalogoPage.css";

function CatalogoPage() {
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
      <NavBar />
      <div className="conteiner_page_catagalogo_box">
        {sessionStorage.getItem("login") ? (
          <ModalSuccess message={messageSuccess} />
        ) : (
          ""
        )}

        <div className="container_h1_catalogo_escolha_box">
          <h1>
            Escolha sua <span>SmartBox</span>
          </h1>
        </div>

        <div className="container_search_bar">
          <input
            type="text"
            placeholder="O que você procura?"
            className="search_input"
          />
        </div>

        <div className="container_h1_boxs">
          <h1>Catálogo</h1>
        </div>

        <div className="container_caixas">
          {caixasProntas.map((c) => (
            <div
              key={c.id}
              className="CatalogoADM"
            >
              <img
                src={`http://localhost:3000/catalogo/${c.id}/imagem`}
                alt="Caixa"
                className="imagemCatalogo"
              />
              <p classname="descricaoCatalogo1">{c.descricao}</p>
              <p className="precoCatalogo">R$ {parseFloat(c.valor).toFixed(2)}</p>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default CatalogoPage;
