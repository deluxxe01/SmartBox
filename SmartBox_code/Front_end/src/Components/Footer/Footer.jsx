import './Footer.css'
function Footer(){



    return(
        <div className='containerPaiFooter'>
            
            <div className='containerMenuFooter'>
                <h2>Menu</h2>
                <h4>Catalogo</h4>
                <h4>Carrinho</h4>
            </div>
            <div className='containerContatoFooter'>
                <h2>Contato</h2>
                <h4>smartbox@gmail.com</h4>
                <h4>(48) 98865-1650</h4>

            </div>
            <div className='containerEndereçoFooter'>
                <h2>Endereço</h2>
                <h4>SC, Florianópolis</h4>
                <h4>Sesi/Senai, 234</h4>

            </div>

        </div>
    )
}

export default Footer