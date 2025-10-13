/*Apartat 4 – Funcions i Arrow Functions (5 punts)
1. Creeu una funció fletxa add(a,b) que retorni la suma.
2. Creeu una funció fletxa square(x) que retorni el quadrat d’un número.
3. Creeu una funció fletxa randomNumber() que retorni un número aleatori 
entre 0 i 1.*/

//Funcio flexta que retorna la suma de a i b
let add = (a, b) => a+b;
console.log((add(2, 3)));

//Funció flexta que retorni el quadrat d'un número

let square = (x) => x*x ;

console.log(square(5));

//Funció flexta que retorni un numero a l'atzar

let randomNumber = () => Math.random();

console.log(randomNumber());

