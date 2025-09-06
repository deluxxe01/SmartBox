
import './ResumoPedido.css'

function ResumoPedido(){

    return (
    <div className='containerResumoPedido'>
                <section aria-labelledby="resumo-title">
            <h2 className='h2tituloResumoPedido'>Resumo do Pedido</h2>
            
            <dl>
            <dt className='dtSubtotalResumoPedido'>Subtotal</dt>
            <dd className='ddSubtotalResumoPedido'>R$ 30,00</dd>
            </dl>
            <dl>
            <dt className='dtSubtotalResumoPedido'>Valor do frete</dt>
            <dd className='ddSubtotalResumoPedido'>R$ 970,00</dd>
            </dl>    
            <dl class="total">
            <dt className='dtSubtotalResumoPedido'>Total</dt>
            <dd className='ddSubtotalResumoPedido'>R$ 1.000</dd>
            </dl>
            
            <button className='btnFinalizarCompra' type="button">Finalizar compra</button>
        </section>
    </div>
        
    )

}
export default ResumoPedido