// Question 1: The Guest List Formatter
// Goal: Practice Template Literals and Array Methods.
// Write a function called formatGuests that takes an array of names. The function should:
// Remove the first name from the list (it’s the host, not a guest).
// Add "Guest: " before each remaining name using .map().
// Return a single string where each guest is on a new line.

function formatGuests(names){
    names.shift(); //removes first person
    let result = names.map(name => "Guest: " + name);
    return result.join("\n");
}
console.log(formatGuests(["Alice", "Bob", "Charlie", "David"]));

// Output:
// Guest: Bob
// Guest: Charlie
// Guest: David

// Question 2: The Logic Gate (Filter & Math)
// Goal: Practice Arrow Functions, filter, and Math methods.
// Create an arrow function called getHighNumbers. It should take an array of mixed types (strings and numbers) and:
// Filter the array to keep only the numbers.
// Filter those numbers again to only keep ones greater than a random threshold between 1 and 50.
// Return the final array.
const getHighNumbers = (arr) => {
    let threshold = Math.floor(Math.random() * 50) + 1;
    console.log("Current Threshold:", threshold);
    return arr
    .filter(item => typeof item === 'number')
    .filter(num => num > threshold);
};

const data = [10, "Hello", 25, 5, "World", 40, 60];
console.log(getHighNumbers(data));

//Output
// Current Threshold: 46
// [ 60 ]

// Question 3: The Price Calculator
// Goal: Practice Type Conversion and splice.
// You have an array of prices, but they are currently strings. Write a script that:
// Removes the last item in the array using an array method (because it's a "handling fee" you want to calculate separately).
// Converts the remaining string prices into actual numbers.
// Calculates the sum of those numbers using an arrow function.
// Prints: "Total Price: $[sum]" using a template literal.

let prices = ["20", "30", "15", "5"]; // Last item is the handling fee
prices.pop(); // Remove the last item

let nums = prices.map(price => Number(price));
let sum = nums.reduce((a,b) => a + b, 0);
console.log(`Total Price: $${sum}`);

// Output:
// Total Price: $65