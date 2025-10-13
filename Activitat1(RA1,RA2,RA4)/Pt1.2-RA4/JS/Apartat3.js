/*Apartat 3 – Mètodes avançats d’array (5 punts)
1. Creeu l’array numbers format pels números 4, 9, 16, 25, 29.
2. Feu servir filter() per obtenir els valors majors de 18.
3. Feu servir map() per obtenir un nou array amb el doble de cada número.
4. Feu servir some() per saber si hi ha algun número més gran que 30.
5. Mostreu els resultats amb console.log().*/

//Crear array 
let numbers = [4, 9, 16, 25, 29];

//Imprimir majors a 18 amb .filter()

function major1De18(number){
    return number > 18;
}

console.log(numbers.filter(major1De18));

// Fer servir .map

function numberPer2(number){
    return number * 2;
}
console.log(numbers.map(numberPer2));

//Fer servir .some()

function majors30(number){
    return number > 30; 
}

let someOver30 = numbers.some(majors30);

console.log(someOver30);






