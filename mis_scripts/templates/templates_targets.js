let template_target = document.querySelector("#template_target").content
let contSectionCuadros = document.querySelector("#contSectionCuadros")

let fragmentTarjets = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", ()=>{
    dataFechTarget()
})




//////////////////////////////////////////////////////////////////
//Llamada para las targetas 1-9///////////////////////////////////
const dataFechTarget = async ()=>{
    try{
        const res = await fetch("tarejtas-retos.json")
        const data = await res.json()
        //console.log(data)
        pintarTarjetas(data)
       
    }catch(error){
        console.log("error al cargar tarjetas del 1 al 9")
    }
}
const pintarTarjetas = (data) =>{
     //console.log(data)
     data.retos1_9.forEach( element =>{
        //console.log(element)
        template_target.querySelector("#titleTarget").textContent = element.title
        template_target.querySelector("#description").textContent = element.descripcion
        template_target.querySelector("img").setAttribute("src", element.imagen)
        template_target.querySelector("img").setAttribute("alt", element.title)
        template_target.querySelector("#git").dataset.idGit = element.idGit
        template_target.querySelector("#live").dataset.idLive = element.idLive

        let cloneTarget = template_target.cloneNode(true)
        fragmentTarjets.appendChild(cloneTarget)
     }) 
     contSectionCuadros.appendChild(fragmentTarjets)  

    //ACA EJECUTO LOS EVENTOS DE ICONOS
    window.document.addEventListener("click", (e) =>{
        if(e.target.dataset.idGit === "1"){
            //console.log("me diste en git 1")
            location.href = "https://github.com/Antonmarchitec/Secci-n-de-prueba-social.git"
        }else if(e.target.dataset.idLive === "1"){
            //console.log("me diste en live 1")
            location.href = "https://antonmarchitec.github.io/Secci-n-de-prueba-social/"
        }else if(e.target.dataset.idGit === "2"){
            //console.log("me diste en live 1")
            location.href = "https://github.com/Antonmarchitec/secci-n-de-funciones-de-cuatro-cartas.git"
        }else if(e.target.dataset.idLive === "2"){
            //console.log("me diste en live 1")
            location.href = "https://antonmarchitec.github.io/secci-n-de-funciones-de-cuatro-cartas/"
        }else if(e.target.dataset.idGit === "3"){
            //console.log("me diste en live 1")
            location.href = "https://github.com/Antonmarchitec/Tarjetas_de_presentacion_clientes.git"
        }else if(e.target.dataset.idLive === "3"){
            //console.log("me diste en live 1")
            location.href = "https://antonmarchitec.github.io/Tarjetas_de_presentacion_clientes/"
        }else if(e.target.dataset.idGit === "4"){
            //console.log("me diste en live 1")
            location.href = "https://github.com/Antonmarchitec/Tarjeta_columnas.git"
        }else if(e.target.dataset.idLive === "4"){
            //console.log("me diste en live 1")
            location.href = "https://antonmarchitec.github.io/Tarjeta_columnas/"
        }else if(e.target.dataset.idGit === "5"){
            //console.log("me diste en live 1")
            location.href = "https://github.com/Antonmarchitec/P-gina-de-destino-de-Huddle.git"
        }else if(e.target.dataset.idLive === "5"){
            //console.log("me diste en live 1")
            location.href = "https://antonmarchitec.github.io/P-gina-de-destino-de-Huddle/"
        }else if(e.target.dataset.idGit === "6"){
            //console.log("me diste en live 1")
            location.href = "https://github.com/Antonmarchitec/desafio_tarjeta_estadisticas.git"
        }else if(e.target.dataset.idLive === "6"){
            //console.log("me diste en live 1")
            location.href = "https://antonmarchitec.github.io/desafio_tarjeta_estadisticas/"
        }else if(e.target.dataset.idGit === "7"){
            //console.log("me diste en live 1")
            location.href = "https://github.com/Antonmarchitec/POKEAPI.git"
        }else if(e.target.dataset.idLive === "7"){
            //console.log("me diste en live 1")
            location.href = "https://antonmarchitec.github.io/POKEAPI/"
        }else if(e.target.dataset.idGit === "8"){
            //console.log("me diste en live 1")
            location.href = "https://github.com/Antonmarchitec/Tablero_de_control_de_tiempo.git"
        }else if(e.target.dataset.idLive === "8"){
            //console.log("me diste en live 1")
            location.href = "https://antonmarchitec.github.io/Tablero_de_control_de_tiempo/"
        }else if(e.target.dataset.idGit === "9"){
            //console.log("me diste en live 1")
            location.href = "https://github.com/Antonmarchitec/Turismo_espacial.git"
        }else if(e.target.dataset.idLive === "9"){
            //console.log("me diste en live 1")
            location.href = "https://antonmarchitec.github.io/Turismo_espacial/"
        }
        
        
        
    })
    
}
//////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////
//Llamada para los targetas 10 - 18/////////////////////////////////
const dataFechTarget2 = async () =>{
    try{
        const res2 = await fetch("tarejtas-retos.json")
        const data2 = await res2.json()
        pintarTarjetas2(data2)

        
    }catch(error){
        console.log("error al cargar tarjetas del 10 al 18")
    }
}
const pintarTarjetas2 = (data) =>{
    console.log(data.retos10_18)
    data.retos10_18.forEach( element2 =>{
        //console.log(element2)
        template_target.querySelector("#titleTarget").textContent = element2.title
        template_target.querySelector("#description").textContent = element2.descripcion
        template_target.querySelector("img").setAttribute("src", element2.imagen)
        template_target.querySelector("img").setAttribute("alt", element2.title)
        template_target.querySelector("#git").dataset.idGit = element2.idGit
        template_target.querySelector("#live").dataset.idLive = element2.idLive
        
        let clone2 = template_target.cloneNode(template_target)
        fragmentTarjets.appendChild(clone2)
    })
    contSectionCuadros.appendChild(fragmentTarjets)

    window.document.addEventListener("click", (e) =>{
        if(e.target.dataset.idGit === "10"){
            //console.log("me diste en git 1")
            location.href = "https://github.com/Antonmarchitec/Huddle-landing-page.git"
        }else if(e.target.dataset.idLive === "10"){
            //console.log("me diste en live 1")
            location.href = "https://antonmarchitec.github.io/Huddle-landing-page/"
        }else if(e.target.dataset.idGit === "11"){
            //console.log("me diste en live 1")
            location.href = "https://github.com/Antonmarchitec/Clipboard_landing-_page.git"
        }else if(e.target.dataset.idLive === "11"){
            //console.log("me diste en live 1")
            location.href = "https://antonmarchitec.github.io/Clipboard_landing-_page/"
        }
    })
}
////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////
//////////////LLAMADAS DESDE NUMEROS/////////////////
document.addEventListener("click", (e)=>{
    if(e.target.id === "num1"){
        const data1 = dataFechTarget()
        contSectionCuadros.textContent = data1

    }else if(e.target.id === "num2"){
        contSectionCuadros.textContent = dataFechTarget2()

    }
})