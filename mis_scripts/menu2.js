let btnResponsive = document.getElementById("btnResponsive");
let contMenu = document.getElementById("contNavegador");
let contHeader = document.querySelector("#contHeader");


// Mostrar/ocultar al hacer clic en el botón
btnResponsive.addEventListener("click", (e) => {
    e.stopPropagation(); // evita que el clic cierre el menú inmediatamente
    contMenu.classList.toggle("contNavegadorJS");
});

// Cierra el menú si haces clic fuera de él
document.addEventListener("click", (e) => {
    // Si el menú está abierto y el clic fue fuera del header completo
    if (!contHeader.contains(e.target)) {
        contMenu.classList.remove("contNavegadorJS");
    }
});

// Evita que al hacer clic dentro del menú también lo cierre
contHeader.addEventListener("click", (e) => {
    e.stopPropagation();
});







//Aparicion de la Barra
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