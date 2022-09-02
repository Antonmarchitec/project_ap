let template_target = document.querySelector("#template_target").content
let contSectionCards = document.querySelector("#contSectionCards")
let fragmentTarjets = document.createDocumentFragment()



document.addEventListener("DOMContentLoaded", () =>{
    dataFech()
})
  




//////////////////////////////////////////////////////////////////
//Llamada para las targetas 1-9///////////////////////////////////
const dataFech = async ()=>{
    try{
        const resCard1_9 = await fetch("tarejtas-retos.json")
        const dataCard = await resCard1_9.json()
        pintarCards1_6(dataCard)

        document.addEventListener("click", (e) =>{
            if(e.target.id === "number1"){
                console.log("click en uno")
                contSectionCards.textContent = pintarCards1_6(dataCard)
                pintarCards1_6(dataCard)
            }else if(e.target.id === "number2"){
                console.log("click en dos")
                contSectionCards.textContent = pintarCards7_12(dataCard)
                pintarCards7_12(dataCard)
            }else if(e.target.id === "number3"){
                console.log("click en tres")
                contSectionCards.textContent = pintarCards13_18(dataCard)
                pintarCards13_18(dataCard)
            }else if(e.target.id === "number4"){
                console.log("click en cuatro")
                contSectionCards.textContent = pintarCards19_24(dataCard)
                pintarCards19_24(dataCard)
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

        template_target.querySelector("#techHTML").textContent = element.tech_html
        template_target.querySelector("#techCSS").textContent = element.tech_css
        template_target.querySelector("#techJS").textContent = element.tech_js



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

        template_target.querySelector("#techHTML").textContent = element2.tech_html
        template_target.querySelector("#techCSS").textContent = element2.tech_css
        template_target.querySelector("#techJS").textContent = element2.tech_js
        
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
        }else if(e.target.dataset.idLive === "11"){
            //console.log("me diste en live 1")
            location.href = "https://antonmarchitec.github.io/Clipboard_landing-_page/"

        }else if(e.target.dataset.idGit === "12"){
            //console.log("me diste en live 1")
            location.href = "https://github.com/Antonmarchitec/Product_preview_card_component.git"

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

        template_target.querySelector("#techHTML").textContent = element2.tech_html
        template_target.querySelector("#techCSS").textContent = element2.tech_css
        template_target.querySelector("#techJS").textContent = element2.tech_js
        
        let clone2 = template_target.cloneNode(template_target)
        fragmentTarjets.appendChild(clone2)
    })
    contSectionCards.appendChild(fragmentTarjets)

    document.addEventListener("click", (e) =>{
        if(e.target.dataset.idGit === "13"){
            //console.log("me diste en live 1")
            location.href = "https://github.com/Antonmarchitec/Seccion_cuadricula_testimonios.git"
        }else if(e.target.dataset.idLive === "13"){
            //console.log("me diste en live 1")
            location.href = "https://antonmarchitec.github.io/Seccion_cuadricula_testimonios/"
        }else if(e.target.dataset.idGit === "14"){
            //console.log("me diste en live 1")
            location.href = "https://github.com/Antonmarchitec/App_generadora_consejos.git"
        }else if(e.target.dataset.idLive === "14"){
            //console.log("me diste en live 1")
            location.href = "https://antonmarchitec.github.io/App_generadora_consejos/"
        }else if(e.target.dataset.idGit === "15"){
            location.href = "https://github.com/Antonmarchitec/ComponentePrecioUnico.git"
        }else if(e.target.dataset.idLive === "15"){
            location.href = "https://antonmarchitec.github.io/ComponentePrecioUnico/"
        }else if(e.target.dataset.idGit === "16"){
            location.href = "https://github.com/Antonmarchitec/ComponenteAlmacenamientoDatosfylo.git"
        }else if(e.target.dataset.idLive === "16"){
            location.href = "https://antonmarchitec.github.io/ComponenteAlmacenamientoDatosfylo/"
        }else if(e.target.dataset.idGit === "17"){
            location.href = "https://github.com/Antonmarchitec/Pagina_fylo_con_diseno_de_coumnas.git"
        }else if(e.target.dataset.idLive === "17"){
            location.href = "https://antonmarchitec.github.io/Pagina_fylo_con_diseno_de_coumnas/"
        }else if(e.target.dataset.idGit === "18"){
            location.href = "https://github.com/Antonmarchitec/pagina-inicio-con-secciones-curvas.git"
        }else if(e.target.dataset.idLive === "18"){
            location.href = "https://antonmarchitec.github.io/pagina-inicio-con-secciones-curvas/"
        }
    })
}


const pintarCards19_24 = (dataCard19_24) =>{
    //console.log(data.retos10_18)
    dataCard19_24.retos19_24.forEach( element2 =>{
        //console.log(element2)
        template_target.querySelector("#titleTarget").textContent = element2.title
        template_target.querySelector("#description").textContent = element2.descripcion
        template_target.querySelector("img").setAttribute("src", element2.imagen)
        template_target.querySelector("img").setAttribute("alt", element2.title)
        template_target.querySelector("#git").dataset.idGit = element2.idGit
        template_target.querySelector("#live").dataset.idLive = element2.idLive

        template_target.querySelector("#techHTML").textContent = element2.tech_html
        template_target.querySelector("#techCSS").textContent = element2.tech_css
        template_target.querySelector("#techJS").textContent = element2.tech_js
        
        let clone2 = template_target.cloneNode(template_target)
        fragmentTarjets.appendChild(clone2)
    })
    contSectionCards.appendChild(fragmentTarjets)

    document.addEventListener("click", (e) =>{
        if(e.target.dataset.idGit === "19"){
            //console.log("me diste en live 1")
            location.href = "https://github.com/Antonmarchitec/Componente_de_calificacion_interactivo.git"
        }else if(e.target.dataset.idLive === "19"){
            location.href = "https://antonmarchitec.github.io/Componente_de_calificacion_interactivo/"
        }else if(e.target.dataset.idGit === "20"){
            location.href = "https://github.com/Antonmarchitec/Pagina_inicio_tema_oscuro_fylo.git"
        }else if (e.target.dataset.idLive === "20"){
            location.href = "https://antonmarchitec.github.io/Pagina_inicio_tema_oscuro_fylo/"
        }
    })
}