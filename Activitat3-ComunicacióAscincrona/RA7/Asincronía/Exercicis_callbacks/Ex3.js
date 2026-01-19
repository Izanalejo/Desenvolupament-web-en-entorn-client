/* Exercici 3
Aplicaràs una funció callback a tots els elements d’un array (simulant map).

Crea una funció transformarArray que rebi:
- Un array de números
- Un callback

Ha de retornar un nou array amb el resultat d’aplicar el callback a cada element. 
Ex de sortida esperada per [1,2,3]: [3, 6, 9]
 */

let nums = [1,2,3,4,5];

function transformarArray(nums, callback){
    let nuevoArray = [];
    for (let i = 0; i < nums.length; i++) {
        nuevoArray.push(callback(nums[i]));
    }
    return nuevoArray;
}

function multiplicar(num){
    return num * 6;
}

let resultado = transformarArray(nums, multiplicar);

console.log("[1,2,3,4,5] : [" +resultado + "]");
