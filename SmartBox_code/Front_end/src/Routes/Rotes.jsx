import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import CatalogoPage from "../Pages/CatalogoPage/CatalogoPage";

const router =  createBrowserRouter([

{path: "/", element: <LandingPage />},
{path: "/catalogo", element: <CatalogoPage />}



])







export default router