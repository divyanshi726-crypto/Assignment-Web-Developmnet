const product = {
    id: "P101",
    name: "Wireless Mouse",
    price: 799,
    inStock: true,

    specifications: {
        brand: "ExampleTech",
        color: "Black",
        connectivity: "Bluetooth",

        dimensions: {
            width: 6,
            height: 3,
            depth: 10
        }
    },

    tags: ["computer", "accessory"]
};

// Display product details
console.log("Product Name:", product.name);
console.log("Product ID:", product.id);
console.log("Price: ₹" + product.price);
console.log("Available:", product.inStock);

console.log("Brand:", product.specifications.brand);
console.log("Color:", product.specifications.color);
console.log("Connectivity:", product.specifications.connectivity);

console.log("Width:", product.specifications.dimensions.width);
console.log("Height:", product.specifications.dimensions.height);
console.log("Depth:", product.specifications.dimensions.depth);

console.log("Tags:", product.tags.join(", "));