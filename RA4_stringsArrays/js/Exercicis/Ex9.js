let frase = prompt("Escriu una frase");
console.log(frase);
//Longitud amb espais
console.log(frase.length);
//Últim caràcter 
let total = frase.length;
console.log(frase[total-1]);
//Frase en majúscules
console.log(frase.toUpperCase());
//Longitud sense espais
let sinEspacios = frase.replace(/ /g, '');
console.log(sinEspacios.length);
