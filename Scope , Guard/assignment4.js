// Function to check positive numbers
function isPositive(n) {
    return typeof n === "number" &&
           Number.isFinite(n) &&
           n > 0;
}

// Test cases
const tests = [
    { input: 5, expected: true },
    { input: 0, expected: false },
    { input: -2, expected: false },
    { input: "5", expected: false }
];

// Run all test cases
tests.forEach(function(test) {
    const actual = isPositive(test.input);

    if (actual === test.expected) {
        console.log(test.input, "PASS");
    } else {
        console.log(test.input, "FAIL");
    }
});