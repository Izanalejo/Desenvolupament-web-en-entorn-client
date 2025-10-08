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

//Funciço tradicional

function filtraCars(productes) {
  const resultats = productes.filter(function (producte) {
      return producte.preu > 20;
    })

    .map(function (producte) {
      return producte.nom;
    });
  return resultats;
}

console.log(filtraCars(productes));

//Funció anònima amb variable asingada a una constant

const anonima = filtraCars(productes);

console.log(anonima);

//Funció fletxa

const fletxa = (productes) => 
    productes
    .filter((producte) => producte.preu > 20)
    .map((producte) => producte.nom);


console.log(fletxa(productes));