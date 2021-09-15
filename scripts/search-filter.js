products = read("products");
result = [];

let search = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");
let categoryList = document.getElementById("category");
let priceFrom = document.getElementById("priceFrom");
let priceTo = document.getElementById("priceTo");

search.addEventListener("input", function (e) {
  searchName(e.target.value);
});

searchBtn.addEventListener("click", function () {
  searchName(search.value);
});

categoryList.addEventListener("change", function (e) {
  search.value = "";
  priceFrom.value = "";
  priceTo.value = "";

  result = products.filter(function (item) {
    return item.category == e.target.value;
  });
  if (e.target.value == "All") showProds(products);
  else showProds(result);
});

priceFrom.addEventListener("input", function (e) {
  search.value = "";
  categoryList.value = 0;

  result = products.filter(function (item) {
    if (!priceTo.value) {
      return Number(item.price) >= Number(e.target.value);
    } else {
      return (
        Number(item.price) >= Number(e.target.value) &&
        Number(item.price) <= Number(priceTo.value)
      );
    }
  });
  showProds(result);
});

priceTo.addEventListener("input", function (e) {
  search.value = "";
  categoryList.value = 0;

  result = products.filter(function (item) {
    if (!priceFrom.value) {
      return Number(item.price) <= Number(e.target.value);
    } else {
      return (
        Number(item.price) >= Number(priceFrom.value) &&
        Number(item.price) <= Number(e.target.value)
      );
    }
  });
  showProds(result);
});

function searchName(text) {
  categoryList.value = 0;
  priceFrom.value = "";
  priceTo.value = "";

  result = products.filter(function (item) {
    return item.name.toUpperCase().includes(text.toUpperCase());
  });
  showProds(result);
}
