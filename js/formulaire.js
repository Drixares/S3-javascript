'use strict';

const wrapper = document.getElementById('wrapper');
const color = document.getElementById('color');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('.infosInput')
const formName = document.getElementById('name');
const formEmail = document.getElementById('email');
const formPassword = document.getElementById('password')
const erreur = document.querySelector('.error');
const boxFormulaire = document.querySelector('.box-formulaire')

// Fonction qui gère la nouvelle interface après l'envoi du formulaire
// Agit différemment en fonction du titre de la page
function nouvelleInterface(nom, email) {
    if (document.title == "Register") {
        boxFormulaire.innerHTML = `
        <h1>Enregistrement réussi !</h1>
        <p> Nom enregistré : ${nom} <br> Email enregistré : ${email}</p>
        <a href="index.html" class="goToIndex">Home</a>
        `
    } else {
        boxFormulaire.innerHTML = `
        <h1>Connexion réussi !</h1>
        <p>Email : ${email}</p>
        <a href="index.html" class="goToIndex">Home</a>
        `
    }
    document.title = "Succesfull connection"

    boxFormulaire.classList.add('post')
}


// Fonction qui vérifie l'email avec un regex dédié aux emails
function verifyEmail(input, email) {
    const regEx =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEx.test(email)) {
        input.style.borderBottom = '2px solid green'
        return true
    } else {
        input.style.borderBottom = '2px solid var(--color-error)'
        return false
    }
}


// Même chose que la fonction avec l'email mais avec un regex différent pour le mot de passe.
function verifyPassword(input, password) {
    const regEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-])/;

    if (regEx.test(password)) {
        input.style.borderBottom = '2px solid green'
        erreur.style.display = "none"
        return true
    } else {
        input.style.borderBottom = '2px solid var(--color-error)'
        erreur.textContent = 
            `Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre
            et un caractère spécial.`
        erreur.style.display = 'block';
        return false
    }
}

function verifyName(input, name) {
    const regEx = /^\S/;

    if (regEx.test(name)) {
        input.style.borderBottom = '2px solid green'
        erreur.style.display = "none"
        return true
    } else {
        input.style.borderBottom = '2px solid var(--color-error)'
        erreur.textContent = 
            `Le nom ne peut pas être vide.`
        erreur.style.display = 'block';
        return false
    }
}

// Evènement d'envoi du formulaire 
form.addEventListener('submit', e => {
    e.preventDefault()

    // l'existence de formName permet de savoir si c'est l'inscription ou le login.
    // la condition agit donc en fonction de si c'est l'inscription ou le login
    if (formName ? formName.value : true && verifyEmail && verifyPassword) { 
        form.remove()
        nouvelleInterface(formName ? formName.value : "name", formEmail.value)
    } else {
        erreur.textContent = "Le formulaire est mal rempli.";
        erreur.style.display = 'block';
    }
})

// Pour chaque input, je leur assigne un évènement input.
// Permet de vérifier en temps réel si ils sont corrects.
inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (!input.value) {
            input.style.borderBottom = '2px solid var(--color-error)'
        } else {
            if (input.name == "email") {verifyEmail(input, input.value)}
            else if (input.name == "password") {verifyPassword(input, input.value)}
            else if (input.name == "name") {verifyName(input, input.value)}
             
        }
    })
});