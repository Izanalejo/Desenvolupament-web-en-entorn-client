let tiradaDau = Math.floor(Math.random()*6+1);


let numUsuari;

do{
    numUsuari = prompt("Introdueix un número del 1 al 6");
}while(isNaN(numUsuari) || numUsuari < 1 || numUsuari > 6);

if(tiradaDau == numUsuari){
    console.log("Has guanyat!");
}else if(tiradaDau != numUsuari){
    console.log(`Has perdut, el número era ${tiradaDau}`);
}