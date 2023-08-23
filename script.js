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

// navigation menu
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


// services reveal
window.addEventListener('scroll', () =>{
    var reveal = document.querySelectorAll('.reveal')

    for(var i = 0; i < reveal.length; i++){
        var windowheight = window.innerHeight
        var revtop = reveal[i].getBoundingClientRect().top

        if(revtop < windowheight){
            reveal[i].classList.add('active')
        }else{
            reveal[i].classList.remove('active')
        }
    }
})

