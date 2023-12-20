import React, {useState} from 'react'

import SegundoComponente from './SegundoComponente'


export default function PrimerComponente() {
    //let Nombre='Xavier'
    let Web='xavierweb.com.es'
    let Cursos=[
        'Master Js',
        'Master PHP',
        'Master React',
        'Master CSS',
    ]
    const [Nombre,setNombre] = useState("Xavier")

    const cambiarNombre=(nuevoNombre)=>{
       setNombre(nuevoNombre)
    }


  return (
    <>
    <div>PrimerComponente</div>
    <p>Este es un parrafo Hola Mundo</p>
    <p>Mi nombre es: <strong className={Nombre.length>=4?'verde':'rojo'}>{Nombre}</strong></p>
    <p>Mi Web: {Web}</p>

    <input type="text" onChange={e=>cambiarNombre(e.target.value)} placeholder='Cambia el nombre' />
    <button onClick={e=>{
        console.log(`el valor del Estado es: ${Nombre}`)

    }}>Mostrar valor del estado </button>

    <button onClick={e=>{cambiarNombre('XAVIER DELGADO')}}>Cambiar Nombre</button>
    <h2>Cursos:</h2>
        <ul>
            {
                Cursos.map((curso,index)=>{
                    return <li key={index}>{curso}</li>
                })
            }
        </ul>
    
    </>
  )
}
