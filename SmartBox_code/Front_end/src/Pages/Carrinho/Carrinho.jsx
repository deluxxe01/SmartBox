import NavBar from "../../Components/NavBar/NavBar"

import TamplateCaixa from "../../Components/TamplateCaixas/TamplateCaixas"

 
 function Carrinho(){
    let objeto =[
]

    return(
        <div>
            <NavBar />
            <TamplateCaixa vetorCaixa = {objeto} />
            

        </div>

    )
 }

 export default Carrinho