//Demanar número
let num; 
let multiplicacio;

 //Controlar si és un número
 do {
    num = prompt("Posa un número: ");
 } while (isNaN(num));
for (let i = 0; i <= 10; i++) {
    multiplicacio = num * i;
    console.log(`${num} * ${i} = ${multiplicacio}`);
}