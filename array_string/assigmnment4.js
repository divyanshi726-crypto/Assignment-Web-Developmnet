// 1. Reverse an array
const reverseArray = array => [...array].reverse();

// 2. Find maximum value
const maxValue = array =>
    array.length ? Math.max(...array) : null;

// 3. Count vowels
function countVowels(text) {
    return (text.match(/[aeiou]/gi) || []).length;
}

// 4. Check palindrome
function isPalindrome(text) {
    text = text.toLowerCase().replace(/[^a-z0-9]/g, "");

    return text === text.split("").reverse().join("");
}

// Test all functions
console.log("Reversed:", reverseArray([1, 2, 3]));
console.log("Maximum:", maxValue([4, 8, 2]));
console.log("Vowels:", countVowels("hello"));
console.log("Palindrome:", isPalindrome("Never odd or even"));