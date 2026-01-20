/* Exercici 6
Quan l’usuari premi el botó “Carregar usuari”:
El botó s’ha de desactivar

- S’ha de mostrar el missatge “Carregant…”
- Després de 2 segons:
- Es mostra el nom de l’usuari
- El missatge canvia a color verd
- El botó es torna a activar

El que passa després de la càrrega s’ha de fer mitjançant un callback
 */

let btnUser = document.getElementById('btnUser');

function carregarUsuari(){
    let div = document.createElement('div');
    let titulo = document.createElement('h4');
    titulo.textContent = "Carregant...";
    document.body.appendChild(titulo);
    setTimeout(() => {
    titulo.style.color = "green";
    }, 2000);
}
function task2(callback){
    setTimeout(() => {
    let div = document.createElement('div');
    let titulo = document.createElement('p');
    titulo.textContent = "Nom de l'usuari: Izan";
    document.body.appendChild(titulo);
    }, 2000);
}

btnUser.addEventListener('click', () => {
    document.getElementById("btnUser").disabled = true;
    carregarUsuari();
    task2();
    setTimeout(() =>{
    document.getElementById("btnUser").disabled = false;
    }, 2000);
    
});