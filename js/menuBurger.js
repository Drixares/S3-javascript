const burger = document.querySelector(".burger")
const croix = document.querySelector('.croix')
const menuBurger = document.querySelector('.menuBurger')
const linksBurger = document.querySelectorAll('.linkBurger')

burger.addEventListener('click', () => {
    menuBurger.classList.add('visible')

    // Corrige un bug qui permet d'accéder au menu burger en allant chercher les 
    // liens avec la tabulation
    linksBurger.forEach(link => {
        link.setAttribute('tabindex', "1")
    });

})

croix.addEventListener('click', () => {
    menuBurger.classList.remove('visible')

    linksBurger.forEach(link => {
        link.setAttribute('tabindex', "-1")
    });
})
