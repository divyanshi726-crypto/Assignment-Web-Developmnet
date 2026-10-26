const products = [
    { name: "Pen", price: 20, category: "Stationery" },
    { name: "Bag", price: 800, category: "Bags" },
    { name: "Notebook", price: 60, category: "Stationery" },
    { name: "Pencil", price: 10, category: "Stationery" }
];

// Find products costing less than ₹300
const affordable = products.filter(
    product => product.price < 300
);

// Get product names
const names = affordable.map(
    product => product.name
);

// Calculate total price of all products
const total = products.reduce(
    (sum, product) => sum + product.price, 0
);

console.log("Affordable Products:", names);
console.log("Total Price: ₹" + total);
console.log("Stationery Products:",
    products.filter(p => p.category === "Stationery")
);