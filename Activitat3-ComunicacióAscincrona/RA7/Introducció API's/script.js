//Seleccionem l'element del DOM on pintarem els usuaris const userList = document.getElementById('userList);
const userList = document.getElementById("userList");

//Fem la petició a l'API

fetch("https://jsonplaceholder.typicode.com/users")/*,  {
  method: "GET",
  headers: {"Content-type": "application/json;charset=UTF-8"}
}) es opcional pero no esta de más */
    .then((response) => response.json())
    .then((users) => {
        console.log(users[2]);
        users.forEach((user) => {
            //Creem l'element li
            const li = document.createElement("li");
            li.innerHTML = `
            <strong>${user.name}</strong><br>
            <small>Email: ${user.email}</small><br>
            <small>Ciutat: ${user.address.city}</small>
            `;
            //Afegim el <li> a la llista
            userList.appendChild(li);
        });
    });