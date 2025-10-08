import { Router } from "express";
import ClientController from "../controllers/ClientController.js";

const routes = Router()

routes.get('/rotaTest',(req,res)=>{

    res.json('rotas funfando')

})
routes.post("/createBoxClient", async (req,res)=>{

  const infosBox =  req.body

   const resultBox = await fetch('http://52.1.197.112:3000/queue/items',{
     method:"POST",
    headers:{
        "Content-Type":"application/json"
        
     },
     body:JSON.stringify(infosBox)
   })
    

   const data = await resultBox.json()
   console.log(resultBox)
   console.log("data: ",data)

  res.status(200).json({message:data})

})
routes.post("/clients",ClientController.insertUser)

routes.post("/clientsLogin",ClientController.loginUser)


export default routes