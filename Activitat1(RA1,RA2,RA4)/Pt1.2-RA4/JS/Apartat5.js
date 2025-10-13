/*Apartat 5 – Mini exercici integrador (5 punts)
1. Creeu un array students amb 5 noms d’alumnes.
2. Creeu un string classList amb tots els noms separats per comes (join()).
3. Creeu un nou array shortNames amb els noms que tinguin menys de 5 caràcters 
(filter()).
Mostreu per consola l’array original, el string classList i l’array shortNames.*/

//Crear array de noms

let students = ["Joan", "Laura", "Marti", "Clara", "Pep"];

//Crear string classList
let classList = students.join();

console.log(classList);

//Crear ShortNames

let shortNames = [students.filter(function(students){
    return students.length < 5;
})];


console.log(shortNames);

