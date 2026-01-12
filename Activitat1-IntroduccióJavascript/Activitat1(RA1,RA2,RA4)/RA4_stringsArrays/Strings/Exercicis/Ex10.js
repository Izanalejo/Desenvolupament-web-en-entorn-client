"use strict";

let demanar = prompt("Introdueix nom i cognom: ");

let separar = demanar.split(" ");

console.log(separar);
console.log(`El nom és: ${separar[0]}`);
console.log(`El cognom és: ${separar[1]}`);
