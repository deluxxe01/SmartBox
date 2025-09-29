import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/LoginPage/Login";
import Cadastro from "../Pages/CadastroPage/Cadastro";
import CatalogoPage from "../Pages/CatalogoPage/CatalogoPage";
import Home from "../Pages/HomePage/Home"
import Historico from "../Pages/HistoricoPages/Historico"
import Carrinho from '../Pages/Carrinho/Carrinho'
import Perfil from "../Pages/PerfilPage/Perfil"
import Caixa_persona_etp1 from "../Pages/Caixa_Persona_etp1/Caixa_persona_etp1"


const router =  createBrowserRouter([


{path:"/", element: <Home />},
{path: "/catalogo", element: <CatalogoPage />},
{path: "/login", element: <Login />},
{path: "/cadastro", element: <Cadastro />},
{path: "/perfil", element: <Perfil />},
{path:"/historico", element: <Historico />},
{path: "/caixa_persona_etp1", element: <Caixa_persona_etp1 />},
{path:'/Carrinho',element:<Carrinho />}

])




export default router