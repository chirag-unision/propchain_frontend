import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import EthProvider from "../contexts/EthContext/EthProvider";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EthProvider>
      <App />
    </EthProvider>
  </React.StrictMode>,
)
