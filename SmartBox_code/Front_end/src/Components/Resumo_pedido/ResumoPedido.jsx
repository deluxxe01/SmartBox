import { useState, useEffect } from 'react'

import './ResumoPedido.css'

function ResumoPedido(props) {
    const [valorCaixas, setValorCaixas] = useState(0)

    const { frete, numerosCaixas } = props

    useEffect(() => {
        const valor = numerosCaixas * 10
        setValorCaixas(valor)
    }, [numerosCaixas])

    function calcularValorTotal() {
        return valorCaixas + frete
    }

    return (
        <div className='containerResumoPedido'>
            <section aria-labelledby="resumo-title">
                <h2 className='h2tituloResumoPedido'>Resumo do Pedido</h2>

                <dl className='dlResumoPedidos'>
                    
                    <dt className='dtSubtotalResumoPedido'>Subtotal</dt>
                    <dd className='ddSubtotalResumoPedido'>
                        {valorCaixas === 0 ? "não há caixas" : `R$ ${valorCaixas.toFixed(2)}`}
                    </dd>
                </dl>

                <dl className='dlResumoPedidos'>
                    <dt className='dtSubtotalResumoPedido'>Valor do frete</dt>
                    <dd className='ddSubtotalResumoPedido'>{valorCaixas === 0 ? "não ha caixas" :`R$${frete.toFixed(2)}`}</dd>
                </dl>

                <dl className="total">
                    <dt className='dtSubtotalResumoPedido'>Total</dt> 
                    <dd className='ddSubtotalResumoPedido'>{valorCaixas === 0 ? "não ha caixas" :`R$${calcularValorTotal().toFixed(2)}`}</dd>
                </dl>

                <button className='btnFinalizarCompra' type="button">Finalizar compra</button>
            </section>
        </div>
    )
}

export default ResumoPedido