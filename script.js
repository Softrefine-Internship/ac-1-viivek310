let hamburger = document.getElementById("hamburger")
let nav = document.getElementById("navigation")
let chat = document.getElementById("chat")
let content = document.getElementById("content")

console.log(hamburger)
hamburger.addEventListener("click",()=>{
    nav.classList.toggle("closed")
})

chat.addEventListener("click",()=>{
    content.classList.toggle("chat-open")
})