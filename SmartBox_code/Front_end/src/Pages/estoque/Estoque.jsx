  import axios from "axios";
  import NavBar from "../../Components/NavBar/NavBar" 
  import {useEffect,useState} from "react";
  import { useNavigate } from "react-router-dom";
  import './Estoque.css'
  import ModalEstoque from "../../Components/ModalEstoque/Modalestoque";
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

    useEffect(()=>{
        const buscarEstoque = async ()=>{
        
            const estoque = await axios.get('/api/box/estoque')
            console.log(estoque)
            setEstoque(estoque.data)

        }
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
                <h1>estoque de chassi</h1>
                <div className="containerItens">
                    {estoque.map((item, index) => (
                    <div className="conateinerChassi" key={index} style={{ marginBottom: "10px" }}>
                        <p>Posição: {item.pos}</p>
                        <p>Cor: {item.cor || "Não possui cor"}</p>
                        <p>Opção: {item.op ?? "nenhum"}</p>
                    </div>
                ))}
                </div>
                <div className="containerBtnEstoque">
                    <button onClick={()=>{setAbrirModal(true)}} className="btnEditarEstoque">Adicionar</button>
                </div>
                
            {abrirModal && (
                <ModalEstoque
                close={() => setAbrirModal(false)}
                estoque={estoque}
                />
            )}
          </div>
        </div>
    )
  }
  export default Estoque