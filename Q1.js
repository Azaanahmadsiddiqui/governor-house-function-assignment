"use strict";
// Question 1:
Object.defineProperty(exports, "__esModule", { value: true });
function countVowels(str) {
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();
    // Initialize a variable to store the count of vowels
    let count = 0;
    // Loop through each character in the string
    for (let char of str) {
        if (vowels.includes(char)) {
            // If it is, increment the count
            count++;
        }
    }
    // Return the total count of vowels
    return count;
}
const inputString = "Hello, how are you?";
console.log("Number of vowels:", countVowels(inputString)); // Output: 7
