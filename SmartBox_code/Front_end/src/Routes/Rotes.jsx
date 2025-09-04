import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/LoginPage/Login";
import Cadastro from "../Pages/CadastroPage/Cadastro";
import CatalogoPage from "../Pages/CatalogoPage/CatalogoPage";
<<<<<<< HEAD
import Home from "../Pages/HomePage/Home"

const router =  createBrowserRouter([

{path:"/", element: <Home />},
{path: "/catalogo", element: <CatalogoPage />},
{path: "/login", element: <Login />},
{path: "/cadastro", element: <Cadastro />}
=======
import Carrinho from "../Pages/Carrinho/Carrinho";

const router =  createBrowserRouter([

{path: "/", element: <LandingPage />},
{path: "/catalogo", element: <CatalogoPage />},
{path:'/Carrinho',element:<Carrinho />}


>>>>>>> 40030e1 (resolvendo o erro de conflito)

])







export default router