// TEORIA DE FUNCIONS

//Hi ha funcions integrades com alert(message), prompt(message, default)

//Cridar una variable local
function showMessage() {

    let message = "Hola, ¡Soy JavaScript!";// variable local

  alert( message );

}
showMessage();  // Hola, ¡Soy JavaScript!

// Cridant a una variable global, de fóra de la funció

let userName = 'Juan';

function mostrarMissatge() {

   let message = 'Hola, ' + userName;

   alert(message);

}

mostrarMissatge(); // Hola, Juan

// Amb paràmetres d'entrada però sense res de sortida

function showMessage(from, text) {

    from = '*' + from + '*'; // hace que "from" se vea mejor

  alert( from + ': ' + text );

}

let from = "Ann";

showMessage(from, "Hola"); //cridem la funció i li passem dos valors


//Amb paràmetres d'entrada i retornant valors

function checkAge(age) {

   if (age > 18) {

         return true;

   } else {

        return confirm('¿Tienes permiso de tus padres?');

   }

}

let age = prompt('¿Qué edad tienes?', 18);

if ( checkAge(age) ) {

    alert( 'Acceso otorgado' );

} else {

   alert( 'Acceso denegado' );

}

//FUNCIONS ANÒNIMES O EXPRESSIÓ

// Anonymous function assigned to a variable
var anonima = function() { // És anonima perquè estem nombrant a la variable, no a la funció
  console.log("This is an example of an anonymous function.");
};

// Invoking the anonymous function
anonima();

//FUNCIONS FLETXA O ARROW FUNCTION
/* Les Arrow Functions, introduïdes a ECMAScript 6 (ES6), proporcionen una sintaxi més concisa per escriure funcions.

Són especialment útils per a funcions curtes i amb una sola línia.

Es fan servir MOLTÍSSIM en les funcions iteratives d'arrays. Per exemple, la funció map*/

const numbers1 = [45, 4, 9, 16, 25];
const numbers4 = numbers1.map(x =>x*4); //estic multiplicant per 4 cada valor de l'array i ho guardo a l'array numbers4
console.log(numbers4);

//o la funció filter (entre d'altres):

const ages = [30, 10, 2, 20];

const over18= ages.filter(x=> x>=18); //em retorna només els valors de l'array ages que compleixen 
console.log(over18);

