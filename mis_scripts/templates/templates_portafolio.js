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


    //DELEGACION DE EVENTOS
    document.addEventListener("click", (e) =>{
        //console.log(e.target)
        if(e.target.dataset.idOjo === "dataImage1"){
            //window.open("./img/IMG_TEMPLATES/GAMER_TEMPLATE.jpg")
            // Crear el modal y sus elementos
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.style.cssText = `
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            background: rgba(8, 9, 31, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
            `;

            const imagenAmpliada = document.createElement('img');
            imagenAmpliada.src = "./img/IMG_TEMPLATES/GAMER_TEMPLATE.jpg"; // ✅ Aquí pones tu imagen grande
            imagenAmpliada.style.cssText = `
            margin-top:130px;
            max-width: 70%;
            max-height: 60%;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.5);
            animation: zoomIn 0.3s ease;
            `;

            const cerrar = document.createElement('span');
            cerrar.innerHTML = '&times;';
            cerrar.style.cssText = `
            position: absolute;
            top: 150px;
            left: calc(50% + 120px);
            font-size: 2rem;
            color: white;
            cursor: pointer;
            `;

            // Añadir elementos al modal
            modal.appendChild(cerrar);
            modal.appendChild(imagenAmpliada);
            document.body.appendChild(modal);

            // Evento para cerrar el modal
            cerrar.addEventListener('click', () => {
            document.body.removeChild(modal); // eliminar completamente
            });

            modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                document.body.removeChild(modal);
            }
            });
    
        


        }else if(e.target.dataset.idPhoto === "dataGitHub1"){
            window.open("https://github.com/Antonmarchitec/template_gamer.git")

        }else if(e.target.dataset.idOjo === "dataImage2"){
            //window.open("./img/IMG_TEMPLATES/FINANCIAL_TEMPLATE.jpg")
             // Crear el modal y sus elementos
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.style.cssText = `
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            background: rgba(8, 9, 31, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
            `;

            const imagenAmpliada = document.createElement('img');
            imagenAmpliada.src = "./img/IMG_TEMPLATES/FINANCIAL_TEMPLATE.jpg"; // ✅ Aquí pones tu imagen grande
            imagenAmpliada.style.cssText = `
            margin-top:130px;
            max-width: 70%;
            max-height: 60%;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.5);
            animation: zoomIn 0.3s ease;
            `;

            const cerrar = document.createElement('span');
            cerrar.innerHTML = '&times;';
            cerrar.style.cssText = `
            position: absolute;
            top: 150px;
            left: calc(50% + 120px);
            font-size: 2rem;
            color: white;
            cursor: pointer;
            `;

            // Añadir elementos al modal
            modal.appendChild(cerrar);
            modal.appendChild(imagenAmpliada);
            document.body.appendChild(modal);

            // Evento para cerrar el modal
            cerrar.addEventListener('click', () => {
            document.body.removeChild(modal); // eliminar completamente
            });

            modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                document.body.removeChild(modal);
            }
            });
            
        }else if(e.target.dataset.idPhoto === "dataGitHub2"){
            window.open("https://github.com/Antonmarchitec/template_financial.git")
            
        }else if(e.target.dataset.idOjo === "dataImage3"){
            //window.open("./img/IMG_TEMPLATES/RESTAURANT-TEMPLATE.jpg")
              // Crear el modal y sus elementos
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.style.cssText = `
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            background: rgba(8, 9, 31, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
            `;

            const imagenAmpliada = document.createElement('img');
            imagenAmpliada.src = "./img/IMG_TEMPLATES/RESTAURANT-TEMPLATE.jpg"; // ✅ Aquí pones tu imagen grande
            imagenAmpliada.style.cssText = `
            margin-top:130px;
            max-width: 70%;
            max-height: 60%;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.5);
            animation: zoomIn 0.3s ease;
            `;

            const cerrar = document.createElement('span');
            cerrar.innerHTML = '&times;';
            cerrar.style.cssText = `
            position: absolute;
            top: 150px;
            left: calc(50% + 120px);
            font-size: 2rem;
            color: white;
            cursor: pointer;
            `;

            // Añadir elementos al modal
            modal.appendChild(cerrar);
            modal.appendChild(imagenAmpliada);
            document.body.appendChild(modal);

            // Evento para cerrar el modal
            cerrar.addEventListener('click', () => {
            document.body.removeChild(modal); // eliminar completamente
            });

            modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                document.body.removeChild(modal);
            }
            });
           
        }else if(e.target.dataset.idPhoto === "dataGitHub3"){
            window.open("https://github.com/Antonmarchitec/landing_resposteria.git")

        }else if(e.target.dataset.idOjo === "dataImage4"){
            //window.open("./img/IMG_TEMPLATES/TIENDA_ROPA.jpg")
              // Crear el modal y sus elementos
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.style.cssText = `
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            background: rgba(8, 9, 31, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
            `;

            const imagenAmpliada = document.createElement('img');
            imagenAmpliada.src = "./img/IMG_TEMPLATES/TIENDA_ROPA.jpg"; // ✅ Aquí pones tu imagen grande
            imagenAmpliada.style.cssText = `
            margin-top:130px;
            max-width: 70%;
            max-height: 60%;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.5);
            animation: zoomIn 0.3s ease;
            `;

            const cerrar = document.createElement('span');
            cerrar.innerHTML = '&times;';
            cerrar.style.cssText = `
            position: absolute;
            top: 150px;
            left: calc(50% + 120px);
            font-size: 2rem;
            color: white;
            cursor: pointer;
            `;

            // Añadir elementos al modal
            modal.appendChild(cerrar);
            modal.appendChild(imagenAmpliada);
            document.body.appendChild(modal);

            // Evento para cerrar el modal
            cerrar.addEventListener('click', () => {
            document.body.removeChild(modal); // eliminar completamente
            });

            modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                document.body.removeChild(modal);
            }
            });
            
        }else if(e.target.dataset.idPhoto === "dataGitHub4"){
            window.open("https://github.com/Antonmarchitec/fashion__template.git")

        }else if(e.target.dataset.idOjo === "dataImage5"){
            //window.open("./img/IMG_TEMPLATES/VISITTOKIO-TEMPLATE.jpg")
              // Crear el modal y sus elementos
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.style.cssText = `
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            background: rgba(8, 9, 31, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
            `;

            const imagenAmpliada = document.createElement('img');
            imagenAmpliada.src = "./img/IMG_TEMPLATES/VISITTOKIO-TEMPLATE.jpg"; // ✅ Aquí pones tu imagen grande
            imagenAmpliada.style.cssText = `
            margin-top:130px;
            max-width: 70%;
            max-height: 60%;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.5);
            animation: zoomIn 0.3s ease;
            `;

            const cerrar = document.createElement('span');
            cerrar.innerHTML = '&times;';
            cerrar.style.cssText = `
            position: absolute;
            top: 150px;
            left: calc(50% + 120px);
            font-size: 2rem;
            color: white;
            cursor: pointer;
            `;

            // Añadir elementos al modal
            modal.appendChild(cerrar);
            modal.appendChild(imagenAmpliada);
            document.body.appendChild(modal);

            // Evento para cerrar el modal
            cerrar.addEventListener('click', () => {
            document.body.removeChild(modal); // eliminar completamente
            });

            modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                document.body.removeChild(modal);
            }
            });
          
        }else if(e.target.dataset.idPhoto === "dataGitHub5"){
            window.open("https://github.com/Antonmarchitec/template_visit-tokio.git")

        }else if(e.target.dataset.idOjo === "dataImage6"){
            //window.open("./img/IMG_TEMPLATES/RESTAURANT-TEMPLATE2.jpg")
              // Crear el modal y sus elementos
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.style.cssText = `
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            background: rgba(8, 9, 31, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
            `;

            const imagenAmpliada = document.createElement('img');
            imagenAmpliada.src = "./img/IMG_TEMPLATES/RESTAURANT-TEMPLATE2.jpg"; // ✅ Aquí pones tu imagen grande
            imagenAmpliada.style.cssText = `
            margin-top:130px;
            max-width: 70%;
            max-height: 60%;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.5);
            animation: zoomIn 0.3s ease;
            `;

            const cerrar = document.createElement('span');
            cerrar.innerHTML = '&times;';
            cerrar.style.cssText = `
            position: absolute;
            top: 150px;
            left: calc(50% + 120px);
            font-size: 2rem;
            color: white;
            cursor: pointer;
            `;

            // Añadir elementos al modal
            modal.appendChild(cerrar);
            modal.appendChild(imagenAmpliada);
            document.body.appendChild(modal);

            // Evento para cerrar el modal
            cerrar.addEventListener('click', () => {
            document.body.removeChild(modal); // eliminar completamente
            });

            modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                document.body.removeChild(modal);
            }
            });
           
        }else if(e.target.dataset.idPhoto === "dataGitHub6"){
            window.open("https://github.com/Antonmarchitec/landing_restaurant.git")
        }
    })
}
