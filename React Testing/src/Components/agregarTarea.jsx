import { useState } from "react"

export const AgregarTarea = ({agregarTarea}) => {
    const [InputValue, setInputValue] = useState('')
    const onInputChange = (event) =>{
        setInputValue(event.target.value)
        
    }

    const onSubmit=(event)=>{
      const envio={
        nombre:InputValue,
        visto:false
      }
        event.preventDefault()
        agregarTarea(tareas=>[...tareas,envio])
        console.log(InputValue)
    }

  return (
  <form onSubmit={onSubmit}>
    <input 
    type="text"
    placeholder="Ingresa una nueva tarea"
    value={InputValue}
    onChange={onInputChange}
    />

    </form>
  )
}
