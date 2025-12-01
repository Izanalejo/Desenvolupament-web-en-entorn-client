//Recollida d'IDs
const missatge = document.getElementById('resultat');
const btn1 = document.getElementById('btn1');
let d2,d3, d4;

btn1.addEventListener('click', () =>{
    const data = document.getElementById('data').value; //És un string
    d2 = new Date(data); //Creo una data a partir d'un string que ens ve del formulari
    //alert(data);
    alert(d2);
});

//recullo la data d'avui i d'ara
let  d = new Date(); // <--Ara mateix
d2 = new Date("2022-03-25"); // <--una data escollida per mi
//Creo una data molt concreta amb hores minuts i segons, però, els mesos són de 0 a 11 on 0 = Gener i 11= Desembre
d3= new Date(2021,11,24,13,9,30); // 24/11/2021 a les 13:09:30
d4= new Date(2025)
//alert(d4);


//Sortida de resultats
/* missatge.innerHTML= d;*/
//missatge.innerHTML= d3;//d.toString(); //sale lo mismo
//missatge.innerHTML=d.toDateString()
//missatge.innerHTML=d.toISOString() //Format ISO 8601
//missatge.innerHTML=d.toLocaleDateString() // <--Passo data a string en format local
//missatge.innerHTML=d.toLocaleString() // <--Data local + afegeix hora minuts i segons
//missatge.innerHTML=d.toLocaleTimeString() // <--Hora minuts i segons en format local
//missatge.innerHTML=d.getTime() // <--Un mes menys
d.setFullYear(2023); //Per canviar alguna cosa d'una data ja creada 
missatge.innerHTML=d;