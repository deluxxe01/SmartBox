import express from "express";
import CatalogoController from "../controllers/CatalogoController.js";
import multer from "multer";

const routes = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

routes.post("/", upload.single("imagem"), CatalogoController.createCaixa);
routes.get("/", CatalogoController.getCaixas);

// rota para pegar imagem
routes.get("/:id/imagem", CatalogoController.getImagemCaixa);
export default routes;

routes.put("/:id", upload.single("imagem"), CatalogoController.updateCaixa);
routes.delete("/:id", CatalogoController.deleteCaixa);