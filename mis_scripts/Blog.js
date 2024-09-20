let contBlog = document.querySelector("#contBlog")
let titleSkills = document.querySelector("#contacto")


    
document.addEventListener("scroll", () =>{
    let positionScroll = document.documentElement.scrollTop
    //console.log(positionScroll)
    let positionElementBlog = contBlog.offsetTop
    //console.log(positionElementBlog)
    let titleSkillsPos = titleSkills.offsetTop
    //console.log(titleSkills)

    if(positionScroll < positionElementBlog ){
        contBlog.classList.remove("contBlog_JS")
        //console.log("desaparece")
    }
    else if(positionScroll > positionElementBlog){
        contBlog.classList.add("contBlog_JS")
        //console.log("aparece")

    }if(positionScroll > titleSkillsPos){
        contBlog.classList.remove("contBlog_JS")
        //console.log("desaparecer de nuevo")  
    }
})

