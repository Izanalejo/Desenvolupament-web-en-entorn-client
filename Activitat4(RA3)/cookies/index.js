

let b1 = document.getElementById('btn1')
let b2 = document.getElementById('btn2')
let borrar = document.getElementById('esborrar1')
let llistarCookies = document.getElementById('llistar')

let local = document.getElementById('localSt')
let session = document.getElementById('sessionSt')
let borrarStorage = document.getElementById('borrarStorage')
let mostrarStorage = document.getElementById('mostrarStorage')

//CREAR COOKIES 
b1.addEventListener("click", () => {
    document.cookie = "nom = Izan; max-age= 3600";
});

b2.addEventListener("click", () => {
    document.cookie = "nom2 = Alejo;"; //No té max-age per tant s'esborrará en acabar la sessió
});

borrar.addEventListener("click", () => {
    document.cookie = "nom = Izan; expires=Thu, 01 Jan 1970 00:00:00 UTC";
});
llistarCookies.addEventListener("click", () => {
    alert(document.cookie);
})


//RECOLLIR UNA COOKIE 

//podem fer servir d'una funció que automatitizi la recollida

function getCookie(name) {
    const cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
            return decodeURIComponent(cookieValue); //decodeURIComponent deja limpio el nombre de las cookies en caso de que hay "&" o algo parecido.
        }
    }

    return null; // Si no existeix
}

// Exemple d'ús:
const valor = getCookie("nom");
console.log("Cookie usuari:", valor);


//LOCALSTORAGE Y SESSIONSTORAGE
//Crearlas

local.addEventListener("click", () => {
    localStorage.setItem("usuari", "Izan");
});

session.addEventListener("click", () => {
    sessionStorage.setItem("tema", "fosc");
});

//Borrarlas

borrarStorage.addEventListener('click', () => {
    localStorage.removeItem("usuari");
    sessionStorage.removeItem("tema");
});

//MOSTRARLAS

mostrarStorage.addEventListener('click', () => {
    const nom = localStorage.getItem("usuari");
    console.log('Nom: '+nom);

    const tema = sessionStorage.getItem("tema");
    console.log('Tema: ' + tema); 
})
