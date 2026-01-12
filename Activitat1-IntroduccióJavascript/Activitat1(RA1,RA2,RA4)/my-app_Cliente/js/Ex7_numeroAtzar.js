
let aleatori = Math.floor((Math.random()*10)+1);
 

let num;
do{
    num=prompt("Dame un numero del 1 al 10: ")
}while(num!=aleatori || isNaN(num))

console.log("Ho has encertat!!!!"); 