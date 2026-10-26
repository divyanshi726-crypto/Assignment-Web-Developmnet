// Merge default and custom settings
function mergeSettings(defaults, custom) {
    return {
        ...defaults,
        ...custom
    };
}

const defaultSettings = {
    theme: "light",
    language: "en"
};

const customSettings = {
    theme: "dark"
};

console.log(mergeSettings(defaultSettings, customSettings));

// Calculate shopping cart total
function cartTotal(items) {
    return items.reduce(function(sum, item) {
        if (item.price < 0 || item.quantity < 0) {
            throw new Error("Invalid price or quantity");
        }

        return sum + item.price * item.quantity;
    }, 0);
}

const items = [
    { price: 100, quantity: 2 },
    { price: 50, quantity: 1 }
];

console.log("Cart Total: ₹" + cartTotal(items));