import { useState } from "react"
import { AgregarTarea } from "./Components/agregarTarea"

const Items=({nombre,visto})=>{
    return (
        <li>{nombre} 
        {visto?'✅':'❌'}</li>
    )
}



export function ListadoApp() {
    const addTask=()=>{
        setArreglo([...Arreglo,{nombre:"nuevo",visto:false}])
        
    }

    let listadoSecciones=[
        {nombre:'Instalaciones necesarias',visto:true},
        {nombre:'Uso de vite',visto:true},
        {nombre:"Componentes", visto:true},
        {nombre:"Variables jsx", visto:true},
        {nombre:"Props", visto:true},
        {nombre:"Eventos", visto:true},
        {nombre:"useState", visto:true},
        {nombre:"Redux", visto:false},
        {nombre:"CustomHooks", visto:false},
    ];
    
    const [Arreglo, setArreglo] = useState(listadoSecciones)
    
    return (
        <>
    <h1>Listado de temas del curso</h1>
        <AgregarTarea agregarTarea={setArreglo}></AgregarTarea>
    <ol>
        {Arreglo.map((item)=><Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}
    </ol>

    </>
  )
}
                                    