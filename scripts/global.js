//read function take string (name of storage item) as argument
function read(items) {
    let result = JSON.parse(localStorage.getItem(items));
    return result ? result : [];
}

//save function take array as argument and optional argument as text to name the storage item name
function save(items, prod = "products") {
    localStorage.setItem(prod, JSON.stringify(items));
}




let products = [{
        id: 1,
        name: "Perfume",
        desc: "",
        price: "100",
        category: "Cosmetics",
        imageURL: "images/perfume.jpg",
    }, {
        id: 2,
        name: "Lipstick",
        desc: "",
        price: "25",
        category: "Cosmetics",
        imageURL: "images/lipstick.jpg",
    }, {
        id: 3,
        name: "Apple Airpods",
        desc: "",
        price: "100",
        category: "Technology",
        imageURL: "images/airpods.jpg",
    },
    {
        id: 4,
        name: "SmartWatch",
        desc: "",
        price: "200",
        category: "Technology",
        imageURL: "images/smartWatch.jpg",
    }
];


let test = read("products");
if (test.length == 0) {
    save(products);
}

products = read("products");