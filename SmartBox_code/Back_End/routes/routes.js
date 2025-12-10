import { Router } from "express";
import ClientController from "../controllers/ClientController.js";
import CaixaController from "../controllers/CaixaController.js";
import CatalogoRoutes from "../routes/CatalogoRoutes.js"

const routes = Router()

routes.get('/rotaTest', (req, res) => {
    res.json('rotas funfando')
})


routes.post("/clients", ClientController.insertUser)

routes.post("/clientsLogin", ClientController.loginUser)

routes.put("/clients",ClientController.UpdateUser)

// Nova rota para deletar usuário
routes.use("/catalogo", CatalogoRoutes); // Rotas do catálogo

routes.delete("/clients/:id", ClientController.deleteUser)

routes.post("/createBox", CaixaController.createBox)

routes.get("/BoxPosition/:id",CaixaController.getPositionCaixa)

routes.get("/MyBox/:id",CaixaController.getMyBox)

routes.put("/box/update/:pos",CaixaController.atualizarEstoque)

routes.get("/box/estoque",CaixaController.getAllEstoque)

routes.delete("/box/delete/:pos",CaixaController.removeEstoque)

export default routes
