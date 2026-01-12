let moneda = prompt("Quina moneda vols convertir? ( 1- Euro a Dòlars 2-Euro a Lliures)");
let quantitat = prompt("Quina cuantitat vols convertir?");

let euroDolar= quantitat;
let euroLliura= quantitat;
if(moneda == 1){
    quantitat *= 1.18; 
}else if(moneda == 2){
    quantitat *= 0.87;
}
switch (moneda) {
    case "1":
        console.log(`${euroDolar} euros equivalen a ${quantitat} dolars}`);
        break;
    case "2": 
        console.log(`${euroLliura} euros equivalen a ${quantitat} lliures}`);
        break;
    default:
        break;
}