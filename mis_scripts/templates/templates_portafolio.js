

let basePortafolio = document.querySelector("#baseContainerNew")
let templatePortafolio = document.querySelector("#templatePortafolio").content
let fragmentPortafolio = document.createDocumentFragment()

document.addEventListener("DOMContentLoaded", () =>{
    dataFechPortafolio()
})



const dataFechPortafolio = async ()=>{
    try{
        const resPortafolio = await fetch("portafolio.json")
        const dataPortafolio = await resPortafolio.json()
        pintarPortafolio(dataPortafolio)
        //console.log(dataPortafolio)
        
    }catch(error){
        console.log("Error de carga")
    }
}


const pintarPortafolio = (dataPortafolio)=>{
    //console.log(dataPortafolio)
    dataPortafolio.forEach(element => {
        console.log(element.title1)
        templatePortafolio.querySelector("#title1").textContent = element.title1
        templatePortafolio.querySelector("#title2").textContent = element.title2

        templatePortafolio.querySelector("#newFigureFondo").setAttribute("src",element.imagenFondo)
        templatePortafolio.querySelector("#newFigureFondo").setAttribute("alt",element.title1)

        templatePortafolio.querySelector("#iconOjo").dataset.idOjo = element.dataImage
        templatePortafolio.querySelector("#iconPhoto").dataset.idPhoto = element.dataGitHub


        const clonarPortafolio = templatePortafolio.cloneNode(true)
        fragmentPortafolio.appendChild(clonarPortafolio)
    });
    basePortafolio.appendChild(fragmentPortafolio)
}

//FUNCION LANDING




/*
        templateWeb.querySelector("#image1").setAttribute("src", element.image1)
        templateWeb.querySelector("#image1").setAttribute("alt", element.title1)
        templateWeb.querySelector("#image2").setAttribute("src", element.image2)
        templateWeb.querySelector("#image2").setAttribute("alt", element.title2)

        
        templateWeb.querySelector("#webTitle").textContent = element.title1
        templateWeb.querySelector("#webTitle2").textContent = element.title2

        templateWeb.querySelector("#webDescription").textContent = element.descripcion1
        templateWeb.querySelector("#webDescription2").textContent = element.descripcion2

        templateWeb.querySelector("#titleProy").textContent = element.subtitleProy
        templateWeb.querySelector("#titleResp").textContent = element.subtitleResp
        templateWeb.querySelector("#titleResp2").textContent = element.subtitleResp

        templateWeb.querySelector("#desktop").textContent = element.dis1
        templateWeb.querySelector("#tablet").textContent = element.dis2
        templateWeb.querySelector("#movil").textContent = element.dis3
        templateWeb.querySelector("#desktop2").textContent = element.dis1
        templateWeb.querySelector("#tablet2").textContent = element.dis2
        templateWeb.querySelector("#movil2").textContent = element.dis3

        templateWeb.querySelector("#text1A").textContent = element.tip1A
        templateWeb.querySelector("#text1B").textContent = element.tip1B
        templateWeb.querySelector("#text1C").textContent = element.tip1C
        templateWeb.querySelector("#text1D").textContent = element.tip1D

        templateWeb.querySelector("#text2A").textContent = element.tip1A
        templateWeb.querySelector("#text2B").textContent = element.tip1B
        templateWeb.querySelector("#text2C").textContent = element.tip1C
        templateWeb.querySelector("#text2D").textContent = element.tip2D


        
            */
