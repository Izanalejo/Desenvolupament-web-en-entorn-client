// TEORIA D'OBJECTES

let person = {
  firstName: "Dani",
  lastName: "Garcia",
  age: 20,
  eyeColor: "blau"
};

console.log(typeof(person)); //Object

console.log(person.age);
console.log(person.age = 18);
console.log(person.age);

//Es pot afegir una altra propietat a un objecte ja creat
console.log(person.isAdmin = true);
console.log(person.isAdmin);


//Recòrrer les propietats
for (let key in person) { 
  // claves 
  console.log( key ); // firstName, lastName, age, eyeColor, isAdmin
  // valores de las claves 
  console.log( person[key] ); // Dani, Garcia, 20, green, true
}

console.log(person);




