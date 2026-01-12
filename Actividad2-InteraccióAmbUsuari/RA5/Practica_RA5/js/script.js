/* ARRAYS PRINCIPALS */
const especies = ["aus", "mamífers", "amfibis", "rèptils", "peixos", "altres"];//no varia

let animals = [
    {id: 1, especie: "aus", nom: "Flamenc", sexe: "femella", any: 2018, pais: "Espanya", continent: "Europa"},
    {id: 2, especie: "mamífers", nom: "Lleó", sexe: "mascle", any: 2015, pais: "Kenya", continent: "Àfrica"},
    { id: 3, especie: "aus", nom: "Àguila reial", sexe: "mascle", any: 2016, pais: "Espanya", continent: "Europa" },
    { id: 4, especie: "peixos", nom: "Peix pallasso", sexe: "femella", any: 2020, pais: "Austràlia", continent: "Oceania" },
    { id: 5, especie: "peixos", nom: "Manta", sexe: "mascle", any: 2012, pais: "Sud-àfrica", continent: "Àfrica" },
    { id: 6, especie: "aus", nom: "Pingüí", sexe: "femella", any: 2019, pais: "Antàrtida", continent: "Antàrtida" },
    { id: 7, especie: "aus", nom: "Tucà", sexe: "mascle", any: 2017, pais: "Brasil", continent: "Amèrica" },
    { id: 8, especie: "aus", nom: "Cigonya blanca", sexe: "femella", any: 2018, pais: "Alemanya", continent: "Europa" },
    {id: 9, especie: "amfibis", nom: "Granota", sexe: "mascle", any: 2012, pais: "Austràlia", continent: "Oceania"},
    {id: 10, especie: "peixos", nom: "Tauró", sexe: "mascle", any: 2012, pais: "Austràlia", continent: "Oceania"},
    { id: 11, especie: "mamífers", nom: "Girafa", sexe: "mascle", any: 2013, pais: "Tanzània", continent: "Àfrica" }

];//és let i no const perquè hi afegirem nous animals

/* ELEMENTS DEL DOM */
//per a solucionar apartat a)
const zonaLlista = document.getElementById("zonaLlista");
const zonaGestiona = document.getElementById("zonaGestiona");

//per a solucionar apartat b.1), b.2)
const selector = document.getElementById("selectorEspecies");

//per a solucionar apartat b.3), b.4)
const resultatLlista = document.getElementById("resultatLlista");

//per a solucionar apartat c)
const taulaGestiona = document.getElementById("taulaGestiona");
//per a l'apartat c.3)
const formulari = document.getElementById("formulari");
const btnMostrarForm = document.getElementById("btnMostrarForm");
const btnEnviar = document.getElementById("btnEnviar");

//per a les validacions
const errorNom = document.getElementById("errorNom");
const errorEspecie = document.getElementById("errorEspecie");
const errorSexe = document.getElementById("errorSexe");
const errorAny = document.getElementById("errorAny");
let id = "";
let nom = "";
let selec = "";
let any = "";
let sexeSeleccionat ="";


/* MENÚ: apartat a) LLISTA */
document.getElementById("btnLlista").addEventListener("click", () => {
    zonaLlista.style.display = "block";
    zonaGestiona.style.display = "none";
});



/* CREAR SELECTOR D'ESPÈCIES: apartat b.1) */
especies.forEach(e => {
    let option = document.createElement("option");
    option.value = e;
    option.textContent = e;
    selector.appendChild(option);
});

/* LLISTA PER ESPÈCIE: apartat b.2) */
selector.addEventListener("change", () => { //esdeveniment change, així no necessitem d'un botó
    
    let esp = selector.value; //agafem l'espècie seleccionada
    let filtrats = animals.filter(a => a.especie === esp);//filtrem l'array d'animals segons l'espècie

    //si no tenim animals ho detectem per la mida de l'array, apartat b.4)
    if (filtrats.length === 0) {
        resultatLlista.innerHTML = "<p>En aquests moments no tenim animals d’aquesta espècie</p>";
        return;
    }

    //si tenim animals, mostrem la taula dinàmica amb els animals, apartat b.3)
    let html = "<table border='1'><tr><th>ID</th><th>Nom</th><th>Sexe</th><th>Any</th><th>País</th><th>Continent</th></tr>";

    filtrats.forEach(a => {
        html += `<tr>
            <td>${a.id}</td>
            <td>${a.nom}</td>
            <td>${a.sexe}</td>
            <td>${a.any}</td>
            <td>${a.pais}</td>
            <td>${a.continent}</td>
        </tr>`;
    });

    html += "</table>";
    resultatLlista.innerHTML = html;
});


/* MENÚ: apartat a) GESTIONA i c.1)  */
document.getElementById("btnGestiona").addEventListener("click", () => {
    zonaGestiona.style.display = "block";
    zonaLlista.style.display = "none";
    mostrarTaulaGestiona();
});

/* TAULA GESTIONA */
function mostrarTaulaGestiona() {
    let html = "<table border='1'><tr><th></th><th>ID</th><th>Espècie</th><th>Nom</th></tr>";

    animals.forEach(animal => {
        html += `<tr>
            <td><input type="checkbox" value="${animal.id}"></td>
            <td>${animal.id}</td>
            <td>${animal.especie}</td>
            <td>${animal.nom}</td>
        </tr>`;
    });

    html += "</table>";
    taulaGestiona.innerHTML = html;
}

/* ESBORRAR: apartat c.2) */
document.getElementById("btnEsborra").addEventListener("click", () => {
    const checks = document.querySelectorAll("input[type=checkbox]:checked");//recollim els checkbox txequejats, és un array
    console.log (checks[0].value);//recullim el value del primer checkbox seleccionat, per ficar un exemple

    //esborrem els animals seleccionats, per això recorrem els checkbox seleccionats i mirem que el seu valor no coincideixi amb l'id d'animals
    checks.forEach(c => {
        animals = animals.filter(a => a.id != c.value);
    });
    console.log(animals);//visualitzem el nou array d'animals després d'esborrar
    mostrarTaulaGestiona();//tornem a refrescar la taula
});

/* CREA FORMULARI */
document.getElementById("btnCrea").addEventListener("click", () => {
   formulari.style.display = "block";


   
   const selec = document.getElementById("especie");


   //omplim el selector d'espècies del formulari
   
   selec.innerHTML = "";//neteja per si ja hi havia alguna opció
   especies.forEach(e => {
       let option = document.createElement("option");
       option.value = e;
       option.textContent = e;
       selec.appendChild(option);
   });
}
);
       

// VALIDACIONS INDIVIDUALS
function validarNom() {
   
    nom = document.getElementById("nom");

    const patro = /^[A-Za-zÀ-ÿ\s]+$/;
    if (!patro.test(nom.value.trim())) {
        errorNom.textContent = "Nom no vàlid";
        return false;
    }
    errorNom.textContent = "";
    return true;
}

function validarEspecie() {
    selec = document.getElementById("especie");

    if (selec.value === "") {
        errorEspecie.textContent = "Selecciona una espècie";
        return false;
    }
    errorEspecie.textContent = "";
    return true;
}

function validarSexe() {
  
   sexeSeleccionat = document.querySelector("input[name=sexe]:checked");
    if (!sexeSeleccionat) {
        errorSexe.textContent = "Selecciona el sexe";
        return false;
    }
    errorSexe.textContent = "";
    return true;
}

function validarAny() {
    any = document.getElementById("any");
    const anyActual = new Date().getFullYear();
    if (any.value < 1900 || any.value > anyActual) {
        errorAny.textContent = "Any incorrecte";
        return false;
    }
    errorAny.textContent = "";
    return true;
}

// VALIDACIÓ GLOBAL
function validarFormulari() {
    const valid =
        validarNom() &
        validarEspecie() &
        validarSexe() &
        validarAny();

    btnEnviar.disabled = !valid;
}


//recullo tots els inputs per afegir l'esdeveniment blur
document.querySelectorAll('input').forEach(i => {
    i.addEventListener("blur", validarFormulari);
});

// SUBMIT
formulari.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Animal creat correctament");
});  
        

    //enviem les dades del formulari
btnEnviar.addEventListener("click", () => {
    
        
        let nou = {
            id: document.getElementById("identificador").value,
            especie: selec.value,
            nom: nom.value,
            sexe: sexeSeleccionat.value,
            any: any.value,
            pais: "Espanya",
            continent: "Europa"
        };
console.log(nou);
        animals.push(nou);
        console.log(animals);
        mostrarTaulaGestiona();
    });
