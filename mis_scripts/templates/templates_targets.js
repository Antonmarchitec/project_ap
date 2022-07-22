let template_target = document.querySelector("#template_target").content
let contSectionCards = document.querySelector("#contSectionCards")
let fragmentTarjets = document.createDocumentFragment()



document.addEventListener("DOMContentLoaded", () =>{
    dataFechRetos1_6()
})
  




//////////////////////////////////////////////////////////////////
//Llamada para las targetas 1-9///////////////////////////////////
const dataFechRetos1_6 = async ()=>{
    try{
        const resCard1_9 = await fetch("tarejtas-retos.json")
        const dataCard1_9 = await resCard1_9.json()
        pintarCards1_6(dataCard1_9)

        document.addEventListener("click", (e) =>{
            if(e.target.id === "number1"){
                console.log("click en uno")
                contSectionCards.textContent = pintarCards1_6(dataCard1_9)
                pintarCards1_6(dataCard1_9)
            }else if(e.target.id === "number2"){
                console.log("click en dos")
                contSectionCards.textContent = pintarCards7_12(dataCard1_9)
                pintarCards7_12(dataCard1_9)
            }else if(e.target.id === "number3"){
                console.log("click en tres")
                contSectionCards.textContent = pintarCards13_18(dataCard1_9)
                pintarCards13_18(dataCard1_9)
            }
        })
       

    }catch(error){
        console.log("error al cargar tarjetas del 1 al 9")
    }
}

const pintarCards1_6 = (dataCard1_9) =>{
     //console.log(data)
     dataCard1_9.retos1_9.forEach( element =>{
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
     contSectionCards.appendChild(fragmentTarjets)  


    //ACA EJECUTO LOS EVENTOS DE ICONOS
    document.addEventListener("click", (e) =>{
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
        }
        
        
    })
    
}


const pintarCards7_12 = (dataCard10_18) =>{
    //console.log(data.retos10_18)
    dataCard10_18.retos10_18.forEach( element2 =>{
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
    contSectionCards.appendChild(fragmentTarjets)


    document.addEventListener("click", (e) =>{
        if(e.target.dataset.idGit === "7"){
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
        }else if(e.target.dataset.idGit === "10"){
            //console.log("me diste en git 1")
            location.href = "https://github.com/Antonmarchitec/Huddle-landing-page.git"
        }else if(e.target.dataset.idLive === "10"){
            //console.log("me diste en live 1")
            location.href = "https://antonmarchitec.github.io/Huddle-landing-page/"
        }else if(e.target.dataset.idGit === "11"){
            //console.log("me diste en live 1")
            location.href = "https://github.com/Antonmarchitec/Clipboard_landing-_page.git"
        }else if(e.target.dataset.idLive === "12"){
            //console.log("me diste en live 1")
            location.href = "https://antonmarchitec.github.io/Product_preview_card_component/"
        }
        
    })
}


const pintarCards13_18 = (dataCard13_18) =>{
    //console.log(data.retos10_18)
    dataCard13_18.retos13_18.forEach( element2 =>{
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
    contSectionCards.appendChild(fragmentTarjets)


    /*
    else if(e.target.dataset.idGit === "13"){
            //console.log("me diste en live 1")
            location.href = "https://github.com/Antonmarchitec/Seccion_cuadricula_testimonios.git"
        }else if(e.target.dataset.idLive === "13"){
            //console.log("me diste en live 1")
            location.href = "https://antonmarchitec.github.io/Seccion_cuadricula_testimonios/"
        }*/ 
}