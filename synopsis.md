# JavaScript & DOM Cheatsheet

A quick reference guide for the functions and methods used in this project.


## 1. Functions & Logic
- **Arrow Function**: A shorter syntax for writing functions.
  - `const sum = (a, b) => a + b;`
- **typeof**: Returns the data type of a variable.
  - `typeof "Maha"; // "string"`
- **Strict Equality (===)**: Compares both value and data type.
  - `5 === "5"; // false`
- **Destructuring Swap**: Swapping two variables without a temp variable.
  - `[a, b] = [b, a];`

## 2. DOM (Document Object Model)
- **getElementById**: Selects an HTML element by its ID.
  - `document.getElementById("namebox");`
- **.value**: Gets or sets the text inside an input field.
  - `const val = input.value;`

## 3. Strings
- **Concatenation**: Joining strings using `+`.
  - `let d = "Hello " + name + "!";`
- **Template Literals**: Embedding variables inside backticks (`` ` ``).
  - `let e = `Hello ${a}, ${b}!`;`
- **toUpperCase / toLowerCase**: Changes the casing of a string.
  - `str.toUpperCase();`
- **trim**: Removes whitespace from both ends of a string.
  - `str.trim();`
- **split**: Breaks a string into an array based on a separator.
  - `fullName.split(" ");`
- **replace**: Replaces a specific part of a string with another.
  - `str.replace("old", "new");`

## 4. Arrays
- **push / pop**: Adds/Removes an element at the **end**.
  - `arr.push("item"); / arr.pop();`
- **unshift / shift**: Adds/Removes an element at the **beginning**.
  - `arr.unshift("item"); / arr.shift();`
- **indexOf**: Returns the first index of a value, or -1 if not found.
  - `arr.indexOf("blue");`
- **includes**: Returns true/false if an element exists.
  - `arr.includes("yellow");`
- **splice**: Changes contents of an array by removing or replacing elements and returns removed elements.
  - `arr.splice(index, count);`
- **forEach**: Executes a function for each array element.
  - `arr.forEach(x => console.log(x));`
- **map**: Creates a new array by performing a function on every element.
  - `let doubled = arr.map(x => x * 2);`
- **filter**: Creates a new array with elements that pass a test.
  - `let nums = arr.filter(x => typeof x === 'number');`

## 5. Math & Numbers
- **Math.random**: Generates a random decimal between 0 and 1.
  - `Math.random();`
- **Math.floor**: Rounds a number down to the nearest integer.
  - `Math.floor(5.9); // 5`
- **parseInt / parseFloat**: Converts a string to an integer or decimal.
  - `parseInt("5"); / parseFloat("0.6");`

## 6. Advanced Array Methods (Reduce)
- **reduce (Summing)**: Reduces an array to a single value by adding each element to an accumulator.
  - `const total = prices.reduce((acc, curr) => acc + curr, 0);`
- **reduce (Tallying/Counting)**: Uses an object as an accumulator to count how many times an item appears.
   const tally = items.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1; // "If exists, +1. If not, start at 0 and +1"
        return acc;
   }, {});
- **Initial Value**: The second argument in `reduce` (like `0` or `{}`) defines the starting type of the result.
  - `arr.reduce((acc, curr) => {...}, {}); // Starts with empty object`
  - Use reduce to compare items and keep only the "winner."
  - `const max = [10, 50, 30].reduce((acc, curr) => (curr > acc ? curr : acc), 0)`;

## 7. Functional Concepts
- **Callbacks**: Passing a function as an argument to another function.
  - `arr.map(x => x * 2); // The arrow function is the callback`
- **Accumulator (`acc`)**: The "running total" or stored result that persists across each loop in a reduce function.
- **Dynamic Keys**: Accessing or creating object properties using square brackets and variables.
  - `obj[variableKey] = value;`

## 8. Logic & Short-circuiting
- **Logical OR (`||`) for Defaults**: Sets a default value if the first part is `undefined` or `null`.
  - `let count = acc[item] || 0; // If item doesn't exist, start at 0`

## 9. Asynchronous JavaScript & Timers
- **Promises**: Objects representing the eventual completion (resolve) or failure (reject) of an asynchronous task.
  ```javascript
  function getData() {
      return new Promise((resolve, reject) => {
          setTimeout(() => resolve("Data received"), 2000);
      });
  }

.then() / .catch(): Methods used to handle the result or errors of a Promise once it settles.
code
JavaScript
getData()
  .then(data => console.log(data))
  .catch(err => console.error(err));
setTimeout: Executes a function once after a specified delay in milliseconds.
setTimeout(() => console.log("Done"), 3000); // Runs after 3s
setInterval: Repeatedly executes a function at every fixed time interval.
setInterval(() => console.log("Repeating"), 3000); // Runs every 3s

   1. Alternative Methods to Get Full DataWhile 
    .json() is for structured data, you can use these other methods to download the entire response body:
   .text(): Downloads the whole body and returns it as a plain string.
   .blob(): Downloads the whole body and returns it as a Blob object, which is useful for images, PDFs, or other binary files.
   .arrayBuffer(): Downloads the whole body and returns it as a low-level binary buffer.
   .formData(): Parses the response as form-encoded data.

    const response = await fetch('https://example.com/data');

// This line pauses until the ENTIRE body is finished downloading
const rawText = await response.text(); 

console.log("Download complete!", rawText);



# JavaScript API Fetching and Promise Chaining

This document provides a concise overview of the concepts and functions used when interacting with public APIs using modern JavaScript.

## Core Definitions

*   **API Calling:** The process of a client application sending a request to a remote server to retrieve or manipulate data.
*   **Fetch API:** A modern, built-in JavaScript interface used to make network requests and handle responses across the web.
*   **Promise Chaining:** A technique where multiple `.then()` methods are linked together to execute asynchronous operations in a specific sequential order.
*   **`.json()` Method:** A function that parses the raw response from a fetch request and converts it into a usable JavaScript object or array.
*   **`.filter()` Function:** An array method that creates a new array containing only the elements that meet a specific logical condition.
*   **`.map()` Function:** An array method used to transform data by creating a new array where every element has been modified by a provided function.
*   **`.catch()` Block:** A method used at the end of a promise chain to handle and manage any errors that occur during the request or processing.