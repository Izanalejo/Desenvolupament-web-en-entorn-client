//Demanar número
let num; // Variable global

//Controlar que sigui un número
do {
    num = prompt("Posa un número de 1 a 7: ");
} while (isNaN(num));
    //Posar a quin dia correspon
    switch (num) {
        case "1":
            console.log('Correspon a Dilluns');
            break;
        case "2":
            console.log("Correspon a Dimarts");
            break;
        case "3":
            console.log('Correspon a Dimecres');
            break;
        case "4":
            console.log('Correspon a Dijous');
            break;
        case "5":
            console.log('Correspon a Divendres');
            break;
        case "6":
            console.log('Correspon a Dissabte');
            break;
        case "7":
            console.log('Correspon a Diumenge');
            break;
        default:
            console.log('Valor no válido');
            break;
    }
