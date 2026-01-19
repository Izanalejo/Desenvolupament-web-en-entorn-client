/* Exercici 1
Crea una funció anomenada processarNombre que:
- Rebi dos paràmetres:
    - Un número (num)
    - Un callback (callback).

La funció processarNombre ha de:
- Multiplicar el número per 2
- Passar el resultat al callback
El callback ha de mostrar el resultat per consola amb el missatge i el programa s’invoca fent una crida a processarNombre:
 El resultat és: X */


function processarNombre(num, callback){
    let mult = num * 2;
    callback(mult);
}

function mostrar(resultat){
    console.log("El resultat és: " + resultat)
};
processarNombre(4, mostrar);