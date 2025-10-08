let nota = prompt("Quina és la nota?"); //Per poder introduïr valors
if(isNaN(nota)){ //isNaN: Funcioi que controla si es o no un número
    alert("Format de resposta incorrecte!");
}else{ //entro només quan tingui un número
if(nota < 5){
    console.log ("Estàs suspès.");
}else if(nota >= 5 && nota < 7){
    console.log("Estàs aprovat");
}else if(nota >= 7 && nota < 9){
    console.log("Tens un notable");
}else if(nota >= 9 && nota <=10){
    console.log("Tens un excelent");
}else{
    console.log("Nota no vàlida");
}
}