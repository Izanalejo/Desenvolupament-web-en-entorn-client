/*Tens un array d’objectes amb productes d’una botiga:

const productes = [ 
{ nom: "Ratolí", preu: 15 }, 
{ nom: "Teclat", preu: 30 }, 
{ nom: "Monitor", preu: 120 }, 
{ nom: "Cable HDMI", preu: 10 } 
];
Escriu una funció tradicional anomenada filtraCars que rep 
un array i retorna només els noms dels productes amb preu 
superior a 20.

Transforma aquesta funció en una funció anònima assignada a una constant.

Transforma-la després en una funció fletxa.*/

const productes = [ 
    { nom: "Ratolí", preu: 15 }, 
    { nom: "Teclat", preu: 30 }, 
    { nom: "Monitor", preu: 120 }, 
    { nom: "Cable HDMI", preu: 10 } 
];

//Funció tradicional

function filtraPerPreu(producte) {
  return producte.preu > 20;
}

function obtéNom(producte) {
  return producte.nom;
}

function filtraCars(productes) {
  const filtrats = productes.filter(filtraPerPreu);
  const resultats = filtrats.map(obtéNom);
  return resultats;
};

console.log(filtraCars(productes));

//Funció anònima amb variable asingada a una constant

let anonima = function(){
  const filtrados = productes.filter(filtraPerPreu);
  const resultados = filtrados.map(obtéNom);
  console.log(resultados);
};

anonima();

//Funció fletxa

const fletxa = (productes) => 
    productes
    .filter((producte) => producte.preu > 20)
    .map((producte) => producte.nom);

console.log(fletxa(productes));