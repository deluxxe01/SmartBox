import { Router } from "express";
import ClientController from "../controllers/ClientController.js";
import CaixaController from "../controllers/CaixaController.js";

const routes = Router()

routes.get('/rotaTest', (req, res) => {
    res.json('rotas funfando')
})

routes.post("/createBoxClient", CaixaController.createBox)

routes.post("/clients", ClientController.insertUser)

<<<<<<< HEAD
routes.post("/clientsLogin", ClientController.loginUser)
=======
routes.post("/createBox",CaixaController.createBox)
routes.get('/getPositionCaixa/:id',CaixaController.getPositionCaixa)
>>>>>>> 74082fddaa1e82f547d8b565450ffa99ef441718

// Nova rota para deletar usuário
routes.delete("/clients/:id", ClientController.deleteUser)

routes.post("/createBox", CaixaController.createBox)

export default routes
