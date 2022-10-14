const menu = document.querySelector('#menu');
const menuIcon = document.querySelector('#menu-icon');

function showMenu(){
    menu.classList.toggle('show')
    changeMenuIcon()
}

menuIcon.addEventListener('click',showMenu)

function changeMenuIcon(){
    if(menu.classList.contains('show')){
        menuIcon.src = "assets/images/iconCloseMenu.svg";
        menuIcon.title = "Fechar menu";
    }
    else{
        menuIcon.src = "assets/images/iconMenu.svg";
        menuIcon.title = "Abrir menu";
    }
}

addEventListener('resize',changeMenuIcon)