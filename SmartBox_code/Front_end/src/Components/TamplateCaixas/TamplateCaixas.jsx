  import { useState } from "react"
  import './TamplateCaixas.css'
 function TamplateCaixa(props){
    const [numerosCaixas,setNumeroCaixas] = useState(0)
    
    return(
        <div className=" containerTamplateCaixas">
            <h1>Carrinho</h1>
            <main className="containerCaixas">
                <div className="containerCarrinhoCaixa">
                    <img src={props.img ? props.img : 'https://i.ibb.co/Z6yfsTRY/image-2-1-5.png'} />
                    <div> <h2 className="h2NomeDaCaixa">{props.nome ? props.nome :'Caixa esquisita'}</h2></div>
                    <div className="containerCaixaPreçoQtd">
                       <p className="pPrecoCaixa">R$ 10</p>
                       <div className="containerNumeroCaixas">
                            <p className="iconApagarCaixa">🚽</p>
                            <button onClick={()=>{setNumeroCaixas(numerosCaixas-1)}}>-</button>
                            {numerosCaixas}
                            <button onClick={()=>{setNumeroCaixas(numerosCaixas+1)}}>+</button>
                        </div>
                    </div>
                </div>
                

            </main>

        </div>
    )
 }
 export default TamplateCaixa