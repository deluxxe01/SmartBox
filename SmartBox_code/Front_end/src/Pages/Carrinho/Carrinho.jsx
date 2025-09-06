import NavBar from "../../Components/NavBar/NavBar"
import ResumoPedido from "../../Components/Resumo_pedido/ResumoPedido"
import TamplateCaixa from "../../Components/TamplateCaixas/TamplateCaixas"

 
 function Carrinho(){
    let objeto =[{
        "nome":"Caixa dois andares preta",
        "img":''
    },{
        "nome":"dinozauro",
        "img":""
    }]

    return(
        <div>
            <NavBar />
            <TamplateCaixa vetorCaixa = {objeto} />
            <ResumoPedido />

        </div>

    )
 }

 export default Carrinho