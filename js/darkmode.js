const wrapper = document.querySelector('.wrapper');
const switchMode = document.querySelector('.switchMode')
const moon = document.querySelector('.fa-moon')
const sun = document.querySelector('.fa-sun')

switchMode.addEventListener('click', () => {
    wrapper.classList.toggle('dark')
    moon.classList.toggle('visible')
    sun.classList.toggle('visible')
})
