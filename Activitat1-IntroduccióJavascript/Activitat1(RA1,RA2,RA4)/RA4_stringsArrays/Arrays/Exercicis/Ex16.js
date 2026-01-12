/*16. Juguem amb els arrays
Donat aquest array:  autos =  [

"BMW, Serie 3, 2012, 30000, 4, Blanco, automatico", 
"Audi, A4, 2002, 430000, 4, Azul, manual",
"BMW, Serie 5, 2002, 45000, 4, Blanco, automatico",
"Ford, Mustang, 2012, 30000, 4, Azul, manual",
"Audi, A3, 2008, 45000, 4, Blanco,automatico",
"Dodge, Challenger, 2012, 25000, 2, Rojo, manual",
"Ford, Mustang, 2022, 130000, 4, Azul, automatico",
"BMW, Serie 3,2012,1000, 4, Rojo, automatico",
"Dodge, Challenger, 2009, 5000, 2, Blanco, manual"

]

On a cada posició trobem un cotxe per vendre amb les següents característiques: marca, model, any de matriculació, 
kilometratge, número de portes, color i sistema de marxes.

a) Imprimeix per pantalla tots els cotxes  fent servir les estructures for i forEach (imprimeix de dues maneres diferents)

b) Imprimeix per pantalla només les marques i els models de tots els cotxes (fes servir el mètode map)

c) Imprimeix per pantalla tots els cotxes que siguin de color Blanc (fes servir el mètode filter)

d) Imprimeix per pantalla tots els cotxes de l'any 2012 (fes-ho fent servir el mètode filter, i també repeteix l'operació amb el mètode map)

e) Busca si tenim cotxes de la marca Dodge. I de la marca Seat? (fes-ho fent servir el mètode some)*/


autos =  [

"BMW, Serie 3, 2012, 30000, 4, Blanco, automatico", 
"Audi, A4, 2002, 430000, 4, Azul, manual",
"BMW, Serie 5, 2002, 45000, 4, Blanco, automatico",
"Ford, Mustang, 2012, 30000, 4, Azul, manual",
"Audi, A3, 2008, 45000, 4, Blanco,automatico",
"Dodge, Challenger, 2012, 25000, 2, Rojo, manual",
"Ford, Mustang, 2022, 130000, 4, Azul, automatico",
"BMW, Serie 3,2012,1000, 4, Rojo, automatico",
"Dodge, Challenger, 2009, 5000, 2, Blanco, manual"
];

//Imprimir tots els cotxes amb for i foreach
console.log("Amb for: ")
 for (let i = 0; i < autos.length; i++) {
    const imprimir = autos[i];
    console.log(imprimir);
}

console.log("\n");

console.log("Amb foreach: ")
autos.forEach(myFunction);

function myFunction(value) {

  console.log(value);
}




//Imprimir només 
