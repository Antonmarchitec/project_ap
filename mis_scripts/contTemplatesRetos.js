
let contTemsplatesRetos = document.querySelector("#contTemsplatesRetos")
let posTitleContacto = document.querySelector("#contacto")



document.addEventListener("scroll", () =>{
     let elementPosition = contTemsplatesRetos.offsetTop  //pos 562
     //console.log(elementPosition)
     let scrollPosition = document.documentElement.scrollTop
     console.log(scrollPosition)

     let contactPosition = posTitleContacto.offsetTop     //3505
     //console.log(contactPosition)

     if(scrollPosition > elementPosition && scrollPosition < contactPosition - 600){
       contTemsplatesRetos.classList.add("contTemsplatesRetos_JS")
     }else{
      contTemsplatesRetos.classList.remove("contTemsplatesRetos_JS")
     }
})