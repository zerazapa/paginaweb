// Selecciona todos los eventos con la clase "nav-link".
const navLink= document.querySelectorAll(".nav-link");

// Itera los items del nav y les añade el evento "click".
navLink.forEach((item)=>item.addEventListener("click",navOnClick))

/**
* Añade la clase "active" solo al elemento clickeado.
*/
function navOnClick(){
    let section= document.getElementById(this.href.split("#")[1])      //
    navLink.forEach((item)=>item.classList.remove("active"))
    this.classList.add("active")
    console.log(this.href.split("#"))
    section.classList.add("highlight")
    setTimeout(() => {
        section.classList.remove("highlight");
    }, 1000);
}