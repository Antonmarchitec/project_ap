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

        pintarArticleBlog(dataArticle)


    }catch(error){
        console.log("Error carga article")
    }
}


const pintarArticleBlog = (dataArticle)=>{
    //console.log(dataArticle)

    dataArticle.forEach( article => {
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