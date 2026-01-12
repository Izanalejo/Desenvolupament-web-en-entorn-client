let matriu = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Mostrar tots els valors en una sola línia
let tots = [];
for (let fila of matriu) {
  for (let valor of fila) {
    tots.push(valor);
  }
}
console.log("Tots els valors:", tots.join(" "));

// Calcular la suma total
let suma = 0;
for (let fila of matriu) {
  for (let valor of fila) {
    suma += valor;
  }
}
console.log("Suma total:", suma);
