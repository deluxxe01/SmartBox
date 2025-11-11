import express from "express";
import CatalogoController from "../controllers/CatalogoController.js";
import multer from "multer";

const routes = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

routes.post("/", upload.single("imagem"), CatalogoController.createCaixa);
routes.get("/", CatalogoController.getCaixas);

export default routes;

