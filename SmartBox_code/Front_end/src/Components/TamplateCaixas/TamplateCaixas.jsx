  import { useState } from "react"
  import './TamplateCaixas.css'
  import ResumoPedido from "../../Components/Resumo_pedido/ResumoPedido"
import IncentivarCarinhoCompra from "../IncentivarCarinhoCompra/IncentivarCarinhoCompra"



 function TamplateCaixa({vetorCaixa}){

    const [numerosCaixas,setNumeroCaixas] = useState(0)

   
    
    return(
        <div>
            <div className="containerh1Carrinho"><h1 className="h1Titulocarrinho">Carrinho</h1></div>
            
            <div className=" containerTamplateCaixas">
                {vetorCaixa.length > 0 ? <main className="containerCaixas">
                    {vetorCaixa.map((caixa,index) =>(
                        <div key={index} className="containerCarrinhoCaixa">

                        <img src={caixa.img ? caixa.img : 'https://i.ibb.co/Z6yfsTRY/image-2-1-5.png'} />

                        <div> <h2 className="h2NomeDaCaixa">{caixa.nome ? caixa.nome :'Caixa esquisita'}</h2></div>
                        <div className="containerCaixaPreçoQtd">
                            <p className="pPrecoCaixa">R$ 10</p>
                            <div className="containerNumeroCaixas">
                                    <p className="iconApagarCaixa">🚽</p>

                                    <button className="btnQtaCaixa" onClick={()=>{
                                        if(numerosCaixas <=1){
                                            setNumeroCaixas(1)
                                            return alert("n epossivel pedir 0 caixas")
                                            
                                        }
                                        setNumeroCaixas(numerosCaixas-1)
                                    }}>-</button>
                                    <p className="pCaixaNumero">{numerosCaixas}</p>
                                    <button className="btnQtaCaixa2" onClick={()=>{
                                        if(numerosCaixas>=3){
                                            setNumeroCaixas(1)
                                            return alert("numero Maximo atijinndo")
                                            
                                        }
                                        setNumeroCaixas(numerosCaixas+1)}}>+</button>
                                </div>
                        </div>
                    </div>
                            
                    ))}
                    

                </main> : <IncentivarCarinhoCompra />}
                <ResumoPedido numerosCaixas ={vetorCaixa.length} frete={10} />
               

            </div>
        </div>
    )
 }
 export default TamplateCaixa