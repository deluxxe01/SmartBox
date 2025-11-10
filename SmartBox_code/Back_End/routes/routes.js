import { Router } from "express";
import ClientController from "../controllers/ClientController.js";
import CaixaController from "../controllers/CaixaController.js";
import CatalogoRoutes from "../routes/CatalogoRoutes.js"

const routes = Router()

routes.get('/rotaTest', (req, res) => {
    res.json('rotas funfando')
})

routes.post("/createBoxClient", CaixaController.createBox)

routes.post("/clients", ClientController.insertUser)

routes.post("/clientsLogin", ClientController.loginUser)

routes.use("/catalogo", CatalogoRoutes); // Rotas do catálogo


routes.delete("/clients/:id", ClientController.deleteUser)

routes.post("/createBox", CaixaController.createBox)

export default routes
