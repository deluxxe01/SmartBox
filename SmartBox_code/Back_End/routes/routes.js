import { Router } from "express";
import ClientController from "../controllers/ClientController.js";

const routes = Router()

routes.get('/rotaTest',(req,res)=>{

    res.json('rotas funfando')

})
routes.post("/createBoxClient", async (req,res)=>{

  const infosBox =  req.body

  const resultBox = await fetch('http://10.28.196.250:8000/api/requisicoes',{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
        
    },
    body:JSON.stringify(infosBox)
  })

  const data = await resultBox.json()

  res.json("deu certo")

})

routes.post("/clients",ClientController.insertUser)

routes.post("/clientsLogin",ClientController.loginUser)


export default routes