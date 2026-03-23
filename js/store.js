const BASE_URL = "https://fakestoreapi.com/products";
let products = [];

async function getData() {
 const res = await fetch(BASE_URL)
    products = await res.json()
  // .catch((error) => console.log(error.message));
}
window.addEventListener("DOMContentLoaded" , async()=>{

await getData();

// productsGridContainer
const productsGridContainer = document.createElement("div");
productsGridContainer.className = "p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
products.forEach((prod) => {
  // create product card
  const productCard = document.createElement("div");
  productCard.className = "overflow-hidden h-96 flex flex-col gap-2 rounded bg-slate-200"
  productCard.innerHTML = `
  <div class = "h-3/5">
    <img class ="h-full " src="${prod.image}" alt="${prod.title}" >
  </div>
  <div>
    <h3>${prod.title}</h3>
    <h4>${prod.price}</h4>
    <p>${prod.description.substr(30)}</p>
    
  </div>
  
  `;
  // append card to gridContainer
  productsGridContainer.appendChild(productCard)
});

document.body.appendChild(productsGridContainer)
})