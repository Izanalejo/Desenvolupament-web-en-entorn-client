/* Exercici 2
Crea una funció avaluarNota que rebi:
- una nota (0–10)
- dos callbacks: aprovatCallback i suspesCallback

Si la nota és ≥ 5, executa el callback d’aprovat. Si no, el de suspès.
Ex de sortida esperada amb un 5: “aprovat”. Si és inferior, suspès
 */

function avaluarNota(nota, aprovatCallback, suspesCallback){
    if(nota >= 5){
        aprovatCallback();
    }else if(nota < 5){
        suspesCallback();
    }
    
}

function aprovat(){
    console.log("Has aprovat!");
}
function suspes(){
    console.log("Has suspès...")
}


avaluarNota(2.5, aprovat, suspes);