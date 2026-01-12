//Crear cadenes

let text = "John Doe";
console.log(text);

console.log(text[5]);//Visualitzar una lletra en concret 
text[5]="J"; //No ho fa bé JS, les cadenes són només lectura.
console.log(text[5]); //Continuo amb la D

//Mostrar cadenes amb cometes --> Utilitzar \ \
    let text2= 'He is called \'Johnny\'';
    console.log(text2);

let text3= `He's often called "Johnny"`;

let firstName = "John";
let lastName = "Doe";
let text4 = `Welcome ${firstName}, ${lastName}!`;

//Mètodes interessants: obtenir parts d'una cadena
    let original = "Apple, Banana, Kiwi";
    let part = original.slice(7, 13); //Banana
    console.log(part);
    
    part = original.slice(7); //Banana, Kiwi
    console.log(part);
    part = original.substring(7, 13); //Banana --> substring es per caràcter, no per longitud
    console.log(part);

    part = original.substr(7, 6); //substr es longitud, no caràcter
    console.log(part);

    console.log(part.toUpperCase()); // Mayúsculas

    text = "Please visit Microsoft!";
    newText = text.replace("M", "W");//Please visit Wicrosoft!
    console.log(newText);

    text = "Please visit Microsoft and Microsoft!";
    newText = text.replace(/Microsoft/g, "W3Schools"); // Reemplazar todas las veces que lo encuentres (g de global)
    console.log(newText);

    text = "Please visit MicRoSoFt!";
    newText = text.replace(/MICROSOFT/i, "W3Schools"); // Remplazar dando igual la mayúsculas y minusculas (i de ignore)
    console.log(newText);


    text = "a,b,c,d,e,f";
    let myArray = text.split(",");
    console.log(myArray);
    
    console.log(myArray.reverse()); //Donarli la volta


    text = "Please locate where 'LOCATE' occurs!";
    index = text.indexOf("locate");//7
    console.log(index);
    ;//ain, AIN, ain, ain -->com és un array, pots mirar els cops que s'ha repetit
    console.log(text.match(/locate/gi));

