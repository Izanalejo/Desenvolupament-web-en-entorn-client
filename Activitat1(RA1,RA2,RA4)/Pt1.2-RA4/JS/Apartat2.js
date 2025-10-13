/*Apartat 2 – Arrays (6 punts)
1. Creeu un array fruits amb: "Poma", "Plàtan", "Taronja", "Mango".

2. Afegiu "Kiwi" al final i "Llimona" al principi.

3. Elimineu el primer i l’últim element.

4. Feu servir slice() per obtenir un subarray.

5. Recorregueu l’array amb un for i amb un forEach(). 
En ambdós casos imprimiu per pantalla els noms de les 
fruites (al forEach, en majúscules).*/

//Crear array 

let fruits = ["Poma", "Plàtan", "Taronja", "Mango"];

//Afegir i eliminar elements al principi i al final
fruits.push("Kiwi");
fruits.unshift("Llimona");
console.log(fruits);

fruits.pop();
fruits.shift();

console.log(fruits);


//Utilització .slice()

let fruits2 = fruits.slice(1, 3);

console.log(fruits2);

//Recòrrer amb for i foreach

//FOR
let fLen = fruits.length;

for (let i = 0; i < fLen; i++) {
    console.log(fruits[i]); 
}
console.log("\n");

//FOREACH
function recorrerArray(value){
    console.log(value.toUpperCase());
}

fruits.forEach(recorrerArray);







