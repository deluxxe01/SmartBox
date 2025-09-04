import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import CatalogoPage from "../Pages/CatalogoPage/CatalogoPage";
import Carrinho from "../Pages/Carrinho/Carrinho";

const router =  createBrowserRouter([

{path: "/", element: <LandingPage />},
{path: "/catalogo", element: <CatalogoPage />},
{path:'/Carrinho',element:<Carrinho />}



])







export default router