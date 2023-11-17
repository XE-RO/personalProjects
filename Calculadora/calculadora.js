
export function operaciones(){
    let $display=document.querySelector(".screen")
    let inputs="";

    document.addEventListener("click",(e)=>{
        if(e.target.matches(".b11")){
            inputs+="0"
        }
        if(e.target.matches(".b7")){
            inputs+="1"
        }
        if(e.target.matches(".b8")){
            inputs+="2"
        }
        if(e.target.matches(".b9")){
            inputs+="3"
        }
        if(e.target.matches(".b4")){
            inputs+="4"
        }
        if(e.target.matches(".b5")){
            inputs+="5"
        }
        if(e.target.matches(".b6")){
            inputs+="6"
        }
        if(e.target.matches(".b1")){
            inputs+="7"
        }
        if(e.target.matches(".b2")){
            inputs+="8"
        }
        if(e.target.matches(".b3")){
            inputs+="9"
        }
        if(e.target.matches(".b10")){
            inputs+="."
        }
        if(e.target.matches(".s1")){
            inputs+="+"
        }
        if(e.target.matches(".s2")){
            inputs+="-"
        }
        if(e.target.matches(".s3")){
            inputs+="*"
        }
        if(e.target.matches(".s4")){
            inputs+="/"
        }
        if(e.target.matches(".s5")){
            inputs=""
        }
        if(e.target.matches(".b12")){
            let result=new Function("return "+inputs)()
            inputs=result
        }
        $display.innerHTML=inputs
    })
        

    }