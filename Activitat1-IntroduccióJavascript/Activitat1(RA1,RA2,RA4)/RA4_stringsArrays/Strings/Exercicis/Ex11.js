let frase = prompt("Escriu una frase");
let paraula = prompt("Escriu una paraula");
//Mirar si la palabra esta en la frase
let revision = frase.includes(paraula);
if(revision == true){
    revision ='Si';
}else if(revision == false){
    revision ='No';
}
console.log(`La palabra forma parte de la frase: ${revision}`);


frase=frase.replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u' )
console.log(frase);

//Reemplazar espacios por guiones
console.log(frase.replace(/ /g, '-' ));

//let iscorreu=frase.match([a-zA-Z0-9._%+-])
