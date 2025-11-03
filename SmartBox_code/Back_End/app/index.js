import express from 'express';
import routes from '../routes/routes.js';
import dotenv from "dotenv";
import path from "path";
import DbConection from '../db/db.js';
import cors from "cors"; // <-- 🚨 ADICIONE ESTA LINHA

dotenv.config({
  path: "./secrets/.env"
});

const PORT = 3000;

const App = express();

await DbConection.sync({ logging: false, alter: true });

App.use(cors()); // <-- 🚨 E ESTA LINHA
App.use(express.json());
App.use(routes);

App.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});
