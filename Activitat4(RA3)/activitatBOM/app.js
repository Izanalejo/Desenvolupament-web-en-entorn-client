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

// ---------- 5. FINESTRES / PESTANYES ----------

// ---------- 6. COOKIES ----------

// ---------- 7.  EXTRA. REPÀS DE DOM: CANVI DE COLOR RANDOM I RECOMPTE D'ENTRADES A CADA SESSIÓ ----------
