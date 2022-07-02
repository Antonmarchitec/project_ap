
let contenedor_box = document.querySelector("#contenedor_box")
let caja_hijas = document.querySelectorAll("#caja_hijas")

let prew_js = document.querySelector("#prew_js")
let next_js = document.querySelector("#next_js")


let caja_ultima = caja_hijas[caja_hijas.length - 1]
contenedor_box.insertAdjacentElement("afterbegin",caja_ultima)


next_js.addEventListener("click", () =>{
    let caja_pos_actual = document.querySelectorAll("#caja_hijas")[0]
    contenedor_box.style.marginLeft = "-1360px"
    contenedor_box.style.transition = "linear 0.5s"
    setTimeout(function(){
        contenedor_box.style.transition = "none"
        contenedor_box.insertAdjacentElement("beforeend", caja_pos_actual)
        contenedor_box.style.marginLeft = "-680px"
    },500)
})

prew_js.addEventListener("click", () =>{
    let caja_hijas = document.querySelectorAll("#caja_hijas")
    let sladerSeleccionLast = caja_hijas[caja_hijas.length -1]
    contenedor_box.style.marginLeft = "0"
    contenedor_box.style.transition = "linear 0.5s"
    setTimeout(function(){
        contenedor_box.style.transition = "none"
        contenedor_box.insertAdjacentElement("afterbegin" , sladerSeleccionLast)
        contenedor_box.style.marginLeft = "-680px"
    }, 500);

})

