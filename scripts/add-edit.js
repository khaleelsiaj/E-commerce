let add_but = document.getElementById("add-button");

products = read("products");
let idKey = 0;

if (!products.length) {
  idKey = 1;
} else {
  let lastItem = products[products.length - 1];
  idKey = Number(lastItem.id) + 1;
}
let name = document.getElementById("name");
let desc = document.getElementById("desc");
let price = document.getElementById("price");
let category = document.getElementById("category");
let imagUrl = document.getElementById("imagUrl");
let add_prod_form = document.getElementById("add-prod-form");
let idValue = document.getElementById("id");

add_but.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.value == "Add") {
    products.push({
      id: idKey,
      name: name.value,
      desc: desc.value,
      price: price.value,
      category: category.value,
      imageURL: imagUrl.value,
    });
    name.value = "";
    desc.value = "";
    price.value = "";
    category.value = "";
    imagUrl.value = "";

    save(products);
    showSellerProduct();
  } else if (e.target.value == "Save") {
    let ind = products.findIndex(findItem, idValue.value);
    products[ind] = {
      id: idValue.value,
      name: name.value,
      desc: desc.value,
      price: price.value,
      category: category.value,
      imageURL: imagUrl.value,
    };
    save(products);
    showSellerProduct();
  }
});

var modal = document.getElementById("addEditProductModal");

var btn = document.getElementById("addProductBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function (e) {
  let formTitle = document.getElementById("formTitle");
  let editBtn = document.getElementById("add-button");
  let cancelBtn = document.getElementById("cancelBtn");

  formTitle.innerText = "Add Product";
  editBtn.value = "Add";

  name.value = "";
  desc.value = "";
  price.value = "";
  category.value = "";
  imagUrl.value = "";

  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
  }
};

let editBtn = document.getElementById("editProductBtn");

function findItem(v) {
  return v.id == this;
}

function editProd(itemid) {
  products = read("products");
  console.log(products);
  let formTitle = document.getElementById("formTitle");
  let editBtn = document.getElementById("add-button");
  let cancelBtn = document.getElementById("cancelBtn");

  formTitle.innerText = "Edit Product";
  editBtn.value = "Save";
  cancelBtn.style.display = "block";

  modal.style.display = "block";
  iteminfo = products.find(findItem, itemid);
  idValue.value = itemid;
  name.value = iteminfo.name;
  desc.value = iteminfo.desc;
  price.value = iteminfo.price;
  category.value = iteminfo.category;
  imagUrl.value = iteminfo.imageURL;
}

function deleteProd(itemid) {
  let ind = products.indexOf(products.find(findItem, itemid));
  if (ind != -1) products.splice(ind, 1);
  save(products);
}

cancelBtn.addEventListener("click", function (e) {
  modal.style.display = "none";
});
