/* Exercici 5
Crea una funció simularCarrega que:
- rebi un callback
- mostri "Carregant..." immediatament


després de 2 segons executi el callback amb el missatge "Dades carregades"
Fes servir setTimeout per simular asincronia.
 */

function task1(){
    console.log("Carregant...");
}

function task2(callback){
    setTimeout(() => {
        console.log("Dades carregades!");
    }, 2000);
}


task1();
task2();
