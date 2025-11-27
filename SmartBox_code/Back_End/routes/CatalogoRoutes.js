import express from "express";
import CatalogoController from "../controllers/CatalogoController.js";
import multer from "multer";

const routes = express.Router()
const upload = multer({ storage: multer.memoryStorage() })

//criar caixa
routes.post("/", upload.single("imagem"), CatalogoController.createCaixa)

//listar todas
routes.get("/", CatalogoController.getCaixas)

//pegar 1 caixa pelo id  
routes.get("/:id", CatalogoController.getCaixaById)

// pegar imagem
routes.get("/:id/imagem", CatalogoController.getImagemCaixa)

//atualiza
routes.put("/:id", upload.single("imagem"), CatalogoController.updateCaixa)

//excluir
routes.delete("/:id", CatalogoController.deleteCaixa)

export default routes;
