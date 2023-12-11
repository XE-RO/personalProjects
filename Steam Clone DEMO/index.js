import responsiveMedia from "./responsive.js";
import slider from "./slider.js"

responsiveMedia(".slider-container","(min-width: 1024px)", `
<a href="#" class="button-slider-left"></a>

<div class="slider">

<section id="visualizer">

<div id="Game1" class="slide">
<a href="#" class="game1"></a>
</div>

<div id="Game2" class="slide"> 
<a href="#" class="game2"></a>
</div>

<div id="Game3" class="slide">
<a href="#" class="game3"></a>
</div>
</section>

</div>
<a href="#" class="button-slider-right" ></a>
`,
`
<a href="#" class="button-slider-left"></a>

<div class="slider">

<section id="visualizer">

<div id="Game1" class="slide">
<a href="#" class="game1"></a>
<div class="min-grid">
<h1 class="gtitle">Assassins Creed</h1>
<a href="#" class="min1"></a>
<a href="#" class="min2"></a>
<a href="#" class="min3"></a>
<a href="#" class="min4"></a>
</div>
</div>

<div id="Game2" class="slide"> 
<a href="#" class="game2"></a>
<div class="min-grid">
<h1 class="title">The last of us</h1>
<a href="#" class="min1"></a>
<a href="#" class="min2"></a>
<a href="#" class="min3"></a>
<a href="#" class="min4"></a>
</div>

</div>

<div id="Game3" class="slide">
<a href="#" class="game3"></a>
<div class="min-grid">
<h1 class="title">Overwatch 2</h1>
<a href="#" class="min1"></a>
<a href="#" class="min2"></a>
<a href="#" class="min3"></a>
<a href="#" class="min4"></a>
</div>
</div>
</section>
<div class="indexContainer">
<a class="indexButtons iButton1" id="b1" href="#"></a>
<a class="indexButtons iButton2" id="b2" href="#"></a>
<a class="indexButtons iButton3" id="b3" href="#"></a>
</div>

</div>
<a href="#" class="button-slider-right" ></a>
`
);
addEventListener("DOMContentLoaded",e=>{
    
    slider();
    
    
})