const shoppingList = [];

function addItem(name) {
    if (typeof name !== "string" || name.trim() === "") {
        return "Item name required";
    }

    shoppingList.push(name.trim());
    return name.trim() + " added";
}

function removeItem(index) {
    if (!Number.isInteger(index) ||
        index < 0 ||
        index >= shoppingList.length) {
        return "Invalid index";
    }

    return shoppingList.splice(index, 1)[0] + " removed";
}

console.log(addItem("Milk"));
console.log(addItem("Bread"));
console.log(addItem("   "));
console.log(removeItem(5));
console.log(removeItem(0));
console.log(shoppingList);