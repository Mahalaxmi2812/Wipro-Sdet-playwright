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
