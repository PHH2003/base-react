import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux/es/exports'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
)
