import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// Import strict Vanilla CSS Architecture
import './styles/base.css'
import './styles/layout.css'
import './styles/forms.css'
import './styles/dashboard.css'
import './styles/map.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
