import React from 'react'
import ReactDOM from 'react-dom/client'
// import { ContadorApp } from './contadorApp'
import {ListadoApp} from './listadoApp'
import './styles.css'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ContadorApp value={0}/> */}
    <ListadoApp/>

  </React.StrictMode>, 
)
 