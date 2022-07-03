
let contTemsplatesRetos = document.querySelector("#contTemsplatesRetos")
let posTitleContacto = document.querySelector("#contacto")





document.addEventListener("scroll", () =>{
     let elementPosition = contTemsplatesRetos.offsetTop  //pos 332
     //console.log(elementPosition)
     let scrollPosition = document.documentElement.scrollTop
     //console.log(scrollPosition)

     let contactPosition = posTitleContacto.offsetTop     //5541
     //console.log(contactPosition)

     if(scrollPosition > elementPosition){
        contTemsplatesRetos.classList.add("contTemsplatesRetos_JS")
     }else if(scrollPosition < elementPosition){
        contTemsplatesRetos.classList.remove("contTemsplatesRetos_JS")
     }
})