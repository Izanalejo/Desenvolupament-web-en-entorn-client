//Arribo als inputs directament per l'id
let textInput = document.getElementById("textInput");
let repeat = document.getElementById("repeat");
const bloc = document.getElementById("colors");
const boto1 = document.getElementById("btn1");
const boto2 = document.getElementById("btn2");


/* textInput.addEventListener("input", (event) => {
    if(/[0-9]/.test(event.target.value)){
        console.log(event.target);
       alert("Has escrit números!");
     }
}); */

textInput.addEventListener("keydown", (event) => {
    if(!isNaN(event.key)){
       event.preventDefault();
     }
});


repeat.addEventListener("paste", (event) => {
    event.preventDefault();
    alert("No es pot enganxar text aquí!");
});

//Quan tot el DOM estigui carregat
bloc.addEventListener("mouseover", () => {
    bloc.style.backgroundColor = "red";
});

bloc.addEventListener("mouseout", () => {
    bloc.style.backgroundColor = "white";
});


//

boto1.addEventListener("click",pulsar);
boto2.addEventListener("click", pulsar);
    
function pulsar(event){

    alert(event.target.id);
}