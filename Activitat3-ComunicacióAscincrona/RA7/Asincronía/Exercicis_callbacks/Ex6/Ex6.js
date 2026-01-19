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
    console.log("Carregant...");
}

btnUser.addEventListener('click', () => {

});