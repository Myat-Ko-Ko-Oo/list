container = document.querySelector(".container")
input = document.querySelector("input")
ol = document.querySelector("ol")
// li =document.querySelectorAll("li")

display=()=>{
    dis=input.value
    ol.innerHTML += `<li >${dis} <i class="fa-solid fa-trash"></i></li>`
    // licreat = document.createElement("li")
    // licreat.textContent = dis
    // ol.append(licreat);
    li =document.querySelectorAll("li")
    i = document.querySelectorAll("i")
    i.forEach(element => {
        element.addEventListener("click",(e)=>{
                lifind()
                el.remove()
            
        })
    });
lifind = ()=>{
    li =document.querySelectorAll("li")
    for(el of li){

    }
    return el
}


     input.value = ""

    li.forEach(el => {
        el.addEventListener("click",()=>{
            if(el.classList.contains("ltr")){
                el.style.textDecoration = "none"
                el.classList.remove("ltr")
                
            }else{
            el.style.textDecoration = "line-through"
            el.classList.add("ltr")
            }
        })
    });
}



input.addEventListener("change",display)

