const fraseEl = document.getElementById('frase');
const horaEl = document.getElementById('hora');

const data = new Date();
const meses = [
  "Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"
];

fraseEl.textContent = `Avui és ${data.getDate()} de ${meses[data.getMonth()]} del ${data.getFullYear()},`;

// Funció que actualitza l'hora
function updateHora() {
  horaEl.textContent = new Date().toLocaleTimeString();
}

updateHora();              // mostra al carregar
setInterval(updateHora, 1000); // actualitza cada segon


//FORMULARI DE LOGIN
//Array per a les credencials vàlides

const credencials = [
    { user: "user", passwd: "user1234" },
];

//Variables de login i missatge 
const form = document.getElementById("loginForm");
const msg = document.getElementById("msg");

//AddEventlistener per al botó submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); // <--Per no fer enviaments en fals 

    const userInput = document.getElementById("user").value.trim();
    const passInput = document.getElementById("passwd").value.trim();

    // Buscar usuari
    const usuariTrobat = credencials.find(u => u.user === userInput);

    if (!usuariTrobat) {
        msg.textContent = "L'usuari no existeix";
        msg.style.color = "red";
        return;
    }

    // Comprobar contraseña
    if (usuariTrobat.passwd !== passInput) {
        msg.textContent = "La contrasenya és incorrecta";
        msg.style.color = "red";
        return;
    }

    // Login correcto
    msg.textContent = "Validació correcta!";
    msg.style.color = "green";

});