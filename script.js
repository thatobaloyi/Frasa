window.addEventListener('scroll', ()=>{
    document.querySelector("nav").classList.toggle("win_scroll", window.scrollY > 100)
})

const menu = document.querySelector(".nav_menu")
const menuOpen = document.querySelector(".menu_open")
const menuClose = document.querySelector(".menu_close")

menuOpen.addEventListener('click', () => {
    menu.style.display = 'flex'
    menuOpen.style.display = 'none'
    menuClose.style.display = 'block'
    menuClose.style.backgroundColor = 'transparent'
    
})

menuClose.addEventListener('click', () => {
    menu.style.display = 'none'
    menuOpen.style.display = 'block'
    menuClose.style.display = 'none'
})


