//1.pedra 2.paper 3.tisora
let ordinador = Math.floor(Math.random()*3+1);


//Eleccio usuari

let usuari;

do {
    usuari = prompt("Tria un numero: 1.pedra, 2.paper o 3.tisora: ");
} while (isNaN(usuari) || usuari< 1 && usuari >3);

//Què ha escollit cadascú
let ppt;
if(ordinador == 1){
    ppt = "Pedra";
}else if(ordinador == 2){
    ppt = "Paper";
}else if(ordinador == 3){
    ppt = "Tisora";
}
console.log(`La màquina ha escollit: ${ppt}`)

let miOpcio

if(usuari == 1){
    miOpcio = "Pedra";
}else if(usuari == 2){
    miOpcio = "Paper";
}else if(usuari == 3){
    miOpcio = "Tisora";
}
console.log(`Has escollit: ${miOpcio}`)


if(ordinador == usuari ){
    console.log("Empat");
}

if(ordinador == 3 && usuari == 2 || ordinador == 2 && usuari == 1 || ordinador == 1  && usuari == 3 ){
    console.log("Guanya la web");
}else if(ordinador == 1 && usuari == 2 || ordinador == 2 && usuari == 3 ||ordinador == 3 && usuari == 1){
    console.log("Has guanyat!!");
}

