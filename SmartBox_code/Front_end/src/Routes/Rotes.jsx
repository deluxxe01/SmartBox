import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/LoginPage/Login";
import Cadastro from "../Pages/CadastroPage/Cadastro";
import CatalogoPage from "../Pages/CatalogoPage/CatalogoPage";
import Home from "../Pages/HomePage/Home";
import Caixa_persona_etp1 from "../Pages/Caixa_persona_etp1/Caixa_persona_etp1";



const router =  createBrowserRouter([

{path:"/", element: <Home />},
{path: "/catalogo", element: <CatalogoPage />},
{path: "/login", element: <Login />},
{path: "/cadastro", element: <Cadastro />},
{path: "/caixa_persona_etp1", element: <Caixa_persona_etp1 />},
])







export default router