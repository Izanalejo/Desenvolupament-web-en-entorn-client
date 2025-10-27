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
  var article2 = document.getElementById("article2");
  var germaSeguent = article2.nextElementSibling;
  var germaAnterior = article2.previousElementSibling;
  
  info("Següent germà", germaSeguent);
  resalta(germaSeguent);
  
  info("Anterior germà", germaAnterior);
  resalta(germaAnterior);

});


// ========== 3️⃣ MOSTRAR JERARQUIA DE PARES, ESCRIU PER CONSOLA EL TAGNAME DE LA JERARQUIA DELS PARES ==========

document.getElementById("botoPares").addEventListener("click", () => {
 let elemento = document.getElementById("article2");
  let nivel = 1;
  
  // Recorremos hacia arriba por los padres
  while (elemento) {
    info("Nivell " + nivel, elemento.tagName);
    elemento = elemento.parentElement;
    nivel++;
  }


});


// ========== 4️⃣ TREBALLAR AMB TAULES ==========

document.getElementById("botoTaula").addEventListener("click", function() {
  let taula = document.getElementById("taulaDades");
  let files = taula.querySelectorAll("tbody tr");
  
  
  // Recorrer cada fila y incrementar edad
  let i = 0;
  while (i < files.length) {
    let fila = files[i];
    let celdas = fila.querySelectorAll("td");
    
    // La segunda celda (índice 1) es la edad
    let celdaEdad = celdas[1];
    let edadActual = parseInt(celdaEdad.textContent);
    let nuevaEdad = edadActual + 1;
    celdaEdad.textContent = nuevaEdad;
    
    // Resaltar la celda de edad
    resalta(celdaEdad);    
    i = i + 1;
  }
});


// ========== 5️⃣ CREAR I AFEGIR ELEMENTS DINÀMICAMENT ==========

document.getElementById("botoAfegeix").addEventListener("click", () => {
  // 1. Crear el nuevo article
  const nouArticle = document.createElement("article");
  nouArticle.id = "article3";
  
  // 2. Crear el título h2
  const titulo = document.createElement("h2");
  titulo.textContent = "Nova Secció (3)";
  
  // 3. Crear el párrafo
  const parrafo = document.createElement("p");
  parrafo.textContent = "Aquest és el contingut de la nova secció afegida dinàmicament.";
  
  // 4. Añadir el título y el párrafo al article
  nouArticle.appendChild(titulo);
  nouArticle.appendChild(parrafo);
  
  // 5. Añadir el article al contenedor principal
  document.getElementById("principal").appendChild(nouArticle);
  
  // 6. Resaltar el nuevo elemento
  resalta(nouArticle);
  
  // 7. Mostrar información en consola
  info("S'ha afegit una nova secció", nouArticle);
});


// ====== 6️⃣ TIPUS DE NODES ======
document.getElementById("botoNodes").addEventListener("click", function() {
  const principal = document.getElementById("principal");

  function mostraJerarquia(node, nivell) {
    const indentacio = "  ".repeat(nivell);
    let descripcio = "";

    switch (node.nodeType) {
      case 1: // Element
        descripcio = node.tagName + " nodeType: 1";
        break;
      case 3: // Text
        descripcio = "#text nodeType: 3";
        break;
      case 8: // Comentari
        descripcio = "#comment nodeType: 8";
        break;
      default:
        descripcio = "nodeType: " + node.nodeType;
    }

    log(indentacio + descripcio);

    // Recorre fills si és un element
    if (node.nodeType === 1 && node.childNodes.length > 0) {
      node.childNodes.forEach(child => mostraJerarquia(child, nivell + 1));
    }
  }

  netejaLog();
  log("Consola de sortida");
  mostraJerarquia(principal, 0);
});