
/*let contMarcoSup2 = document.querySelector("#contMarcoSuperior2");
let contMarcoSup3 = document.querySelector("#contMarcoSuperior3");
let contMarcoSup4 = document.querySelector("#contMarcoSuperior4");*/


let arrow1 = document.querySelector("#arrow1");
/*let arrow2 = document.querySelector("#animacionArrow2");
let arrow3 = document.querySelector("#animacionArrow3");
let arrow4 = document.querySelector("#animacionArrow4");*/


arrow1.addEventListener("click",() =>{
    let contCadaMarcoSuperior1 = document.querySelector("#contCadaMarcoSuperior1");
    contCadaMarcoSuperior1.classList.toggle("contCadaMarcoSuperior1JS");
    arrow1.classList.toggle("arrowJS");
   
});
/*
arrow2.addEventListener("click" , () =>{
    contMarcoSup2.classList.toggle("contMarcoSupJS");
    arrow2.classList.toggle("arrowJS");
});

arrow3.addEventListener("click" , () =>{
    contMarcoSup3.classList.toggle("contMarcoSupJS");
    arrow3.classList.toggle("arrowJS");
});

arrow4.addEventListener("click" , () =>{
    contMarcoSup4.classList.toggle("contMarcoSupJS");
    arrow4.classList.toggle("arrowJS");
});*/