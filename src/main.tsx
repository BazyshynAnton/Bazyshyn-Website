import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom'
import { HeaderContextProvider } from './context/header/HeaderContext.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderContextProvider>
        <App />
      </HeaderContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
