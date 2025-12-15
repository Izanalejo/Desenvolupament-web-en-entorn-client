const llista = document.getElementById('llista');
const gestiona = document.getElementById('gestiona');

const zonaLlista = document.getElementById("zonaLlista");
const zonaGestiona = document.getElementById("zonaGestiona");

const selectAnimals = document.getElementById("selectAnimals");
const taulaAnimals = document.getElementById("taulaAnimals"); 

let bolGestiona = false;
let bolLlista = false; 

llista.addEventListener('click', () =>{
    zonaLlista.style.display = "block";
    zonaGestiona.style.display = "none";
    bolLlista= true; 
    if(bolLlista == true){
        bolGestiona = false;
        mostrarSelectAnimals();
        mostrarTaula(selectAnimals.value);
    } 
});

gestiona.addEventListener('click', () =>{
    zonaGestiona.style.display = "block";
    zonaLlista.style.display = "none";
}); 



const animals = [
    { id: 1, especie: "mamifer", nom: "Elefant", sexe: "mascle", any: 2015, pais: "Kenya", continent: "Àfrica" },
    { id: 2, especie: "mamifer", nom: "Lleó", sexe: "mascle", any: 2016, pais: "Tanzània", continent: "Àfrica" },
    { id: 3, especie: "mamifer", nom: "Dofí", sexe: "femella", any: 2019, pais: "Portugal", continent: "Europa" },
    { id: 4, especie: "mamifer", nom: "Ós polar", sexe: "mascle", any: 2012, pais: "Canadà", continent: "Amèrica" },
    { id: 5, especie: "mamifer", nom: "Cangur", sexe: "femella", any: 2020, pais: "Austràlia", continent: "Oceania" },

    { id: 6, especie: "amfibi", nom: "Granota", sexe: "femella", any: 2021, pais: "Espanya", continent: "Europa" },
    { id: 7, especie: "amfibi", nom: "Gripau", sexe: "mascle", any: 2018, pais: "França", continent: "Europa" },
    { id: 8, especie: "amfibi", nom: "Salamandra", sexe: "femella", any: 2017, pais: "Itàlia", continent: "Europa" },
    { id: 9, especie: "amfibi", nom: "Tritó", sexe: "mascle", any: 2019, pais: "Alemanya", continent: "Europa" },
    { id: 10, especie: "amfibi", nom: "Axolot", sexe: "mascle", any: 2022, pais: "Mèxic", continent: "Amèrica" },

    { id: 11, especie: "reptil", nom: "Cocodril", sexe: "mascle", any: 2010, pais: "Egipte", continent: "Àfrica" },
    { id: 12, especie: "reptil", nom: "Iguana", sexe: "femella", any: 2018, pais: "Brasil", continent: "Amèrica" },
    { id: 13, especie: "reptil", nom: "Serp", sexe: "femella", any: 2016, pais: "Índia", continent: "Àsia" },
    { id: 14, especie: "reptil", nom: "Camaleó", sexe: "mascle", any: 2021, pais: "Madagascar", continent: "Àfrica" },
    { id: 15, especie: "reptil", nom: "Tortuga", sexe: "femella", any: 2009, pais: "Grècia", continent: "Europa" },

    { id: 16, especie: "peix", nom: "Tauró blanc", sexe: "femella", any: 2011, pais: "Sud-àfrica", continent: "Àfrica" },
    { id: 17, especie: "peix", nom: "Salmó", sexe: "mascle", any: 2020, pais: "Noruega", continent: "Europa" },
    { id: 18, especie: "peix", nom: "Peix pallasso", sexe: "mascle", any: 2022, pais: "Austràlia", continent: "Oceania" },
    { id: 19, especie: "peix", nom: "Tonyina", sexe: "femella", any: 2019, pais: "Japó", continent: "Àsia" },
    { id: 20, especie: "peix", nom: "Cavallet de mar", sexe: "mascle", any: 2021, pais: "Filipines", continent: "Àsia" },

    { id: 21, especie: "altres", nom: "Abella", sexe: "femella", any: 2023, pais: "França", continent: "Europa" },
    { id: 22, especie: "altres", nom: "Formiga", sexe: "femella", any: 2022, pais: "Espanya", continent: "Europa" },
    { id: 23, especie: "altres", nom: "Aranya", sexe: "mascle", any: 2020, pais: "Argentina", continent: "Amèrica" },
    { id: 24, especie: "altres", nom: "Pop", sexe: "mascle", any: 2017, pais: "Xile", continent: "Amèrica" },
    { id: 25, especie: "altres", nom: "Calamar", sexe: "femella", any: 2018, pais: "Perú", continent: "Amèrica" }
];





function mostrarSelectAnimals() {
    selectAnimals.innerHTML = "";

    const especiesUnicas = [...new Set(animals.map(a => a.especie))];

    especiesUnicas.forEach(especie => {
        const opt = document.createElement("option");
        opt.value = especie;
        opt.textContent = especie;
        selectAnimals.appendChild(opt);
    });
}



function mostrarTaula(especie) {
    const filtrats = animals.filter(a => a.especie === especie);

    let html = `
        <table style="border-collapse: collapse;" border="1">
            <tr>
                <th>Nom</th>
                <th>Sexe</th>
                <th>Any</th>
                <th>País</th>
                <th>Continent</th>
            </tr>
    `;

    filtrats.forEach(a => {
        html += `
            <tr>
                <td style="padding: 5px;">${a.nom}</td>
                <td style="padding: 5px;">${a.sexe}</td>
                <td style="padding: 5px;">${a.any}</td>
                <td style="padding: 5px;">${a.pais}</td>
                <td style="padding: 5px;">${a.continent}</td>
            </tr>
        `;
    });

    html += `</table>`;
    taulaAnimals.innerHTML = html;
}

selectAnimals.addEventListener("change", () => {
    mostrarTaula(selectAnimals.value);
});





function mostrarTaulaGestiona() {
    let html = `
        <table border="1">
            <tr>
                <th></th>
                <th>ID</th>
                <th>Espècie</th>
                <th>Nom</th>
            </tr>
    `;

    animals.forEach(animal => {
        html += `
            <tr>
                <td><input type="checkbox" value="${animal.id}"></td>
                <td>${animal.id}</td>
                <td>${animal.especie}</td>
                <td>${animal.nom}</td>
            </tr>
        `;
    });

    html += "</table>";
}



