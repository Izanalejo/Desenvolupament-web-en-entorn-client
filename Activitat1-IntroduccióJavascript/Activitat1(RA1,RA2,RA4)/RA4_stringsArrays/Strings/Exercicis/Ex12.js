let dni = prompt('Introdueix un DNI: ');

let numero = dni.slice(0,8);
let letra=dni.slice(8);
letra = letra.toUpperCase();
let myArray = [T,R,W,A,G,M,Y,F,P,D,X,B,N,J,Z,S,Q,V,H,L,C,K,E];

if(myArray == numero % 23){
    console.log("El DNI es correcte")
}else{
    console.log("El DNI es incorrecte");
}

