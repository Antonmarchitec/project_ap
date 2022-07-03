
let contTemsplatesRetos = document.querySelector("#contTemsplatesRetos")





document.addEventListener("scroll", () =>{
     let elementPosition = contTemsplatesRetos.offsetTop  //pos 332
     //console.log(elementPosition)
     let scrollPosition = document.documentElement.scrollTop
     //console.log(scrollPosition)

     if(scrollPosition > elementPosition){
        contTemsplatesRetos.classList.add("contTemsplatesRetos_JS")
     }else if(scrollPosition < elementPosition){
        contTemsplatesRetos.classList.remove("contTemsplatesRetos_JS")
     }
      
    
})