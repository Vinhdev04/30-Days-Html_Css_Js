// Test data
let mockDataa = [
  {
    name: "product 1",
    price: 999,
    images: "",
  },
];

// Mockdata from API
let products = document.querySelector(".products");

// Initialize
mockDataa.forEach((items) => {
  // <div class="list__product">
  //   <img class="media" src="./product011.png" />
  //   <div class="info">
  //     <div class="info__name">Product 01</div>
  //     <div class="info__price">99$</div>
  //   </div>
  // </div>;

  let itemProduct = document.createElement("div");
  itemProduct.classList.add("list__product");
  itemProduct.innerHTML = `
  <img class="media" src="${items.images}" />
    <div class="info">
      <div class="info__name">${items.name}</div>
      <div class="info__price">${items.price}</div>
    </div>`;

  products.appendChild(itemProduct);
});

// Call API
