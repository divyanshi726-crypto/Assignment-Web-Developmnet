const cart = {
    items: [],

    add(product, quantity = 1) {
        if (!Number.isInteger(quantity) || quantity < 1) {
            return "Quantity must be a positive integer";
        }

        if (
            !product ||
            typeof product.price !== "number" ||
            !Number.isFinite(product.price) ||
            product.price < 0
        ) {
            return "Invalid price";
        }

        const found = this.items.find(
            item => item.id === product.id
        );

        if (found) {
            found.quantity += quantity;
        } else {
            this.items.push({
                ...product,
                quantity: quantity
            });
        }

        return "Product added successfully";
    },

    total() {
        return this.items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
    },

    showItems() {
        console.log("Cart Items:");

        this.items.forEach(item => {
            console.log(
                item.name,
                "| Quantity:", item.quantity,
                "| Price: ₹" + item.price
            );
        });
    }
};

// Add products
console.log(cart.add({
    id: 1,
    name: "Pen",
    price: 20
}, 3));

console.log(cart.add({
    id: 2,
    name: "Notebook",
    price: 50
}, 2));

// Test invalid quantity
console.log(cart.add({
    id: 3,
    name: "Pencil",
    price: 10
}, 0));

// Display cart
cart.showItems();
console.log("Total Amount: ₹" + cart.total());