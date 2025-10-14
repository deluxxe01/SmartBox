import express from 'express'
import routes from '../routes/routes.js'
import dotenv from "dotenv"
import path from "path"
import DbConection from '../db/db.js'
dotenv.config({
   path:"./secrets/.env"
})
const PORT = 3000


 const App = express()

await DbConection.sync()

 App.use(express.json())// habilita as rotas receberem json no req

 App.use(routes)



 App.listen(PORT,()=>{
   console.log("rodando na porta ",PORT)
 })