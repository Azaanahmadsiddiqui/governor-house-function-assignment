"use strict";
// Question 2: 
Object.defineProperty(exports, "__esModule", { value: true });
function isPrime(num, divisor = 2) {
    if (num <= 2) {
        return (num === 2) ? true : false;
    }
    if (num % divisor === 0) {
        return false;
    }
    if (divisor * divisor > num) {
        return true;
    }
    // Recursive case
    return isPrime(num, divisor + 1);
}
const number = 15;
console.log(number + " is prime:", isPrime(number)); // Output: true
