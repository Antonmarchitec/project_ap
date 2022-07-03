let containerBaseCuadros = document.querySelector("#containerBaseCuadros")
let templateCuadro = document.querySelector("#templateCuadro").content
let fragmentServicios = document.createDocumentFragment()

document.addEventListener("DOMContentLoaded", () =>{
    dataFechServices()
})


const dataFechServices = async () =>{
    try{
        const resServices = await fetch("servicios.json")
        const dataServices = await resServices.json()
        //console.log(dataServices)
        pintarCuadroServicios(dataServices)

    }catch(error){
        console.log("Problema al cargar archivo")
    }
}


const pintarCuadroServicios = (dataServices) =>{
    //console.log(dataServices)
    dataServices.forEach( element => {
        //console.log(element)
        templateCuadro.querySelector("#contCuadro_title").textContent = element.title
        templateCuadro.querySelector("#imgServices").setAttribute("src", element.imagen)
        templateCuadro.querySelector("#contCuadro_parrafo").textContent = element.descripcion
        templateCuadro.querySelector("#imgServices").setAttribute("alt", element.title)
        
        let cloneServices = templateCuadro.cloneNode(true)
        fragmentServicios.appendChild(cloneServices)
    }); 
    containerBaseCuadros.appendChild(fragmentServicios) 
}