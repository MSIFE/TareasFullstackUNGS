const navButton = document.getElementById("main");
const navMenu = document.getElementById("nav_main");


navButton.addEventListener("click", () =>{


    const navLogo = document.getElementById('logo');

    navMenu.classList.toggle('nav_container--active');


    if(navMenu.classList.contains
        ('nav_container--active')){
        navLogo.setAttribute('src', './img/blanco.png');
        navButton.setAttribute('src','././img/cruz.svg');
    }else{
        navLogo.setAttribute('src','/img/sin invertir.png');
        navButton.setAttribute('src','/img/menu-burger-horizontal-svgrepo-com.svg');

    }
})