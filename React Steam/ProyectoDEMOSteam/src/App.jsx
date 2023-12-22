import React from 'react'
import Menu from './components/Menu';
import Banner from './components/Banner';
import MenuBanner from './components/menuBanner';


function App() {
  return (
    <>
    <Menu Name='menu-container' Boton1='Tienda' Boton2='Comunidad' Boton3='Acerca de' Boton4='Invetario' Boton5='Perfil'></Menu>
    <Banner Name='Banner1' ></Banner>
    </>
  )
}
export default App;
