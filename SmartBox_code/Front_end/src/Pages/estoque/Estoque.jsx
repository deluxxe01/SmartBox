  import axios from "axios";
  import NavBar from "../../Components/NavBar/NavBar" 
  import {useEffect,useState} from "react";
  import { useNavigate } from "react-router-dom";
  import './Estoque.css'
  import ModalEstoque from "../../Components/ModalEstoque/Modalestoque";
import Footer from "../../Components/Footer/Footer";

  function Estoque(){
    const navigate = useNavigate()
    const [estoque,setEstoque] = useState([])
    const [abrirModal, setAbrirModal] = useState(false);
            useEffect(() => {
            const isAdmin = sessionStorage.getItem("isAdmin") === "true";
            console.log("isAdmin?", isAdmin);
            if (!isAdmin) {
                navigate("/login");
            }
            }, [navigate]);

             const buscarEstoque = async ()=>{
                const estoque = await axios.get('/api/box/estoque')
                console.log(estoque)
                setEstoque(estoque.data)

        }

    useEffect(()=>{
       
        buscarEstoque()
        
        
    },[])

    useEffect(()=>{
        console.log("log do useState",estoque)
    },[])
    return(
        <div className="conteinerMaster">
            <div>
             <NavBar />
            </div>
            <div className="containerEstoque">
                <div className="containerH1Estoque">
                     <img onClick={()=>{navigate('/gestaoCaixas')}} className="iconSeta" src="https://i.pinimg.com/736x/fe/e3/3b/fee33b2f54bd5773191cfba19c84678c.jpg" alt="" />
                    <h1>Gestão de estoque</h1>
                </div>
                <div className="containerItens">
                    {estoque.map((item, index) => (
                    <div className="conateinerChassi" key={index} style={{ marginBottom: "10px" }}>
                        <p>Posição: {item.pos}</p>
                        <p>Chassi: {item.cor || "null"}</p>
                        <p>Vinculado: {item.op ?? "nenhum"}</p>
                    </div>
                ))}
                </div>
                <div className="containerBtnEstoque">
                    <button onClick={()=>{setAbrirModal(true)}} className="btnEditarEstoque">Adicionar</button>
                </div>
                
            {abrirModal && (
                <ModalEstoque
                onclose={() => setAbrirModal(false)}
                estoque={estoque}
                updEstoque={buscarEstoque}
                />
            )}
          </div>
          <Footer />
        </div>
    )
  }
  export default Estoque