const missatge = document.getElementById('date');
const missatge2 = document.getElementById('hora')

let date = new Date(); 

let meses = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"];



let myVar = setInterval(myTimer ,1000);
function myTimer() {
    const d = new Date();
    document.getElementById("data").innerHTML = d.toLocaleTimeString();
}

let frase = "Avui és " + date.getDay() + " de " + meses[date.getMonth()] + " del "+ date.getFullYear() + ", "; 

missatge.innerHTML= frase; 

missatge2.innerHTML = date.toLocaleTimeString();
