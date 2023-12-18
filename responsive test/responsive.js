export default function responsive(element,mq,mobile,desktop){
    let breakpoint=window.matchMedia(mq)

    let mqState=(e)=>{
        console.log(e)
        if(e.matches){
            document.querySelector(element).innerHTML=desktop
        }else{
            document.querySelector(element).innerHTML=mobile
        }
    }

    mqState(breakpoint)
    breakpoint.addListener(mqState)
        
    
}