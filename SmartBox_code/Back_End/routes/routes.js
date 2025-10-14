import { Router } from "express";
import ClientController from "../controllers/ClientController.js";
import CaixaController from "../controllers/CaixaController.js";

const routes = Router()

routes.get('/rotaTest',(req,res)=>{

    res.json('rotas funfando')

})
routes.post("/createBoxClient",CaixaController.createBox)

routes.post("/clients",ClientController.insertUser)

routes.post("/clientsLogin",ClientController.loginUser)


export default routes