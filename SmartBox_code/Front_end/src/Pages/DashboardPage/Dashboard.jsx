
import MenuAdm from '../../Components/Menu/MenuAdm.jsx'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import './Dashboard.css'
import { useState } from 'react'

function Dashboard() {

  const [page,setPage]=useState(1)
  return (
    <div className='ContainerDashboard'>
        
      <NavBar/>
      
      <div className='containerPaiMenuAdm'>
          <div className='Dashboard-Um'>
          <MenuAdm  setPage = {setPage}/>
            <div className='conteinerPages'>

              { page == 1 ? "page 1" : null}
              { page == 2 ? "page 2" : null}
              { page == 3 ? "page 3" : null}

            </div>
          </div>
        </div>
        </div>
  )
}

export default Dashboard