import React from 'react'
import MenuBanner from './menuBanner'

export default function Banner({Name}) {
  return (
    <>
    <a href="#" className={Name} onDragStart={(e)=>{e.preventDefault()}}>
    <MenuBanner Name='menu-banner1' Boton1='Tu Tienda' Boton2='Nuevo y destacable' Boton3='Categorias' Boton4='Tienda de puntos' Boton5='Laboratorios'></MenuBanner>
    
    </a>
    </>
  )
}
