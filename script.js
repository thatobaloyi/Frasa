window.addEventListener('scroll', ()=>{
    document.querySelector("nav").classList.toggle("win_scroll", window.scrollY > 100)
})

const menu = document.querySelector(".nav_menu")
const menuOpen = document.querySelector(".menu_open")
const menuClose = document.querySelector(".menu_close")

window.addEventListener("resize", myFunction);
function myFunction(){
    if(window.innerWidth < 1024){
        menuOpen.style.display = 'inline-block'
        menuClose.style.display = 'none'
    }

    if(window.innerWidth > 1024){
        menuOpen.style.display = 'none'
        menuClose.style.display = 'none'
    }
}

menuOpen.addEventListener('click', () => {
    let div = document.querySelector(".nav_menu")
    div.classList.toggle("trans")
    menuClose.style.display = 'inline-block'
    menuOpen.style.display = 'none'
})

const closeMenu = () =>{
    let div = document.querySelector(".nav_menu")
    div.classList.toggle("trans")
    menuClose.style.display = 'none'
    menuOpen.style.display = 'inline-block'
}

menuClose.addEventListener('click', closeMenu)



