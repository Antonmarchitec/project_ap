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
        if(e.target.dataset.idOjo === dataImage1){
            console.log("le diste al ojo 1")
        }else if(e.target.dataset.idPhoto === dataGitHub1){
            console.log("le diste github 1")
        }
    })
}
