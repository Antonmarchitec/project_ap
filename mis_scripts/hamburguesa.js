
  //ESTE DOCUMENTO FUE CREADO EN EL VIDEO
  
  
  // Look for .hamburger
  //var contEnlaces = document.getElementById("menuenlaces");
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });