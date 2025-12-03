    let llista = document.getElementById('llista');

let gestiona = document.getElementById('gestiona');

let bolGestiona = false;
let bolLlista = false;

llista.addEventListener('click', () =>{

    bolLlista= true;
    if(bolLlista == true){
        bolGestiona = false;
        mostrarSelectAnimals();
        mostrarTaula(selectAnimals.value);
    }
});

gestiona.addEventListener('click', () =>{
    bolGestiona = true;
    if(bolGestiona == true){
       
    }
}); 



const animals = ["aus", "mamifers", "amfibis", "reptils", "peix", "altres"];

const tipusAnimals = {
    aus: ["anec", "paloma", "gavina"],
    mamifers: ["dofi", "gos", "gorila"],
    amfibis: ["granota", "sapo"],
    reptils: ["salamandra", "cocodril", "iguana"],
    peix: ["salmo", "tonyina", "truita"],
    altres: ["cactus", "tulipan", "taronger"]
};

const selectContainer = document.getElementById("select-container");
const selectAnimals = document.getElementById("selectAnimals");
const taulaAnimals = document.getElementById("taulaAnimals");


function mostrarSelectAnimals() {
  // Crear opciones
    selectAnimals.innerHTML = "";
    animals.forEach(a => {
    const opt = document.createElement("option");
    opt.value = a;
    opt.textContent = a;
    selectAnimals.appendChild(opt);
    });
    mostrarTaula(selectAnimals.value);
}

function mostrarTaula(animal) {
    const llista = tipusAnimals[animal];

    let html = `<table><tr><th>Animal</th></tr>`;
    llista.forEach(a => html += `<tr><td>${a}</td></tr>`);
    html += `</table>`;

    taulaAnimals.innerHTML = html;
}

selectAnimals.addEventListener("change", () => {
    mostrarTaula(selectAnimals.value);
});




