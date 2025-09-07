import express from 'express'
import routes from '../routes/routes.js'

 const App = express()

 App.use(express.json())// habilita as rotas receberem json no req

 App.use(routes)



 App.listen(3000,()=>{
    console.log('oiiiiiii🤡')
 })