// ============================
// DADES (10 productes)
// ============================
const PRODUCTS = [
  { id: "p1",  name: "Cafè en gra (500g)",     price: 6.90,  rating: 4.7, img: "./images/coffee.jpg" },
  { id: "p2",  name: "Aigua mineral (6x1,5L)", price: 3.80,  rating: 4.5, img: "./images/water.jpg" },
  { id: "p3",  name: "Oli d’oliva verge (1L)",  price: 9.40,  rating: 4.8, img: "./images/olive-oil.jpg" },
  { id: "p4",  name: "Arròs basmati (1kg)",     price: 2.95,  rating: 4.6, img: "./images/basmati.jpg" },
  { id: "p5",  name: "Llet semidesnatada (1L)",  price: 1.20,  rating: 4.2, img: "./images/milk.jpg" },
  { id: "p6",  name: "Pa de motlle integral",   price: 2.10,  rating: 4.4, img: "./images/bread.jpg" },
  { id: "p7",  name: "Iogurt natural (4u)",     price: 2.60,  rating: 4.3, img: "./images/yoghurt.jpg" },
  { id: "p8",  name: "Tomàquet triturat (3x400g)", price: 2.50, rating: 4.1, img: "./images/tomatoes.jpg" },
  { id: "p9",  name: "Plàtans (1kg)",           price: 1.95,  rating: 4.9, img: "./images/bananas.jpg" },
  { id: "p10", name: "Xocolata negra 80% (100g)", price: 1.75, rating: 4.8, img: "./images/chocolate.jpg" },
];

// ============================
// ELS ELEMENTS DEL DOM
// ============================
const productsGrid   = document.getElementById("productsGrid");
const cartCountEl    = document.getElementById("cartCount");
const cartSummaryEl  = document.getElementById("cartSummary");
const cartTbody      = document.getElementById("cartTbody");
const cartTotalEl    = document.getElementById("cartTotal");
const btnClear       = document.getElementById("btnClear");
const btnBuy         = document.getElementById("btnBuy");


const purchaseDateEl = document.getElementById("purchaseDate");
const purchaseListEl = document.getElementById("purchaseList");
const btnAcceptBuy   = document.getElementById("btnAcceptBuy");





// ============================
// INICIALITZACIÓ UI
// ============================
renderProductsGrid();


// ============================
// RENDER PRODUCTES (cards)
// ============================
function renderProductsGrid() {
  productsGrid.innerHTML = "";
  for (const p of PRODUCTS) {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

    col.innerHTML = `
      <div class="card h-80 shadow-sm">
        <img class="card-img-top prod-img" src="${p.img}" alt="${p.name}" width="80px" height="80px"/>
        <div class="card-body d-flex flex-column">
          <h6 class="card-title mb-1">${p.name}</h6>
          <div class="text-muted small mb-2">Valoració: ${p.rating} ★</div>
          <div class="mt-auto d-flex align-items-center justify-content-between gap-2">
            <div class="fw-bold">${p.price} €</div>
            <button class="btn btn-primary btn-sm" id="${p.id}" id="btnAnadir">Afegir</button>
          </div>
        </div>
      </div>
    `;

    productsGrid.appendChild(col);

    //Creación de el string que saldrá al pulsar el botón añadir
    let producto = PRODUCTS.find(producto => producto.id == p.id);
    let texto = `${producto.name} - ${producto.price} `

    let afegirButton = document.getElementById(p.id);
    
    //addEventListener para añadir el producto seleccionado a el carrito
    afegirButton.addEventListener('click', () => {
      let productoSel = texto;
      let mostrarP = document.createElement('div');
      mostrarP.style.border = "1px solid black";
      mostrarP.textContent += texto;
      cartTbody.appendChild(mostrarP);

      let boton = document.createElement('button');
      boton.textContent = "Eliminar";
      boton.style.backgroundColor = "red";
      cartTbody.appendChild(boton);

      boton.addEventListener('click', () => {
        mostrarP.style.display= "none";
        boton.style.display = "none";
      })

      console.log(productoSel);

    });

    btnClear.addEventListener('click', () => {
      cartTbody.style.display = "none";

    });


   
  }
}


    


