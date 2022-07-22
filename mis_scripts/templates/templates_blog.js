let contBlogBloggersBase = document.querySelector("#contBlogBloggersBase")
let template_article = document.querySelector("#template_article").content
let fragmentArticle = document.createDocumentFragment()



document.addEventListener("DOMContentLoaded", () =>{
    dataFechArticle()
})


const dataFechArticle = async ()=>{
    try{
        const resArticle = await fetch("blogArticle.json")
        const dataArticle = await resArticle.json()
        pintarArticleBlog_1_7(dataArticle)

        document.addEventListener("click", (e) =>{
            if(e.target.id === "numBlogUno"){
                contBlogBloggersBase.textContent = pintarArticleBlog_1_7(dataArticle)
                pintarArticleBlog_1_7(dataArticle)
                console.log("le diste a uno")
            }else if(e.target.id === "numBlogdos"){
                contBlogBloggersBase.textContent = pintarArticleBlog_8_14(dataArticle)
                pintarArticleBlog_8_14(dataArticle)
                console.log("le diste a dos")
            }else if(e.target.id === "numBlogtres"){
                contBlogBloggersBase.textContent = pintarArticleBlog_15_21(dataArticle)
                pintarArticleBlog_15_21(dataArticle)
                console.log("le diste a tres")
            }
        })

    }catch(error){
        console.log("Error carga article")
    }
}


const pintarArticleBlog_1_7 = (dataArticle)=>{
    //console.log(dataArticle.blog_1_7)

    dataArticle.blog_1_7.forEach( article => {
        //console.log(article.id)
        template_article.querySelector("#titleBlog").textContent = article.title
        template_article.querySelector("#parrafoBlog").textContent = article.descripcion
        template_article.querySelector("#imgBlog").setAttribute("src",article.imagen)
        template_article.querySelector("#imgBlog").setAttribute("alt",article.title)
        template_article.querySelector("#btnBlog").dataset.idBlog = article.id

        let cloneBlog = template_article.cloneNode(true)
        fragmentArticle.appendChild(cloneBlog)
    });
    contBlogBloggersBase.appendChild(fragmentArticle)

}


const pintarArticleBlog_8_14 = (dataArticle)=>{
    //console.log(dataArticle.blog_1_7)

    dataArticle.blog_8_14.forEach( article => {
        //console.log(article.id)
        template_article.querySelector("#titleBlog").textContent = article.title
        template_article.querySelector("#parrafoBlog").textContent = article.descripcion
        template_article.querySelector("#imgBlog").setAttribute("src",article.imagen)
        template_article.querySelector("#imgBlog").setAttribute("alt",article.title)
        template_article.querySelector("#btnBlog").dataset.idBlog = article.id

        let cloneBlog = template_article.cloneNode(true)
        fragmentArticle.appendChild(cloneBlog)
    });
    contBlogBloggersBase.appendChild(fragmentArticle)

}

const pintarArticleBlog_15_21 = (dataArticle)=>{
    //console.log(dataArticle.blog_1_7)

    dataArticle.blog_15_21.forEach( article => {
        //console.log(article.id)
        template_article.querySelector("#titleBlog").textContent = article.title
        template_article.querySelector("#parrafoBlog").textContent = article.descripcion
        template_article.querySelector("#imgBlog").setAttribute("src",article.imagen)
        template_article.querySelector("#imgBlog").setAttribute("alt",article.title)
        template_article.querySelector("#btnBlog").dataset.idBlog = article.id

        let cloneBlog = template_article.cloneNode(true)
        fragmentArticle.appendChild(cloneBlog)
    });
    contBlogBloggersBase.appendChild(fragmentArticle)

}