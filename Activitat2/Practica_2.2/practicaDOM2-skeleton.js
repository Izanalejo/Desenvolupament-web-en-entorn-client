// ========== FUNCIONS D'UTILITAT ==========

// Ressalta visualment un element
function resalta(elem) {
  elem.classList.add('highlight');
  //Es perquè ressalti només un moment
  setTimeout(() => elem.classList.remove('highlight'), 1500);
}

// Mostra informació a la consola de manera ordenada
function info(titol, valor) {
  console.log(`--- ${titol} ---`);
  console.log(valor);
}

function log(msg) {
  const out = document.getElementById("log");
  out.textContent += msg + "\n";
  out.scrollTop = out.scrollHeight;
}

function netejaLog() {
  document.getElementById("log").textContent = "";
}

// ========== 1️⃣ RESSALTAR PRIMER I ÚLTIM FILL DE PRINCIPAL ==========

document.getElementById("botoResalta").addEventListener("click", () => {

  info("Primer fill de #principal", document.getElementById("principal").firstElementChild);

    resalta(document.getElementById("principal").firstElementChild);

    info("Últim fill de #principal", document.getElementById("principal").lastElementChild);

    resalta(document.getElementById("principal").lastElementChild);
})


// ========== 2️⃣ MOSTRAR GERMA ANTERIOR I SEGUENT DE LA SECCIO 2 ==========

document.getElementById("botoGermans").addEventListener("click", () => {

  info("Següent germà", document.getElementById("article2").nextElementSibling);
    //resalta(document.getElementById("article2").nextElementSibling);

    info("Anterior germà", document.getElementById("article2").previousElementSibling);
    resalta(document.getElementById("article2").previousElementSibling);

});


// ========== 3️⃣ MOSTRAR JERARQUIA DE PARES, ESCRIU PER CONSOLA EL TAGNAME DE LA JERARQUIA DELS PARES ==========

document.getElementById("botoPares").addEventListener("click", () => {
});


// ========== 4️⃣ TREBALLAR AMB TAULES ==========

document.getElementById("botoTaula").addEventListener("click", () => {
});


// ========== 5️⃣ CREAR I AFEGIR ELEMENTS DINÀMICAMENT ==========

document.getElementById("botoAfegeix").addEventListener("click", () => {

  info("S'ha afegit una nova secció", document.getElementById("article3"));

  document.getElementById("principal").createElement("article3");

  let titulo = createElement("h2");
  titulo.textContent = ("Nova Secció(3)"); 
});


// ====== 7️⃣ TIPUS DE NODES ======
document.getElementById("botoNodes").addEventListener("click", () => {
});