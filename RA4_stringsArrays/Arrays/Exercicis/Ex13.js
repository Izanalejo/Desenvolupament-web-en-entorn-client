/*Tens aquest array d'objectes JS (ja hem els hem vist en Angular): productes = [ { nom: "Ratolí", preu: 20 }, { nom: "Teclat", preu: 35 }, { nom: "Monitor", preu: 150 } ];

Troba el primer producte amb preu > 30 amb .find().

Comprova si tots costen més de 10 amb .every().

Comprova si alguns costen més de 100 amb .some().*/

let productes = [ 
    { nom: "Ratolí", preu: 20 }, 
    { nom: "Teclat", preu: 35 }, 
    { nom: "Monitor", preu: 150} 
];

// Trobar el primer producte amb preu major de 30 

function myOver(producte) {
  return producte.preu > 30;
}

let preu = productes.find(myOver).preu;

console.log(preu); // 35

// Comprovar si costen més de 10 

 function mesDeDeu(producte) {
  return producte.preu > 10;
}

let totsMesDeDeu = productes.every(mesDeDeu);

console.log(totsMesDeDeu); 

//Comporvar si alguns costen més de 100

function mesDeCen(producte) {
    return producte.preu > 100;
}

let algunMesDeCen = productes.some(mesDeCen);
console.log(algunMesDeCen);
