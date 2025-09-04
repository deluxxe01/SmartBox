import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/LoginPage/Login";
import Cadastro from "../Pages/CadastroPage/Cadastro";
import CatalogoPage from "../Pages/CatalogoPage/CatalogoPage";
import Home from "../Pages/HomePage/Home"


const router =  createBrowserRouter([


{path:"/", element: <Home />},
{path: "/catalogo", element: <CatalogoPage />},
{path: "/login", element: <Login />},
{path: "/cadastro", element: <Cadastro />},
{path:"/carinho",element:<Carrinho />},
{path: "/caixa_persona_etp1", element: <Caixa_persona_etp1 />},
{path:'/Carrinho',element:<Carrinho />}

])




export default router