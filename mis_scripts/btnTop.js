let btnTop = document.getElementById("iconTop");

window.addEventListener("scroll", () =>{
    let positionScroll = document.documentElement.scrollTop;
    //console.log(positionScroll);
    let positionElement = btnTop.offsetTop;

    if(positionScroll > positionElement + 300){
        btnTop.classList.add("iconTopJS")
    }else{
        btnTop.classList.remove("iconTopJS");
    }
    
})