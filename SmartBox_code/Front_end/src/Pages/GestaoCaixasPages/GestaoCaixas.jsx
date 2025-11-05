
import MenuAdm from '../../Components/Menu/MenuAdm.jsx';
import './GestaoCaixas.css'

function GestaoCaixas() {
  return (
    <div className='Container-GestaoCaixas'>
        
      <h1 className='Titulo-Dashboard'>Gestão de Caixas</h1>
      <MenuAdm />
<div className='ContainerInfosCaixa'>
     <input className="InputSearch" type="text" />
     <img  className='LixeiraGestao' src="public/icon/deleteblack.png"alt="Botão para excluir conta"/>

     <div className='ContainerInfosCaixa2'>
      <p className=''>+ Adcionar uma imagem da caixa</p>
       <div className='InptDescrição'>
        <label htmlFor="">Descrição</label>
        <input  className="InptDes"type="text" />
       </div>

       <div className='InptValor'>
        <label htmlFor="">Valor</label>
        <input  className="InptDes"type="text" />
       </div>

     </div>

     <p className='P-VisuCaixa'>Visualização da Caixa</p>
     <div className='Container-VisuCaixa'>
      
     </div> 
</div> 
        
      </div>
  )
}

export default GestaoCaixas