export function menuInteract(){
    let $menuButton=document.querySelector(".menu");
    let $dynamicMenu=document.querySelector(".dinamicMenu")

    document.addEventListener("click",(e)=>{
        console.log(e)
        if(e.target.matches(".menu")){
            if($dynamicMenu.classList.contains("menuActive")){
                $dynamicMenu.classList.remove("menuActive")
            }else{
                $dynamicMenu.classList.add("menuActive")
            }
        }else{
            $dynamicMenu.classList.add("menuActive") 
        } 
    })
}