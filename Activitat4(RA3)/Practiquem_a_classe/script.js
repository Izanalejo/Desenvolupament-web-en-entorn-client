// ---------------- FECHA + HORA ----------------
const fraseEl = document.getElementById('frase');
const horaEl = document.getElementById('hora');

const data = new Date();
const meses = [
  "Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"
];

fraseEl.textContent = `Avui és ${data.getDate()} de ${meses[data.getMonth()]} del ${data.getFullYear()},`;

function updateHora() {
  horaEl.textContent = new Date().toLocaleTimeString();
}
updateHora();
setInterval(updateHora, 1000);

// ---------------- COOKIES ----------------
const cookieBox = document.getElementById("cookieBox");
const acceptar = document.getElementById("acceptar");
const rebutjar = document.getElementById("rebutjar");
const form = document.getElementById("loginForm");
const msg = document.getElementById("msg");

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
  let cookies = document.cookie.split(";");

  for (let c of cookies) {
    let [key, value] = c.trim().split("=");
    if (key === name) return value;
  }

  return null;
}


// Bloquear formulario
function disableForm() {
  document.getElementById("user").disabled = true;
  document.getElementById("passwd").disabled = true;
  form.querySelector("button").disabled = true;
}

// Activar formulario
function enableForm() {
  document.getElementById("user").disabled = false;
  document.getElementById("passwd").disabled = false;
  form.querySelector("button").disabled = false;
}

// Comprobar cookie al cargar
if (getCookie("cookiesOK") === "true") {
  cookieBox.style.display = "none";
  enableForm();
} else {
  disableForm(); // hasta aceptar
}

acceptar.addEventListener("click", () => {
  setCookie("cookiesOK", "true", 7);
  cookieBox.style.display = "none";
  enableForm();
});

rebutjar.addEventListener("click", () => {
  disableForm(); // formulario bloqueado
});

// ---------------- LOGIN ----------------
const credencials = [
  { user: "user", passwd: "user1234" },
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userInput = document.getElementById("user").value.trim();
  const passInput = document.getElementById("passwd").value.trim();

  const usuariTrobat = credencials.find(u => u.user === userInput);

  if (!usuariTrobat) {
    msg.textContent = "L'usuari no existeix";
    msg.style.color = "red";
    return;
  }

  if (usuariTrobat.passwd !== passInput) {
    msg.textContent = "La contrasenya és incorrecta";
    msg.style.color = "red";
    return;
  }

  // Login correcte
  msg.textContent = "Validació correcta!";
  msg.style.color = "green";

  // Guardar login en localStorage
  localStorage.setItem("loginOK", "true");

  mostrarSelectCursos();
});

// ---------------- CURSOS + ALUMNES ----------------
const cursos = ["daw", "dawbio", "dam", "asix"];

const alumnes = {
  daw: ["Pau", "Marta", "Joan"],
  dawbio: ["Sergi", "Núria", "Arnau"],
  dam: ["Júlia", "Albert", "Lluc"],
  asix: ["Adrià", "Laia", "Carles"]
};

const selectContainer = document.getElementById("select-container");
const selectCursos = document.getElementById("selectCursos");
const taulaAlumnes = document.getElementById("taulaAlumnes");

function mostrarSelectCursos() {
  document.getElementById("form-container").style.display = "none";
  selectContainer.style.display = "block";

  // Crear opciones
  selectCursos.innerHTML = "";
  cursos.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    selectCursos.appendChild(opt);
  });

  mostrarTaula(selectCursos.value);
}

function mostrarTaula(curs) {
  const llista = alumnes[curs];

  let html = `<table class="table table-bordered"><tr><th>Alumne</th></tr>`;
  llista.forEach(a => html += `<tr><td>${a}</td></tr>`);
  html += `</table>`;

  taulaAlumnes.innerHTML = html;
}

selectCursos.addEventListener("change", () => {
  mostrarTaula(selectCursos.value);
});

// Si ja estava logueado, saltar login
if (localStorage.getItem("loginOK") === "true") {
  mostrarSelectCursos();
}
