import express from 'express'
import routes from '../routes/routes.js'
import dotenv from "dotenv"
import path from "path"
dotenv.config({
   path:"./secrets/.env"
})
const PORT = 3000


 const App = express()

 App.use(express.json())// habilita as rotas receberem json no req

 App.use(routes)



 App.listen(PORT,()=>{
 })