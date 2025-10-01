import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'   
import router from './routes/rotes.jsx'
import { GlobalProvider } from './Context/Globalcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
        <RouterProvider router={router}></RouterProvider>
    </GlobalProvider>
  </StrictMode>
)
