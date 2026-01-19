/* Exercici 4
Crea una funció dividir que rebi:
- dos números
- un callback d’èxit
- un callback d’error

Si el divisor és 0, executa el callback d’error amb un missatge.
Si no, executa el callback d’èxit amb el resultat.
Ex. de sortida esperada: “Error: No es pot dividir per zero”
 */

function dividir(num1, num2, exitCallback, errorCallback){
    if(num2 == 0){
        errorCallback();
    }else{
        exitCallback();
        let divisio = num1 / num2;
        console.log("El resultat de la divisió és: " + divisio);
    }
}

function errorCallback(){
    console.log("No es pot dividir per zero!!");
}

function exitCallback(){
    
    console.log("Ben fet!");
}

dividir(2,0,exitCallback,errorCallback);