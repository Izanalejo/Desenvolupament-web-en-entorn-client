//Seleccionen el productList de l'HTML
const productList = document.getElementById('products');

//Creació de la funció getProducts
async function getProducts() {
  try {
    //Fem la petició amb async a la API
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);

    //Recorrem el JSON on están les dades i creem els divs dinàmicament
    data.forEach((data) => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
        <div class="product">
            <img class="img" src="${data.image}">
            <h3 class="titol">${data.title}</h3>
            <p class="preu">${data.price}€</p>
            <small>${data.category}</small>
        </div>
        `;
        productList.appendChild(div)
    });
  } catch (error) {
    console.error("Error en obtenir els productes", error);
  }
}

//Cridem a la funció
getProducts();


