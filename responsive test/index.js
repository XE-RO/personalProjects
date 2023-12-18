import responsive from "./responsive.js"


document.addEventListener("DOMContentLoaded",()=>{
    responsive(".element-responsive","(min-width: 1024px)",`<h1>Hola mundo (contenido mobile)</h1>`,`<h1>Hola mundo (Contenido Desktop)</h1>`);
    
})