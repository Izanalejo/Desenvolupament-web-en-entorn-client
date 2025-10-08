/*

"use strict"//<-- està al començament de tot


// alert("Estic a dins del script"); 
// alert("Hola!");

//Creació de variables
var message = "DAW2"; //<-- La més clàsica 
let missatge; // <-- La més moderna

//instruccions
missatge = "Classe de programació client";
//alert(message);
//alert(missatge);

//Creació de constants
const COLOR = "groc"; // <-- Normalment en majúscules
//alert(COLOR);

function prova(){
    let mensaje; //Creada dins d'una funció: LOCAL
}

//alert(mensaje); // No està definida fora de la funció prova

//TIPUS DE DADES

//Tipus Number
let num1 = 123;
num1 = 45.67;

//alert(num1);
//Tipus BigInt
let num2 = 123456789012345678901234567890n;
//alert(num2);

//Tipus String
let salutacio = 'Hello!!';
salutacio = "hello world";
//alert (`Aquest número és ${num1}`);
//alert("Aquest número és " + num2);

//Tipus booleà
let flag = true;

//Tipus null 
let nada=null;

//Tipus undefined
let age;
//alert(age); // He declarat però no he assignat valor

//Tipus object
//Es veurà més endavant

//alert(typeof flag);

//Comunicar-te a través de la consola del dev tools PROGRAMADOR
console.log(salutacio);

//Operadors bàsics
//+,-, +, /

console.log(num1+num1);

//Residu d'una divisió: %
console.log(5%2);

//Potència

console.log(num1**2);

console.log(Math.pow(num1,2));

//Concatenar
console.log("Hola "+ "alumne!");

num1 ++;
console.log(num1);

console.log("2"+ 1);//Interpreta cadena: 21
console.log(Number("2")+1);

//Alternativas

if(num1 > 10) console.log("Major que 10");

//És millor ficar les { }
if(num1 > 10){
    console.log("Major que 10");
} 

//alternatives: alternatives dobles
if(num1 > 10){
    console.log("Major que 10");
}else{
    console.log("Menor que 10");
} 

if(34>20){
    console.log("Es major que 20");
}else if (34 > 10){
    console.log("És major que 10 i menor que 20");
}


//alternatives: alternativa múltiple
let a = 2 + 2;

switch(a){
    case 3:
        alert( 'Muy pequeño');
        break;
    case 4:
        alert('Exacto!');
        break;
    case 5: 
        alert('Muy grande')
        break;
    default: 
    alert("Desconozco estos valores");
}
 
//Operadors ternaris (No recomanable)
var vocal = (10>3)? 'a' : 'b';
alert(vocal);

//bucles
var i=50;
while(i>=0){
    console.log(i);
    i--; //i = i - 1;
}

var i = -2;
do{
    console.log(i);
    i--;
}while(i>=0);


let j;
for ( j = 0; j < 3; j++) {
    alert(j);
}

for ( let k = 0; k < 10; k++) {
    alert(`això és la k ${k}`);
}



for(let k = 0; k < 10; k++){
    
    if(k==1){
        continue; // se'n va directament a valorar la k
    }else{
        alert(`àixò és la ${k}`);
    }
    alert("Hola");


    if(k==1){
        continue; // se'n va directament a valorar la k
    }else{
        alert(`àixò és la k: ${k}`);
        alert("Hola")
    }
}

//DOCUMENTACIÓ INTERNA

//Només comentes una línia. És per al programador 

/*
Més d'una línia
Un comentari de programador: codi que no vols aue s'apliqui,
explicar-te un codi que t'ha costat o per aclarir alguna cosa que t'ha costat entendre.
*/
//Eleccio usuari

//Eleccio usuari

//Eleccio usuari

/*let usuari;

do {
    usuari = prompt("Tria un numero: 1.pedra, 2.paper o 3.tisora: ");
} while (isNaN(usuari) || usuari< 1 && usuari >3);

//Elecció ordinador
*/



