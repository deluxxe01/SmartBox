
import MenuAdm from '../../Components/Menu/MenuAdm.jsx'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className='ContainerDashboard'>
        
      <NavBar/>
      
      <div className='Dashboard-Um'>
       <MenuAdm />
      </div>
        </div>
  )
}

export default Dashboard