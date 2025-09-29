let i = 0;
let num4;
let resultado = 0;
do{
    num4 = prompt("Introduce un numero para calular su suma: ");
}while(isNaN(num4 || num4<0))

while(i <= num4){
    resultado += 1;
    i++; 
}
console.log(`El resultat és: ${resultado}`);
