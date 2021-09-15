let cardContainer = document.createElement("div");

showSellerProduct();

function showSellerProduct() {
  cardContainer.innerHTML = "";
  let cardSeller = document.getElementsByClassName("div__card")[0];

  products.forEach(function (productSeller, i) {
    let firstDiv = document.createElement("div");
    let seconedDiv = document.createElement("div");
    let firstInnerDiv = document.createElement("div");
    let seconedInnerDiv = document.createElement("div");
    let thirdDiv = document.createElement("div");

    let productImg = document.createElement("img");

    let productCardName = document.createElement("h3");
    let productDescription = document.createElement("h3");

    let productCategory = document.createElement("span");
    let productPrice = document.createElement("span");

    let deleteIcon = document.createElement("button");

    let editBtn = document.createElement("button");

    productImg.src = productSeller.imageURL;
    productCategory.textContent = productSeller.category;
    productCardName.textContent = productSeller.name;
    productDescription.textContent = productSeller.desc;
    productPrice.textContent = "$" + productSeller.price;
    deleteIcon.innerHTML = '<i class="fas fa-trash-alt"></i>';
    editBtn.setAttribute("id", "editProductBtn");
    editBtn.setAttribute("onclick", "editProd('" + productSeller.id + "')");
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';

    firstDiv.appendChild(productImg);
    seconedDiv.appendChild(productCardName);
    seconedDiv.appendChild(productPrice);
    firstInnerDiv.appendChild(productCategory);
    firstInnerDiv.appendChild(productDescription);
    seconedInnerDiv.appendChild(editBtn);
    seconedInnerDiv.appendChild(deleteIcon);
    thirdDiv.appendChild(firstInnerDiv);
    thirdDiv.appendChild(seconedInnerDiv);
    firstDiv.appendChild(seconedDiv);
    firstDiv.appendChild(thirdDiv);

    firstDiv.className = "product__card";
    productImg.className = "product__image";
    productPrice.className = "product__price";
    productCategory.className = "font__decoration";
    productDescription.className = "font__decoration";
    seconedDiv.className = "seconed__container";
    thirdDiv.className = "third__container";
    productCardName.className = "product__name";
    deleteIcon.className = "product__delete";
    editBtn.className = "product__edit";
    seconedInnerDiv.className = "icon__container";

    deleteIcon.addEventListener("click", function (event) {
      deleteProd(productSeller.id);
      showSellerProduct();
    });

    cardContainer.appendChild(firstDiv);
    cardSeller.appendChild(cardContainer);
  }); //end for each
  cardContainer.className = "products__view";
}
