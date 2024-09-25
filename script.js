let hamburger = document.getElementById("hamburger")
let nav = document.getElementById("navigation")

console.log(hamburger)
hamburger.addEventListener("click",()=>{
    nav.classList.toggle("closed")
})