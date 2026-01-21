/* Exercici 7
Es vol crear una pàgina web que gestioni una llista de tasques com si fos una estructura de pila, i no pas de cua. És a dir, les noves tasques han d’aparèixer les primeres.
Funcionament:
- L’usuari escriu una tasca en un textbox i prem Afegir
- El botó es desactiva
- Es simula una càrrega (1,5 segons)

Quan acaba la càrrega:

- La tasca s’afegeix a la llista (<ul>)
- Es neteja l’input
- El botó es torna a activar
- El què fer amb la tasca (crear <li>, afegir botó eliminar…) s’ha de fer amb un callback.
 */

const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");


function simulateLoading(task, callback) {
    setTimeout(() => {
        callback(task);
    }, 1500);
}

function createTask(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(deleteBtn);

    list.prepend(li);

    // Netejar input i activar botó
    input.value = "";
    button.disabled = false;
}

button.addEventListener("click", () => {
    const taskText = input.value.trim();

    if (taskText === "") return;

    // Desactivar botó
    button.disabled = true;

    // Simular càrrega 
    simulateLoading(taskText, createTask);
});