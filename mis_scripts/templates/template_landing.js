let contTemplateWeb = document.querySelector("#contTemplateWeb")
let templateWeb = document.querySelector("#templateWeb").content
let fragmentWeb = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", ()=>{
    dataFechWeb()
})


const dataFechWeb = async ()=>{
    try{
        const resWeb = await fetch("landing-templates.json")
        const dataWeb = await resWeb.json()
        pintarlanding(dataWeb)

    }catch(error){
        console.log("Error de carga")
    }
}

const pintarlanding = (dataWeb) =>{
    dataWeb.landing_1_4.forEach(element => {
        console.log(element.title)
        templateWeb.querySelector("img").setAttribute("src", element.image)
        templateWeb.querySelector("img").setAttribute("alt", element.title)

        templateWeb.querySelector("#webTitle").textContent = element.title

        templateWeb.querySelector("#webDescription").textContent = element.descripcion

        templateWeb.querySelector("#titleResp").textContent = element.subtitleResp
        templateWeb.querySelector("#desktop").textContent = element.dis1
        templateWeb.querySelector("#tablet").textContent = element.dis2
        templateWeb.querySelector("#movil").textContent = element.dis3

        templateWeb.querySelector("#titleProy").textContent = element.subtitleProy
        templateWeb.querySelector("#text1").textContent = element.tip1
        templateWeb.querySelector("#text2").textContent = element.tip2
        templateWeb.querySelector("#text3").textContent = element.tip3
        templateWeb.querySelector("#text4").textContent = element.tip4

        templateWeb.querySelector("#btnWeb").dataset.id = element.id


        const cloneWeb = templateWeb.cloneNode(true)
        fragmentWeb.appendChild(cloneWeb)
    });
    contTemplateWeb.appendChild(fragmentWeb)


    //Ejecutar eventos
    document.addEventListener("click", (e)=>{
        if(e.target.dataset.id === "1"){
            window.open("https://antonmarchitec.github.io/landing_restaurant/")
        }
    }) 
}