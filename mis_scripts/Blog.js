let contBlog = document.querySelector("#contBlog")


document.addEventListener("scroll", () =>{
    let positionScroll = document.documentElement.scrollTop
    console.log(positionScroll)
    let positionElementBlog = contBlog.offsetTop     //296
    console.log(positionElementBlog)


    if(positionScroll > positionElementBlog + 2000){
        contBlog.classList.add("contBlog_JS")
    }else if(positionScroll < 2400){
        contBlog.classList.remove("contBlog_JS")
    }
})

