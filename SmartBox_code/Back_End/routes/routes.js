import { Router } from "express";
import ClientController from "../controllers/ClientController.js";

const routes = Router()

routes.get('/rotaTest',(req,res)=>{

    res.json('rotas funfando')

})
routes.post("/createBoxClient", async (req,res)=>{

  const infosBox =  req.body

  // const resultBox = await fetch('http://52.1.197.112:3000/queue/items?limit=99',{
  //   method:"POST",
  //   headers:{
  //       "Content-Type":"application/json"
        
  //   },
  //   body:JSON.stringify(infosBox)
  // })
    const result = await fetch('http://52.1.197.112:3000/queue/items?limit=99');
    console.log(result)

  // const data = await resultBox.json()

  res.json(result)

})

routes.post("/clients",ClientController.insertUser)

routes.post("/clientsLogin",ClientController.loginUser)


export default routes