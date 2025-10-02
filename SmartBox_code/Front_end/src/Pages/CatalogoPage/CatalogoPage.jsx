
import NavBar from "../../Components/NavBar/NavBar.jsx";
import "./CatalogoPage.css";

function CatalogoPage() {
  
  let caixa =[{
nome:"SmartBox Aventura",
img:"https://via.placeholder.com/150",
descricao:"Para os amantes de adrenalina e emoções fortes.",
preco:"R$ 299,00"


  },]
  
  

  return (
    <div>
      <NavBar />
      <div className="conteiner_page_catagalogo_box">
        <div className="container_h1_catalogo_escolha_box">
          <h1>
            Escolha sua <span>Smart</span>Box
          </h1>
        </div>
        <div className="container_search_bar">
          <input
            type="text"
            placeholder="O que você procura ?"
            className="search_input"
          />

          {/* <button className="search_button">Buscar</button> */}
        </div>
<div className="container_h1_boxs">

<h1>Catalogo</h1>

</div>

<div className="container_caixas">

caixa.map((item)=>{




  
})






   





</div>



      </div>
    </div>
  );
}

export default CatalogoPage;
