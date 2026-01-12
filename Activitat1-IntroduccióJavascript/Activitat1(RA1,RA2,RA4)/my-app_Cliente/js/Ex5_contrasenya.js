let contrasenya = "javascript2024";
let correcte = false;
let intent;

do {
    intent = prompt("Introdueix la contrasenya: ");
    if(contrasenya == intent){
        console.log("Contrasenya correcte!");
        correcte = true;
    }else if(contrasenya != intent){
        console.log("Contrasenya incorrecte");   
    }
} while (correcte == false);

