// 1. var hoisting
console.log(a);
var a = 10;

// 2. let declaration
let b = 20;
console.log(b);

// 3. const declaration
const c = 30;
console.log(c);

// 4. Function scope
function showMessage() {
    let message = "Hello Student";
    console.log(message);
}

showMessage();

