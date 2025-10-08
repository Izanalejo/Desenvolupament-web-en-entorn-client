/*Crea un array d’objectes amb aquest format:  
tasques = [ 
{ nom: "Fer deures", completada: true }, 
{ nom: "Estudiar Angular", completada: false }, 
{ nom: "Practicar JS", completada: true } ];

Mostra només les tasques pendents.

Mostra quantes hi ha completades i quantes pendents.*/


tasques = [
{ nom: "Fer deures", completada: true }, 
{ nom: "Estudiar Angular", completada: false }, 
{ nom: "Practicar JS", completada: true } 
];


//Mostrar tasques pendents
console.log("Tasques pendents: ");

let tareasPendents = tasques.filter(pendents);

tareasPendents.forEach(imprimir);


function pendents(tasca){
    return tasca.completada === false;
}

function imprimir(tasca){
     console.log("- " + tasca.nom);
}

// Mostrar quantes hi ha completades i quantes pendents

let numCompletades = 0;
let numPendents = 0;

for (let i = 0; i < tasques.length; i++) {
  if (tasques[i].completada === true) {
    numCompletades++;
  } else {
    numPendents++;
  }
}

console.log("\nResum:");
console.log("Tasques completades: " + numCompletades);
console.log("Tasques pendents: " + numPendents);




