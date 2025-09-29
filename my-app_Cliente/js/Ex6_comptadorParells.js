let numero; 


do {
   numero = prompt("Introdueix un numero: ");
} while (isNaN(numero));

for (let i = 1; i <= numero; i++) {
    if(i%2 == 0){//Si el resultado de dividir entre 2 es 0
        console.log(i);
    }
}