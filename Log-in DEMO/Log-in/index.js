import responsiveMedia from "./responsiveMedia.js"

document.addEventListener("DOMContentLoaded",(e)=>{

    responsiveMedia("mainContainer","(min-width:1024px)",`<h1>Contenido mobile<h1>`,`<img src="" alt="" class="menu-img">
    <ul  class="menu">
        <li><a href="#">Tienda</a></li>
        <li><a href="#">Comunidad</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Soporte</a></li>
        <li><a href="#">Registrarse</a></li>
    </ul>`);
})