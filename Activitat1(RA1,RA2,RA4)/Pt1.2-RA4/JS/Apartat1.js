/*Apartat 1 – Strings (4 punts)
1. Creeu dues variables: firstName i lastName.

2. Creeu un string amb la forma "Benvingut/da,
[firstName] [lastName]!" utilitzant template literals.

3.  Mostreu el missatge i la seva longitud.

4. Treballeu amb el text " JavaScript és divertit! 
" per aplicar trim(), toUpperCase() i replace(). 
Passeu tot a majúscules i substituïu 'fantàstic' 
per un altre adjectiu de la vostra preferència.
*/

//Crear variables

let firstName = "Izan";
let lastName = "Alejo";

//Crear string amb benvinguda 
let saludo = `Benvingut/da ${firstName} ${lastName}`;

//Mostrar benvinguda 
console.log(saludo);
console.log(saludo.length);

//Aplicar trim(), toUpperCase() i replace()

let text = " JavaScript és divertit! ";

console.log(text.replace("divertit", "genial").trim().toUpperCase());

