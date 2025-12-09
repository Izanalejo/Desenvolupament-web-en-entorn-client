const cajaCookies = document.getElementById('cookies');
const aceptar = document.getElementById('aceptar');
const denegar = document.getElementById('denegar');
const form = document.getElementById('form');
const msg = document.getElementById('msg');

// Funcion para crear y guardar una cookie
function setCookie(name, value, days){
    const d = new Date();
    d.setTime(d.getTime()+(days * 24 * 60 * 60 * 1000 ));
    document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

//Funcion para leer una cookie que ya existe
function getCookie(name){
    let cookies = document.cookie.split(";");

    for (let c of cookies) {
        let [key, value] = c.trim().split("=");
        if(key === name) return value;
    }

    return null;
}
//Deshabilitar el formulario

function desactivarForm(){
    document.getElementById("user").disabled = true;
    document.getElementById("password").disabled = true;
    form.querySelectorAll("button").disabled = true;
}
function activarForm(){
    document.getElementById("user").disabled = false;
    document.getElementById("password").disabled = false;
    form.querySelectorAll("button").disabled = false;
}

if(getCookie("cookiesOK") === true){
    activarForm();
}else{
    desactivarForm();
}

aceptar.addEventListener("click", () => {
    setCookie("cookiesOK", "true", 7);
    activarForm();
});

denegar.addEventListener("click", () => {
    desactivarForm();
});

//------------LOGIN---------------
const credencials =[
    {user:"Izan", password:"Alejo"},
];
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userInput = document.getElementById("user").value.trim();
    const passInput = document.getElementById("password").value.trim();

    const usuariTrobat = credencials.find(u => u.user === userInput);
    
    if(!usuariTrobat){
        msg.textContent = "L'usuari no existeix";
        msg.style.color = "red";
    }
    
    if (usuariTrobat.password !== passInput) {
    msg.textContent = "La contrasenya és incorrecta";
    msg.style.color = "red";
    return;
    }

      // Login correcte
  msg.textContent = "Validació correcta!";
  msg.style.color = "green";

  // Guardar login en localStorage
  localStorage.setItem("loginOK", "true");
})