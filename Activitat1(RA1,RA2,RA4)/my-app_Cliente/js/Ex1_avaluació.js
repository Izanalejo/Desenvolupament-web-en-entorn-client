"use strict";


let nota = prompt("Introdueix la teva nota: ");

if (isNaN(nota)){
    console.log("Format de resposta no vàlid!!!");
}else{
if(nota < 5){
    console.log("Estàs suspès");
}else if(nota >= 5 && nota <= 6.9){
    console.log("Aprovat");
}else if(nota >= 7 && nota <= 8.9){
    console.log("Notable");
}else if(nota >= 9 && nota <= 10){
    console.log("Excel·lent");
}else{
    console.log("Nota no vàlida");
}
}



































/* 

let nota = prompt("Quina és la nota?"); //Per poder introduïr valors
if(isNaN(nota)){ //isNaN: Funció que controla si es o no un número
    alert("Format de resposta incorrecte!");
}else{ //entro només quan tingui un número
if(nota < 5){
    console.log ("Estàs suspès.");
}else if(nota >= 5 && nota < 7){
    console.log("Estàs aprovat");
}else if(nota >= 7 && nota < 9){
    console.log("Tens un notable");
}else if(nota >= 9 && nota <=10){
    console.log("Tens un excelent");
}else{
    console.log("Nota no vàlida");
}
} */