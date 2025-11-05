
import { useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import './Caixa_persona_etp1.css'

function Caixa_persona_etp1() {
 const [andarAtivo,setAndarAtivo]=useState('0')
 const [corChasiAtiva,setCorChasiAtiva] = useState('0')
 
 
 
 
   return (
   <div className='container_caixa_persona_etp1'>

<div className='conatiner_head_caixa_persona'>
   <NavBar/>
</div>

<div className='container_custom_caixa_e_mD3'>

<div className='container_modelo_3D'>

<img src="https://preview.redd.it/wallpaper-do-macaco-apenas-comece-v0-hvc4jmi16xcf1.png?width=1080&crop=smart&auto=webp&s=320c6b8e703ba42d01d1c09523035c861dc7d909" alt="" className='modelo_3D'/>

</div>

<div className='container_custom_caixas'>







<div className='title_custom_caixa'>
<h1 className='h1_pesonalização_caixa'>Personalização da Caixa 1</h1>
</div>

<div className='container_all_andares_caixa'>



<div className='container_andares_custom_caixa'>
<h1 className='h1_andares_caixa'>Andares</h1>
</div>
<div className='container_andares_caixa'>

<button className={`button_primeiro_andar ${andarAtivo === "1" ? "andar_ativo" : ""}`}
        onClick={() => setAndarAtivo("1")}>1 unidade</button>


<button   className={`button_segundo_andar ${andarAtivo==="2" ? "andar_ativo":""}`}
onClick={(()=>{setAndarAtivo("2")})}
>2 unidade</button>





<button    className={`button_terceiro_andar ${andarAtivo==="3" ? "andar_ativo":""}`}
onClick={()=>{setAndarAtivo("3")}}>3 unidade</button>

</div>
</div>


<div className='container_cor_chasi'>


<h1 className='h1_chasi_color'>Cor do chasi</h1>


<div className='container_paleta_chasi'>

<div className='container_cor_chasi_vermelho'>
<button className= {`button_cor_chasi_vermelho ${corChasiAtiva === "1" ? "cor_Chasi_ativo" : ""}`} 
onClick={()=>{setCorChasiAtiva("1")}}></button>
</div>


<div className='container_cor_chasi_preto'>

<button className= "button_cor_chasi_preto"></button>


</div>


<div className='container_cor_chasi_azul'>
<button className= {`button_cor_chasi_azul ${corChasiAtiva === "3" ? "cor_Chasi_ativo" : ""}`} 
onClick={()=>{setCorChasiAtiva("3")}}></button>

</div>

</div>

</div>





<div className='cotainer_laminas_esq_cores'>

<h1 className='h1_cor_lamina_esq'>Cor lamina esquerda</h1>

<div className='container_paleta_lamina_esq'>

<button className='button_cor_lamina_esq_sem_cor'></button>
<button className='button_cor_lamina_esq_vermelho'></button>
<button className='button_cor_lamina_esq_preta'></button>
<button className='button_cor_lamina_esq_azul'></button>
<button className='button_cor_lamina_esq_verde'></button>
<button className='button_cor_lamina_esq_branca'></button>
<button className='button_cor_lamina_esq_amarela'></button> 
</div>

</div>



<div className='cotainer_laminas_front_cores'>

<h1 className=' cor_h1_lamina_frontal'>cor da lamina frontal</h1>

<div className='container_paleta_lamina_front'>

<button className='button_cor_lamina_front_sem_cor'></button>
<button className='button_cor_lamina_front_vermelho'></button>
<button className='button_cor_lamina_front_preta'></button>
<button className='button_cor_lamina_front_azul'></button>
<button className='button_cor_lamina_front_verde'></button>
<button className='button_cor_lamina_front_branca'></button>
<button className='button_cor_lamina_front_amarela'></button> 
 </div>




</div>




<div className='cotainer_laminas_dir_cores'>

<h1 className='h1_lamina_dir'>cor da lamina direita</h1>

<div className='container_paleta_lamina_dir'>


<button className='button_cor_lamina_dir_sem_cor'></button>
<button className='button_cor_lamina_dir_vermelho'></button>
<button className='button_cor_lamina_dir_preta'></button>
<button className='button_cor_lamina_dir_azul'></button>
<button className='button_cor_lamina_dir_verde'></button>
<button className='button_cor_lamina_dir_branca'></button>
<button className='button_cor_lamina_dir_amarela'></button> 

</div>
</div>














</div>






</div>


   </div>
  

  )
}

export default Caixa_persona_etp1