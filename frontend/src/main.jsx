import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'
import { ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css";
import { Toaster } from 'react-hot-toast'
import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights()


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <Toaster position='top-right' reverseOrder={false} />
      <App />
      <ToastContainer/>
    </StoreContextProvider> 
  </BrowserRouter>,
)
