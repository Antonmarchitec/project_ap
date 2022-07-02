let btnResponsive = document.getElementById("btnResponsive");
let contMenu = document.getElementById("contNavegador");
let contHeader = document.querySelector("#contHeader");


btnResponsive.addEventListener("click", () =>{
    /*let logo = document.querySelector(".logo");
    contMenu.classList.toggle("desplazar");
    for (i = 0; i < enlaces.length ;i++){
        let ObtendElement = enlaces[i];
        //console.log(ObtendElement);
        ObtendElement.classList.toggle("moviEnlaces_js");
    }
    logo.classList.add("logoMovil");*/
    contMenu.classList.toggle("contNavegadorJS");

});

window.addEventListener("scroll", () =>{
     let positionElement = contHeader.offsetTop;
     //console.log(positionElement);
     let positionScroll = document.documentElement.scrollTop;
     //console.log(positionScroll);
     if (positionScroll > positionElement + 100){
        contHeader.classList.add("contHeader_js");  
     }else{
        contHeader.classList.remove("contHeader_js");
     }
});