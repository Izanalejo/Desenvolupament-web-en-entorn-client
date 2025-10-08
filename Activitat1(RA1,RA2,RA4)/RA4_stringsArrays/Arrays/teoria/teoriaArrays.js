//Declaració de Arrays en JS

// const cars = ["Saab", "Volvo", "BMW"];

//o equivalentment i mçes endreçat
const cars = [
  "Saab",
  "Volvo",
  "BMW"
];

//Obtenir valor (A través e la clau)

console.log(cars[0]);

let a = cars[3];

console.log(a); // No funciona

//Són heterogènics, es poden afegir diferents tipus de dades

const cotxes = new Array("Saab", "Volvo", 3);


// Mostrar elements seprats per coma
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let myList = fruits.toString();
console.log(myList); 


//Mostra lonigutd de un Array

let fruitLenght = fruits.length
console.log(fruitLenght);

//Saber l'últim element

let fruit = fruits[0];//Banana
fruit = fruits[fruits.length - 1];//Mango
console.log(fruit);

// Recòrrer amb for
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

console.log(text);


//Recòrrer amb foreach

function myFunction(value) {
  texto += "<li>" + value + "</li>";
  console.log(texto);
}

let texto = "<ul>";
fruits.forEach(myFunction);
texto += "</ul>";

// MÈTODES DE ARRAYS

//Afegir o treure l'últim element

let frutas= ["Banana", "Orange", "Apple", "Mango"];
frutas.pop();//["Banana", "Orange", "Apple"]
console.log(frutas);
frutas.push("Kiwi");//["Banana", "Orange", "Apple","Kiwi"]
console.log(frutas);

//Afegir o treure el primer element

fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.shift(); //["Orange","Apple","Mango"]
console.log(fruits);
fruits.unshift("Lemon");["Lemon","Banana", "Orange", "Apple", "Mango"];
console.log(fruits);


//Agafarparts d'un array
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
citrus = fruits.slice(3);// ["Apple", "Mango"];
console.log(citrus);
citrus = fruits.slice(1, 3); //"[Orange", "Lemon"] Últim no inclòs
console.log(citrus);

//Buscar dins d'un array


fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
console.log(position);

let numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction); 
console.log(first);

// o també numbers.find(x => x > 18);

function myFunction(value, index, array) {
  return value > 18;
}

//Endreçar i donar volta a un array
//PER A STRINGS
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); //["Apple","Banana","Mango","Orange"]
console.log(fruits);
fruits.reverse(); //["Mango","Apple","Orange","Banana"]
console.log(fruits);

//PER A NÚMEROS
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});//[1,5,10,25,40,100]
console.log(points);
points.sort(function(a, b){return b - a});//[100,40,25,10,5,1]
console.log(points);

//Funció map
function myDouble(value) {
  return value * 2;
}

numbers = [45, 4, 9, 16, 25];
let numbers2 = numbers.map(myDouble); 
console.log(numbers2);//i dóna [90,8,18,32,50]

//Equivalent amb arrow function
let numbers3 = numbers.map(x=> x*2); 
console.log(numbers3);

//Devolver números mayores a 18

const over18 = numbers.filter(myOver);
console.log (over18);

function myOver(value, index, array) {
  return value > 18;
}


let numbers10 = [5,4,9,1,2];

let someOver182 = numbers10.some(myOver);

console.log(someOver182);

//Copiar un array

const arr1 = [1, 2, 3];
const arr2 = [...arr1];/*Així es desvinculen els arrays. Si es fa arr2 = arr1 i canviem
                    alguna cosa de arr1, també es canviará de arr2.*/
console.log(arr2); 


