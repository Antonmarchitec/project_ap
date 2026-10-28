
const menuBtn = document.querySelector("#menu-btn");
const headerMenu = document.querySelector("#header-menu");

menuBtn.addEventListener("click", () => {
    const isOpen = headerMenu.classList.toggle("open");

    menuBtn.classList.toggle("active", isOpen);
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
    );
});

headerMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        headerMenu.classList.remove("open");
        menuBtn.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Abrir menú");
    });
});
