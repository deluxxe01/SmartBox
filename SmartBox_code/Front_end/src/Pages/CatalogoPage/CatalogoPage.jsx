
import ModalSuccess from "../../Components/ModalSuccessLogin/ModalSuccess.jsx";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import { GlobalContext } from "../../Context/Globalcontext.jsx";
import "./CatalogoPage.css";
import { useContext } from "react";
import Footer from "../../Components/Footer/Footer.jsx"


function CatalogoPage() {
  
  let caixa =[{
nome:"SmartBox Aventura",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGyNQUgxhX5WamcnPLzHNGv2QEyTb5ZPrfVA&s",
descricao:"Para os amantes de adrenalina e emoções fortes.",
preco:"R$ 299,00"


  },]

  const {messageSuccess,setMessageSuccess}= useContext(GlobalContext)
  
  

  return (
    <div  className="container_pai_catalogo">
      <NavBar />
      <div className="conteiner_page_catagalogo_box">
        {sessionStorage.getItem("login") ? <ModalSuccess message={messageSuccess} />:""}
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

{caixa.map((item,index)=>(
  <div key={index}>
    <p>{item.nome}</p>
    <img src={item.img} alt="" />
    <p>{item.descricao}</p>
    <p>{item.preco}</p>

  </div>


))}

</div>
<Footer />




      </div>
    </div>
  );
}

export default CatalogoPage;
