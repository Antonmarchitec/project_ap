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
        //console.log(element.title1)
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


    document.addEventListener("click", (e) =>{
        //console.log(e.target)
        if(e.target.dataset.idOjo === "dataImage1"){
            window.open("./img/IMG_TEMPLATES/GAMER_TEMPLATE.jpg")
        }else if(e.target.dataset.idPhoto === "dataGitHub1"){
            window.open("https://github.com/Antonmarchitec/template_gamer.git")

        }else if(e.target.dataset.idOjo === "dataImage2"){
            window.open("./img/IMG_TEMPLATES/FINANCIAL_TEMPLATE.jpg")
        }else if(e.target.dataset.idPhoto === "dataGitHub2"){
            window.open("https://github.com/Antonmarchitec/template_financial.git")
            
        }else if(e.target.dataset.idOjo === "dataImage3"){
            window.open("./img/IMG_TEMPLATES/RESTAURANT-TEMPLATE.jpg")
        }else if(e.target.dataset.idPhoto === "dataGitHub3"){
            window.open("https://github.com/Antonmarchitec/landing_resposteria.git")

        }else if(e.target.dataset.idOjo === "dataImage4"){
            window.open("./img/IMG_TEMPLATES/TIENDA_ROPA.jpg")
        }else if(e.target.dataset.idPhoto === "dataGitHub4"){
            window.open("https://github.com/Antonmarchitec/fashion__template.git")

        }else if(e.target.dataset.idOjo === "dataImage5"){
            window.open("./img/IMG_TEMPLATES/VISITTOKIO-TEMPLATE.jpg")
        }else if(e.target.dataset.idPhoto === "dataGitHub5"){
            window.open("https://github.com/Antonmarchitec/template_visit-tokio.git")

        }else if(e.target.dataset.idOjo === "dataImage6"){
            window.open("./img/IMG_TEMPLATES/RESTAURANT-TEMPLATE2.jpg")
        }else if(e.target.dataset.idPhoto === "dataGitHub6"){
            window.open("https://github.com/Antonmarchitec/landing_restaurant.git")
        }
    })
}
