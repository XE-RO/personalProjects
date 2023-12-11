export default function responsiveMedia(element,mq,mobileContent,desktopContent){
    let breakpoint=window.matchMedia(mq)
    let targetElement=document.querySelector(element)

    let responsive=(e)=>{
        if(e.matches){
            targetElement.innerHTML=desktopContent
        }else{
            targetElement.innerHTML=mobileContent
        }
    }
    responsive(breakpoint)
    breakpoint.addListener(responsive)
    

}