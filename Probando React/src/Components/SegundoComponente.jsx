import React,{setState, useState} from 'react'


export default function SegundoComponente() {
    let [nombre,setNombre]=useState("Xavier")

    const cambiarVariable=(newValue)=>{
        setNombre(newValue)
    }
    const showState=()=>{
        console.log(`el Estado actual es: ${nombre}`)
    }
    let numbers=[
        "elemento 1",
        "elemento 2",
        "elemento 3",
        "elemento 4",
        "elemento 5",
    ]
    

  return (
    <div>
        <p>Variable estado: <strong className={nombre.length>4?"rojo":"verde"}>* {nombre} * </strong></p>
        <input type="text" onChange={e=>{cambiarVariable(e.target.value)}}/>
        <button onClick={e=>{cambiarVariable('XAVIER')}}>Cambiar Variable estado</button>
        <button onClick={e=>{showState()}}>Mostrar estado</button>
        <ul>
            {
                numbers.map((element,index)=>{
                    return(
                    <li key={index}>{element}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}
