window.addEventListener('scroll', ()=>{
    var nav = document.querySelector("nav")
    let scrollTop = document.documentElement.scrollTop
    if(scrollTop > 10){
        nav.style.opacity = 0 + scrollTop / 250;
    }else{
        nav.style.opacity = 1;
    }
})


const menuOpen = document.querySelector(".menu_open")
const menuClose = document.querySelector(".menu_close")
const menu = document.querySelector(".nav_menu")
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
    document.querySelector(".nav_menu").classList.toggle("trans")
    menuClose.style.display = 'inline-block'
    menuOpen.style.display = 'none'
})

const closeMenu = () =>{
    document.querySelector(".nav_menu").classList.toggle("trans")
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
        if(revtop < windowheight + 20){
            reveal[i].classList.add('active')
        }else{
            reveal[i].classList.remove('active')
        }
    }
})



window.addEventListener('scroll', () =>{
    var reveal = document.querySelectorAll('.reveal')

    for(var i = 0; i < reveal.length; i++){
        var windowheight = window.innerHeight
        var bottom = reveal[i].getBoundingClientRect().bottom

        if(bottom < windowheight){
            reveal[i].style.opacity = 0 + bottom / 500
        }
    }
})


const questions = document.querySelectorAll('.question')

questions.forEach(question =>{
    question.addEventListener('click', () =>{
        question.classList.toggle('open')

        const icon = question.querySelector('.question_icon i')

        if(icon.className == 'uil uil-angle-down'){
            icon.className = 'uil uil-angle-up'
        }else{
            icon.className = 'uil uil-angle-down'
        }

    })
})