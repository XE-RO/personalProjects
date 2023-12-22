import React from 'react'

export default function Menu({Name,Boton1 ,Boton2, Boton3, Boton4, Boton5,}) {

  return (
    <section className={Name}>
    <ul>
        <li><a href="#">{Boton1}</a></li>
        <li><a href="#">{Boton2}</a></li>
        <li><a href="#">{Boton3}</a></li>
        <li><a href="#">{Boton4}</a></li>
        <li><a href="#">{Boton5}</a></li>
    </ul>
    </section>
  )
}
