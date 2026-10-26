function cleanInput(value) {
    if (typeof value !== "string") {
        return "";
    }

    return value
        .normalize("NFKC")
        .trim()
        .replace(/\s+/g, " ");
}

function cleanEmail(value) {
    return cleanInput(value).toLowerCase();
}

const name = "   Riya    Sharma   ";
const email = "  RIYA@EXAMPLE.COM  ";

console.log(cleanInput(name));
console.log(cleanEmail(email));
console.log(cleanInput("  Hello     World  "));