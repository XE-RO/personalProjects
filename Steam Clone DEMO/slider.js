export default function slider(){
    let itemsArray=document.querySelectorAll(".slide");
    let slider=document.getElementById("visualizer")
    let leftButton=document.querySelector(".button-slider-left");
    let rightButton=document.querySelector(".button-slider-right");
    

    let numberItems=itemsArray.length;

    let ibutton1=document.querySelector(".iButton1");
    let ibutton2=document.querySelector(".iButton2");
    let ibutton3=document.querySelector(".iButton3");
    let b1=document.getElementById("b1");
    let b2=document.getElementById("b2");
    let b3=document.getElementById("b3");

    let state=0;

    function dinamicIndex(){

        switch(state){
            case 0: 
            b1.style.backgroundColor="#A7BACC";
            b2.style.backgroundColor="#30516d";
            b3.style.backgroundColor="#30516d";
            
            break;
            case 913: 
            b1.style.backgroundColor="#30516d";
            b2.style.backgroundColor="#A7BACC";
            b3.style.backgroundColor="#30516d";
            break;
            case 1826:
                b1.style.backgroundColor="#30516d";
                b2.style.backgroundColor="#30516d";
                b3.style.backgroundColor="#A7BACC";
                break;
            } 
        }
        dinamicIndex()
        
        
        function leftAction(){
            if(state<=0){
                state=913*(numberItems-1)
            }else{
                state-=913
            }
            slider.scrollLeft=(state)
            dinamicIndex()
            
        }
        function rightAction(){
            if(state < 913*(numberItems-1)){
                state+=913
            }else{
                state=0
            }
            slider.scrollLeft=(state)
            dinamicIndex()
            
        }
        
        
        function iButton1(){
            state=0
            slider.scrollLeft=(state)
            dinamicIndex()
        
        }
        function iButton2(){
            state=913
            slider.scrollLeft=(state)
            dinamicIndex()     
        }
        function iButton3(){
            state=1826
            slider.scrollLeft=(state)
            dinamicIndex()
        
        }
        
        

        let autoPlay=setInterval(()=>{
            slider.style.opacity="0"
            setTimeout(()=>{
                slider.style.opacity="1"
                rightAction();
               
        },150)
        
    },5000)
    
    document.addEventListener("click",(e)=>{
        
        if(e.target==leftButton){
            clearInterval(autoPlay)
            slider.style.opacity="0"
            setTimeout(()=>{
                slider.style.opacity="1"
                leftAction();   
            },150)
            
            
        }
        if(e.target==rightButton){
            clearInterval(autoPlay)    
            slider.style.opacity="0"
            setTimeout(()=>{
                slider.style.opacity="1"
                rightAction();
            },150)
        }
        
        if(e.target==ibutton1){
            clearInterval(autoPlay)    
            slider.style.opacity="0"
            setTimeout(()=>{
                slider.style.opacity="1"
                iButton1()
            },150)
        }
        if(e.target==ibutton2){
            clearInterval(autoPlay)    
            slider.style.opacity="0"
            setTimeout(()=>{
                slider.style.opacity="1"
                iButton2()
            },150)
        }
        if(e.target==ibutton3){
                
            clearInterval(autoPlay)    
            slider.style.opacity="0"
            setTimeout(()=>{
                slider.style.opacity="1"
                iButton3()
            },150)
        }
        
    })
    
    document.addEventListener("mouseover",(e)=>{
        if(e.target==b1){
            b1.style.backgroundColor="#A7BACC";
            
        }
        if(e.target==b2){ 
            b2.style.backgroundColor="#A7BACC"; 
            
        }
        if(e.target==b3){
            b3.style.backgroundColor="#A7BACC";
            
        }
    })
    document.addEventListener("mouseout",(e)=>{
        if(e.target==b1){
            b1.style.backgroundColor="#30516d";
            dinamicIndex()
        }
        if(e.target==b2){ 
            b2.style.backgroundColor="#30516d"; 
            dinamicIndex()
        }
        if(e.target==b3){
            b3.style.backgroundColor="#30516d";
            dinamicIndex()
        }
    })
    
}