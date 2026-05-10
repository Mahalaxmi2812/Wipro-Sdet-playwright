// // 4. Print prime numbers 1 to 100
console.log("Prime numbers between 1 and 100:");

// Loop through numbers from 2 to 100 (1 is not a prime number)
for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    // Check if 'i' is divisible by any number from 2 up to its square root
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false; // It has a divisor, so it's not prime
            break;           // Exit the inner loop early
        }
    }

    // If it is still true, then 'i' is a prime number
    if (isPrime) {
        console.log(i);
    }
}

// 5. Guessing game (Mockup)

// Add () at the end to properly initialize the prompt-sync module
const prompt = require('prompt-sync')();   

// Generates a random integer between 1 and 100
let target = Math.floor(Math.random() * 100) + 1; 
let guess;

console.log("I have picked a random number between 1 and 100. Try to guess it!");

while(guess !== target) {
    guess = parseInt(prompt("Guess the number: "));
    
    // Optional: Check if the user entered a valid number
    if (isNaN(guess)) {
        console.log("Please enter a valid number.");
        continue; 
    }

    if(guess < target) {
        console.log("Too low");
    } else if(guess > target) {
        console.log("Too high");
    }
} 

console.log("You won!");





// 7 - 5. Create a calculator using functions for add, subtract, multiply, and divide.
const calc = {
    sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
    sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
    mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
    div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
};
 
console.log(calc.sum(5, 5, 10, 20));

//Write a program demonstrating closure behavior.
let sum = 0; // 2
function f() {
    function increment() {
        sum++;
        
        function inner2() {
            sum++;
            console.log(sum);
        }
        return inner2();
    }
    return increment();
}
f();
console.log(sum);

//3. Create a callback-based calculator.
const calc = {
    sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
    sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
    mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
    div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
};
 
 
function calculator(operation, ...operands) {
    return operation(...operands);
}
 
console.log(calculator(calc.sum, 1, 2, 3))