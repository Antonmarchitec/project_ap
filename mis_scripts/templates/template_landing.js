let contSectionP = document.querySelector("#contSectionP")
let templateCuadroLanding = document.querySelector("#templateCuadroLanding").content
let fragmentLanding = document.createDocumentFragment()



document.addEventListener("DOMContentLoaded", () =>{
    dataFechLanding()
})


const dataFechLanding = async () =>{
    try{
        const resLanding = await fetch("landing-templates.json")
        const dataLanding = await resLanding.json()
        //console.log(dataLanding)

        pintarTargetLanding(dataLanding)


    }catch(error){
        console.log("error en carga landing")
    }
}


const pintarTargetLanding = (dataLanding) =>{
    //console.log(dataLanding)

    dataLanding.forEach( element => {
        //console.log(element)
        templateCuadroLanding.querySelector("#btnLanding").dataset.idLanding = element.id
        templateCuadroLanding.querySelector("#contSectionPBox_title").textContent = element.title
        templateCuadroLanding.querySelector("#contSectionPBox_parrafo").textContent = element.descripcion
        templateCuadroLanding.querySelector("#imageLan").setAttribute("src", element.image)

        let cloneLanding = templateCuadroLanding.cloneNode(true)
        fragmentLanding.appendChild(cloneLanding)
    });
    contSectionP.appendChild(fragmentLanding)

    document.addEventListener("click", (e) =>{
        if(e.target.dataset.idLanding === "1"){
            location.href = "https://antonmarchitec.github.io/veterinaria_vip/"
        }else if(e.target.dataset.idLanding === "2"){
            location.href = "https://antonmarchitec.github.io/landing_page_modo_oscuro/"
        }else if(e.target.dataset.idLanding === "3"){
            location.href = "https://antonmarchitec.github.io/landing_restaurant_1/"
        }
    })



}