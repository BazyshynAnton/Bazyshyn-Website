import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HeaderContextProvider } from './context/header/HeaderContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderContextProvider>
        <App />
      </HeaderContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
