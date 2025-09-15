import "./IncentivarCarinhoCompra.css"

function IncentivarCarinhoCompra(){
    return(
       <div className="ContainerAvisoNãoPossuiCompra">
        <img src="./icon/felicidade 2.png" alt="" />
        <h2 className="H2NaoPossuiItens">Não possui itens no carinho!</h2>
        <h3 className="H3NaoPossuiItens">Você ainda não escolheu nenhum </h3>
        <h3>produto. Explore nossas opções!</h3>
               </div>
    )
}



export default IncentivarCarinhoCompra