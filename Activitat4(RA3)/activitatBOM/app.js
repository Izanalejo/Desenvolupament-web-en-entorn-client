

// ---------- SALUTACIÓ BASADA EN COOKIES ----------
function getCookies(name){
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if(key === name){
            return decodeURIComponent(value);
        }
    }
    return null;
}

function misstageBenvinguda(){
    const benvingudaDiv = document.getElementById('session-greeting');
    const username = getCookies('username');

    if(username){
        benvingudaDiv.textContent = `Benvingut de nou, ${username}!`;
        benvingudaDiv.style.color = '#2ecc71';
    }else{
        benvingudaDiv.textContent = 'Encara no tens sessió registrada.'
        benvingudaDiv.style.color = '#e74c3c';
    }
}

//Mostrar salutació en carregar la pàgina
misstageBenvinguda();

//Missatge de benvinguda per consola
console.log('Benivngut al Dashboard BOM!');


// ---------- 1. INFORMACIÓ DEL NAVEGADOR ----------

document.getElementById('btn-info-browser').addEventListener('click', function(){
    const info = {
        'Navegador' : navigator.userAgent,
        'idioma' : navigator.language,
        'plataforma' : navigator.platform,
        'ampladaPantalla' : screen.width,
        'alçadaPantalla' : screen.height,
        'urlCompleta' : window.location.href,
        'domini' : window.location.hostname

    };
    const infoDiv = document.getElementById('browser-info');
    infoDiv.textContent = JSON.stringify(info, null, 2);
});

// ---------- 2. MIDA DE LA FINESTRA EN TEMPS REAL ----------
function updateWindowSize(){
    const sizeP = document.getElementById('window-size');
    sizeP.textContent = `Amplada: ${window.innerWidth}px | Alçada: ${window.innerHeight}px`;
}

//Actualitzar al carregar la pàgina
updateWindowSize();

// ---------- 3. COMPTADOR + REDIRECCIÓ ----------

const btnContador = document.getElementById('btn-start-countdown');
const countDownOutput = document.getElementById('countdown');

btnContador.addEventListener('click', () => {
    let temps = 4;
    countDownOutput.textContent = temps;

    const interval = setInterval(() => {
        temps --;
        countDownOutput.textContent = temps;

        if(temps == 0){
            clearInterval(interval);
            window.location.href = "https://www.google.com";
        }
    }, 1000);
});
// ---------- 4. HISTÒRIA ----------

document.getElementById("btn-back").addEventListener("click", () => {
  history.back();
});

document.getElementById("btn-forward").addEventListener("click", () => {
  history.forward();
});
// ---------- 5. FINESTRES / PESTANYES ----------

document.getElementById("btn-open-window").addEventListener("click", () => {
  window.open("https://www.wikipedia.org", "_blank");
});


// ---------- 6. COOKIES ----------
document.getElementById("btn-set-cookie").addEventListener("click", function () {
    const username = prompt("Introdueix el teu nom d'usuari:");
    if (username) {
        const d = new Date();
        d.setTime(d.getTime() + 24 * 60 * 60 * 1000); // 24 hores
        document.cookie = `user=${username}; expires=${d.toUTCString()}; path=/`;
        alert("Cookie creada correctament!");
    }
});

// Funció per llegir cookies i mostrar-les en #cookie-output
document.getElementById("btn-read-cookie").addEventListener("click", function () {
    const cookies = document.cookie.split("; ");
    let output = "";
    cookies.forEach(cookie => {
        const [name, value] = cookie.split("=");
        if(name === "user") {
            output = `user=${value}`;
        }
    });
    if(output === "") output = "No hi ha cap cookie d'usuari.";
    document.getElementById("cookie-output").textContent = output;
});

// ---------- 7.  EXTRA. REPÀS DE DOM: CANVI DE COLOR RANDOM I RECOMPTE D'ENTRADES A CADA SESSIÓ ----------

const randomColors = ["#ffd6a5", "#caffbf", "#9bf6ff", "#a0c4ff", "#ffadad", "#bdb2ff"];

/** Canvi de color i recompte entrades */
document.querySelectorAll("section").forEach((sec) => {
  sec.addEventListener("mouseenter", () => {
    const color = randomColors[Math.floor(Math.random() * randomColors.length)];
    sec.style.backgroundColor = color;

    // Actualitza comptador de la secció
    const contador = sec.querySelector(".contador");
    if (contador) contador.textContent = parseInt(contador.textContent) + 1;
  });
});