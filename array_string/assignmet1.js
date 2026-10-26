const list = [];

function addItem(name) {
    name = name.trim();

    if (!name) {
        return "Item name required";
    }

    list.push(name);
    return "Added: " + name;
}

function removeItem(index) {
    if (index < 0 || index >= list.length) {
        return "Invalid index";
    }

    return list.splice(index, 1)[0] + " removed";
}

function showList() {
    if (list.length === 0) {
        return "List is empty";
    }

    return list.map((item, index) =>
        `${index + 1}. ${item}`
    ).join("\n");
}

console.log(addItem("Milk"));
console.log(addItem("Bread"));
console.log(addItem("Eggs"));

console.log("\nShopping List:");
console.log(showList());

console.log("\n" + removeItem(1));

console.log("\nUpdated List:");
console.log(showList());