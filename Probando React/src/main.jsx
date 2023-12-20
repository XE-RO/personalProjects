import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/App.css'
import PrimerComponente from './Components/PrimerComponente'
import SegundoComponente from './Components/SegundoComponente'
import TercerComponente from './Components/TercerComponente'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SegundoComponente></SegundoComponente>
  </React.StrictMode>,
)
