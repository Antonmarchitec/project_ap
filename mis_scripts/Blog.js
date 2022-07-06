let contBlog = document.querySelector("#contBlog")
let titleSkills = document.querySelector("#contacto")


    
document.addEventListener("scroll", () =>{
    let positionScroll = document.documentElement.scrollTop
    //console.log(positionScroll)
    let positionElementBlog = contBlog.offsetTop     //350
    //console.log(positionElementBlog)
    let titleSkillsPos = titleSkills.offsetTop   //2905
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

