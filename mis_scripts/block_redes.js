let block_redes = document.querySelector("#block_redes")
let contSkillls = document.querySelector("#habilidades")


window.document.addEventListener("scroll", () =>{
    const posScrolling = document.documentElement.scrollTop
    console.log(posScrolling)
     
    const posBlockRedes = block_redes.offsetTop    //100
    console.log(posBlockRedes)

    const posSkillls = contSkillls.offsetTop      //4510
    console.log(posSkillls) 

    if(posScrolling < posBlockRedes){
        block_redes.classList.remove("contRedes_js")
    }else if(posScrolling > posBlockRedes + 500){
        block_redes.classList.add("contRedes_js")
    }if(posScrolling > posSkillls){
        block_redes.classList.remove("contRedes_js")
    }

})