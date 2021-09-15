function showGridView(prods) {
  cart = read("cart");
  let cardContainer = document.getElementsByClassName("container")[0];
  cardContainer.innerHTML = "";
  if (prods.length == 0) {
    cardContainer.innerHTML =
      "<div class='noResults'> <p><h3>No search results ...  try again</h3></p><br><br></div>";
  }
  prods.forEach(function (product) {
    let card = document.createElement("div");
    let cardImage = document.createElement("img");
    let firstRowContainer = document.createElement("div");
    let secondRowContainer = document.createElement("div");
    let cardName = document.createElement("h3");
    let cardPrice = document.createElement("span");
    let cardCategory = document.createElement("span");
    let addBtn = document.createElement("button");

    card.appendChild(cardImage);
    firstRowContainer.appendChild(cardName);
    firstRowContainer.appendChild(cardPrice);
    card.appendChild(firstRowContainer);
    secondRowContainer.appendChild(cardCategory);
    secondRowContainer.appendChild(addBtn);
    card.appendChild(secondRowContainer);

    card.className = "card";
    cardImage.className = "card-image";
    firstRowContainer.className = "first-row-container";
    secondRowContainer.className = "second-row-container";
    cardPrice.className = "item-price";
    addBtn.className = "addBtn";

    cardContainer.appendChild(card);
    cardImage.src = product.imageURL;
    cardName.textContent = product.name;
    cardPrice.textContent = "$" + product.price;
    cardCategory.textContent = product.category;
    if (cart.findIndex(findItem, product.id) == -1) {
      addBtn.innerHTML = '<i class="fa fa-cart-plus" aria-hidden="true"></i>';
    } else {
      addBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
      addBtn.disabled = true;
    }

    addBtn.addEventListener("click", function () {
      product.quantity = 1;
      cart.push(product);
      addBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';

      save(cart, "cart");
      addBtn.disabled = true;
    });
  });
} //end of showProds function

function findItem(v) {
  return v.id == this;
}

let viewBtns = document.querySelectorAll(".view-btn");
for (var i = 0; i < viewBtns.length; i++) {
  viewBtns[i].addEventListener("click", function (event) {
    var buttonSelected = event.target;

    for (var i = 0; i < viewBtns.length; i++)
      viewBtns[i].classList.remove("selected");

    buttonSelected.classList.add("selected");
  });
  viewBtns[i].addEventListener("click", function (event) {
    var buttonSelected = event.target;
    if (buttonSelected.id === "list-view-btn") {
      let showWay = read("showWay");
      save([{ customer: "List", cart: showWay[0].cart }], "showWay");
      if (result.length > 0) {
        showProds(result);
      } else {
        showProds(products);
      }
    } else if (buttonSelected.id === "grid-view-btn") {
      let showWay = read("showWay");
      save([{ customer: "Grid", cart: showWay[0].cart }], "showWay");
      if (result.length > 0) {
        showProds(result);
      } else {
        showProds(products);
      }
    }
  });
}

function showProds(prod) {
  let showWay = read("showWay");
  if (
    showWay.length == 0 ||
    (showWay.length > 0 && showWay[0].customer == "Grid")
  ) {
    showGridView(prod);
    document.getElementById("list-view-btn").classList.remove("selected");
    document.getElementById("grid-view-btn").classList.add("selected");
  } else {
    showListView(prod);
    document.getElementById("grid-view-btn").classList.remove("selected");
    document.getElementById("list-view-btn").classList.add("selected");
  }
  if (showWay.length == 0) {
    save([{ customer: "Grid", cart: "Grid" }], "showWay");
  }
}

showProds(products);

let AscRadio = document.getElementById("priceAsc");
let DescRadio = document.getElementById("priceDesc");

AscRadio.addEventListener("change", function () {
  let prod2 = [];
  if (result.length > 0) {
    prod2 = [...result];
  } else {
    prod2 = [...products];
  }

  prod2.sort((a, b) => a.price - b.price);
  showProds(prod2);
});

DescRadio.addEventListener("click", function () {
  let prod2 = [];
  if (result.length > 0) {
    prod2 = [...result];
  } else {
    prod2 = [...products];
  }

  prod2.sort((a, b) => b.price - a.price);
  showProds(prod2);
});

function showListView(prods) {
  let cardContainer = document.getElementsByClassName("container")[0];
  cardContainer.innerHTML = "";
  cart = read("cart");

  let cards = document.createElement("div");

  cardContainer.appendChild(cards);

  let titles = document.createElement("div");
  let productTitle = document.createElement("span");
  let categoryTitle = document.createElement("span");
  let priceTitle = document.createElement("span");
  let addToCartTitle = document.createElement("span");

  titles.appendChild(productTitle);
  titles.appendChild(categoryTitle);
  titles.appendChild(priceTitle);
  titles.appendChild(addToCartTitle);

  cards.appendChild(titles);

  productTitle.textContent = "Product";
  categoryTitle.textContent = "Category";
  priceTitle.textContent = "Price";
  addToCartTitle.textContent = "Add To Cart";

  titles.className = "titles2";
  productTitle.className = "product-title";
  categoryTitle.className = "category-title";
  priceTitle.className = "price-title2";
  addToCartTitle.className = "add-to-cart-title";

  if (products.length == 0) {
    let titlesContainer = document.getElementsByClassName("titles")[0];
    titlesContainer.remove();
  }
  prods.forEach(function (product) {
    let productRow = document.createElement("div");
    let imageContainer = document.createElement("div");
    let productImage = document.createElement("img");
    let productName = document.createElement("sapn");
    let productPrice = document.createElement("span");
    let cardCategory = document.createElement("span");
    let addBtn = document.createElement("button");

    productImage.src = product.imageURL;
    productName.textContent = product.name;
    productPrice.textContent = "$" + product.price;
    cardCategory.textContent = product.category;
    if (cart.findIndex(findItem, product.id) == -1) {
      addBtn.innerHTML = '<i class="fa fa-cart-plus" aria-hidden="true"></i>';
    } else {
      addBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
      addBtn.disabled = true;
    }

    addBtn.addEventListener("click", function () {
      product.quantity = 1;
      cart.push(product);
      addBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';

      save(cart, "cart");
      addBtn.disabled = true;
    });

    imageContainer.appendChild(productImage);
    productRow.appendChild(imageContainer);
    productRow.appendChild(productName);
    productRow.appendChild(cardCategory);
    productRow.appendChild(productPrice);
    productRow.appendChild(addBtn);

    productRow.className = "product-row";
    productRow.classList.add("item");
    imageContainer.className = "image-container";
    productImage.className = "product-image";
    productName.className = "product-name";
    cardCategory.className = "product-category";
    addBtn.className = "addBtn";
    productPrice.className = "product-price2";
    productPrice.classList.add("price");
    addBtn.classList.add(".product-add-to-cart");

    cards.appendChild(productRow);
  });
  cards.className = "cards-list";
  cards.classList.add("items-container");
}
