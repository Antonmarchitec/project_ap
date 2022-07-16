let contSectionP = document.querySelector("#contSectionP")
let templateCuadroLanding = document.querySelector("#templateCuadroLanding").content
let fragmentLanding = document.createDocumentFragment()

document.addEventListener("DOMContentLoaded", () =>{
    dataFechLanding()
    dataFechLanding_10_18()
})


//DELEGACION DE EVENTOS PARA NUMERADORES
document.addEventListener("click", (e)=>{
    if(e.target.id === "lnum1"){
        contSectionP.textContent = dataFechLanding()        
    }else if(e.target.id === "lnum2"){
        contSectionP.textContent = dataFechLanding_10_18()   
    }
})


//FUNCION DATAFECH TARJETAS DEL 1 AL 9
const dataFechLanding = async () =>{
    try{
        const resLanding = await fetch("landing-templates.json")
        const dataLanding = await resLanding.json()
        pintarTargetLanding(dataLanding)

        document.addEventListener("click", (e)=>{
            if(e.target.id === "lnum1"){
                contSectionP.textContent = pintarTargetLanding(dataLanding) 
            }      
        })




    }catch(error){
        console.log("error en carga landing")
    }
}

const pintarTargetLanding = (dataLanding) =>{
    //console.log(dataLanding)

    dataLanding.landing_1_9.forEach(element => {
        //console.log(element)
        templateCuadroLanding.querySelector("#contSectionPBox_title").textContent = element.title
        templateCuadroLanding.querySelector("#contSectionPBox_parrafo").textContent = element.descripcion
        templateCuadroLanding.querySelector("#imageLan").setAttribute("src", element.image)
        templateCuadroLanding.querySelector("#imageLan").setAttribute("alt", element.title)
        templateCuadroLanding.querySelector("#btnLanding").dataset.btn = element.id


        let clone = templateCuadroLanding.cloneNode(true)
        fragmentLanding.appendChild(clone)
    });
    contSectionP.appendChild(fragmentLanding)

}




//FUNCION DATAFECH TARJETAS DEL 10 AL 18
const dataFechLanding_10_18 = async () =>{
    try{
        const resLanding_10_18 = await fetch("landing-templates.json")
        const dataLanding_10_18 = await resLanding_10_18.json()
        pintarTargetLanding_10_18(dataLanding_10_18)
       
        document.addEventListener("click", (e)=>{
            if(e.target.id === "lnum2"){
                contSectionP.textContent = pintarTargetLanding_10_18(dataLanding_10_18) 
            }      
        })


    }catch(error){
        console.log("error en carga landing")
    }
}

const pintarTargetLanding_10_18 = (dataLanding_10_18) =>{
    //console.log(dataLanding)

    dataLanding_10_18.landing_10_18.forEach( element => {
        //console.log(element)

        templateCuadroLanding.querySelector("#contSectionPBox_title").textContent = element.title
        templateCuadroLanding.querySelector("#contSectionPBox_parrafo").textContent = element.descripcion
        templateCuadroLanding.querySelector("#imageLan").setAttribute("src", element.image)
        templateCuadroLanding.querySelector("#imageLan").setAttribute("alt", element.title)
        templateCuadroLanding.querySelector("#btnLanding").dataset.btn = element.id

        clone_10_18 = templateCuadroLanding.cloneNode(true)
        fragmentLanding.appendChild(clone_10_18)
    });
    contSectionP.appendChild(fragmentLanding)

}


//DELEGACION DE EVENTOS PARA BOTONES
document.addEventListener("click", (e) =>{
    if(e.target.dataset.btn === "1"){
        location.href = "https://antonmarchitec.github.io/veterinaria_vip/"
    }else if(e.target.dataset.btn === "2"){
        location.href = "https://antonmarchitec.github.io/landing_page_modo_oscuro/"
    }else if(e.target.dataset.btn === "3"){
        location.href = "https://antonmarchitec.github.io/landing_restaurant_1/"
    }
})















