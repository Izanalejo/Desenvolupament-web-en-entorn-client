let punts = 0;
let fets = new Set(); // Guardem exercicis ja completats

function exerciciFet(num) {
  if (fets.has(num)) {
    feedback(`⚠️ L'exercici ${num} ja estava fet!`, false);
    return true;
  }
  fets.add(num);
  return false;
}

//Cada exercici val 2 punts, que s'han d'anar acumulant
function sumarPunts(){
  let elem = document.getElementById("punts");
  punts += 2;
  elem.classList.add('highlight');
  document.getElementById("punts").innerText = punts;
  setTimeout(() => elem.classList.remove('highlight'), 1500);
    //Fes servir l'activitat anterior per veure com cada augment de punts estigui highlighted durant un temps
    actualitzarNivell();
}

function actualitzarNivell() {
  const nivells = [
    {min: 0, text: "Nivell 1: Explorador DOM"},
    {min: 6, text: "Nivell 2: Caçador de Selectors"},
    {min: 14, text: "Nivell 3: Mestre del DOM 🧙‍♂️"},
  ];
  for (let i = nivells.length - 1; i >= 0; i--) {
    //Actualitza el nivell segons els punts
  }
}

function feedback(msg, correct=true){
  let fb = document.getElementById("feedback");
  fb.innerHTML += `<p class="${correct?'correct':'wrong'}">${msg}</p>`;
}

//A cada funció: si l'exercici ja està fet, no facis res més
function ex1() {
  if (exerciciFet(1)) return; 
  let ressaltar = document.querySelectorAll(".text");
  ressaltar.forEach(e => {
    e.classList.add("highlight");
  });

  
  feedback("✅ Exercici 1 completat!");
  sumarPunts();
  console.log(ex1.toString());
};

function ex2() {
  if (exerciciFet(2)) return;

  let zona = document.getElementById("zona-exemple");
  zona.classList.add("highlight");

  feedback("✅ Exercici 2 completat!");
  sumarPunts();
  console.log(ex2.toString());
}

function ex3() {
  const especial = document.querySelector('[name="especial"]');
  especial.style.border = "3px solid red";

  feedback("✅ Exercici 3 completat!");
  sumarPunts();
  console.log(ex3.toString());
}

function ex4() {
if (exerciciFet(4)) return;

  const important = document.querySelector(".important");

  if (important && important.matches(".important")) {
    let pare = important.closest(".bloc");
    console.log(important.matches(pare ? ".important" : "no-important"  ));
  }
  
  feedback("✅ Exercici 4 completat!");
  sumarPunts();
  console.log(ex4.toString());
}

function ex5() {
  feedback("✅ contains: " + "");
  sumarPunts();
  console.log(ex5.toString());
}

function ex6() {
  feedback("✅ Exercici 6 completat!");
  sumarPunts();
  console.log(ex6.toString());
}

function ex7() {
  feedback("✅ Paràgraf afegit!");
  sumarPunts();
  console.log(ex7.toString());
}

function ex8() {
  feedback("✅ Filtrat avançat aplicat!");
  sumarPunts();
  console.log(ex8.toString());
}

function netejarEstils() {
  document.querySelectorAll("*").forEach(e => {
    e.classList.remove("highlight");
    e.style.border = "";
    if(e.style.background.includes("light")) e.style.background = "";
    e.style.fontWeight = "";
  });
  feedback("🧹 Estils restablerts!", true);
}




