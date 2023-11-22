export function sliderButtons(){
    
    let $images=document.querySelectorAll(".covers");
    let $rightButton=document.querySelector(".right");
    let $leftButton=document.querySelector(".left");
    let state=0;
    
    function rightButton(){
        
        if(state>=($images.length-1)*300){
            state=0
        }else{
            state+=300;
        }
        $images.forEach((el)=>{
            el.style.transform=`translateX(-${state}px)`
            el.style.animation=`fadeOut 0.5s ease-out`;
            setTimeout(()=>{
                el.style.animation=`null`},450)
            })
            // console.log(state) 
            
        }
        
        
        function leftButton(){
            if(state<300){
                state=($images.length-1)*300
            }else{
                state-=300;
            }
            $images.forEach((el)=>{
                el.style.transform=`translateX(-${state}px)`
                el.style.animation=`fadeOut 0.5s ease-out`;
                setTimeout(()=>{
                    el.style.animation=`null`},450)
            // console.log(state)
        })
    }
    
    document.addEventListener("click",(e)=>{
        if(e.target==$rightButton){
            rightButton();
        }
        if(e.target==$leftButton){
            leftButton();
        }
    })
}
    // document.addEventListener("click",(e)=>{
    //     if(e.target==$rightButton){
    //         rightButton();
    //     }
    // })