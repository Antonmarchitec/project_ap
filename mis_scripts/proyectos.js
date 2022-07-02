let iconIndicador = document.querySelector("#iconIndicador");
let contRepositorios = document.querySelector("#contRepositorios");

let iconIndicador2 = document.querySelector("#iconIndicador2");
let contRepositorios2 = document.querySelector("#contRepositorios2");

let iconIndicador3 = document.querySelector("#iconIndicador3");
let contRepositorios3 = document.querySelector("#contRepositorios3");

let iconIndicador4 = document.querySelector("#iconIndicador4");
let contRepositorios4 = document.querySelector("#contRepositorios4");


iconIndicador.addEventListener("click" , () =>{
    contRepositorios.classList.toggle("contRepositoriosJS");
});


iconIndicador2.addEventListener("click" , () =>{
    contRepositorios2.classList.toggle("contRepositoriosJS");
});


iconIndicador3.addEventListener("click" , () =>{
    contRepositorios3.classList.toggle("contRepositoriosJS");
});



iconIndicador4.addEventListener("click" , () =>{
    contRepositorios4.classList.toggle("contRepositoriosJS");
});