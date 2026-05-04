// **1. Logging Names**
// Given an array const names = ['Alice', 'Bob', 'Charlie'];, use .forEach() to log each name to the console with the prefix "Hello, ".
const names = ['Alice', 'Bob', 'Charlie'];
names.forEach(name =>
    console.log(`Hello, ${name}`)
);

// **2. Temperature Conversion**
// You have an array of temperatures in Celsius: [0, 10, 20, 30]. Use .map() to create a new array where each temperature is converted to Fahrenheit.
// *(Formula: F = C \times 1.8 + 32)*
const celsius = [0, 10, 20, 30];
const fahrenheit = celsius.map(temp => temp * 1.8 + 32);
console.log(fahrenheit);

// **3. Finding Adults**
// Given an array of objects: const users = [{ name: 'Li', age: 16 }, { name: 'Dan', age: 22 }, { name: 'Sarah', age: 17 }];
// Use .filter() to create a new array containing only the users who are 18 or older.
const users = [{ name: 'Li', age: 16 }, { name: 'Dan', age: 22 }, { name: 'Sarah', age: 17 }];
const adults = users.filter(user => user.age >= 18);
console.log(adults);

// **4. String Lengths**
// Write a function that takes an array of strings and uses .filter() to return only the strings that have more than 5 characters.
const arr = ['book', 'notebook', 'pen', 'pencil', 'eraser'];                
function filterLongStrings(arr){
    return arr.filter(str => str.length > 5);
}
//const filterLongStrings = (arr) => arr.filter(str => str.length > 5);   
console.log(filterLongStrings(arr));

// **5. Total Cost**
// Given an array of prices [19.99, 5.50, 3.99, 25.00], use .reduce() to calculate the total sum of the items.
const prices = [19.99, 5.50, 3.99, 25.00];
const sum = prices.reduce((total, price) => total + price, 0);
console.log(sum);

// **6. Counting Occurrences**
// Use .reduce() to count how many times the word "apple" appears in this array:
const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];
const a_count = fruits.reduce((count, str) => str === 'apple' ? count + 1 : count, 0);
console.log(a_count);

// **7. Array Transformation**
// Given an array of numbers [1, 2, 3, 4, 5, 6], use a combination of .filter() and .map() to:
// 1. Keep only the even numbers.
// 2. Square those even numbers (e.g., 2 becomes 4, 4 becomes 16).
const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
console.log(even);

// **8. Object Extraction**
// You have an array of "Product" objects:
// [{ id: 1, title: 'Laptop' }, { id: 2, title: 'Mouse' }]
// Use .map() to extract just the titles into a simple array of strings: ['Laptop', 'Mouse'].
const products = [{ id: 1, title: 'Laptop' }, { id: 2, title: 'Mouse' }];
const titles = products.map(product => product.title);
console.log(titles);

// **9. The Average**
// Write a short script using .reduce() to find the average score from an array of test results: [80, 90, 70, 100].
const scores = [80, 90, 70, 100];
const average = scores.reduce((avg, score) => avg + score, 0)/scores.length;
console.log(average);

// **10. Flattening (The Bonus)**
// Without using the built-in .flat() method, use .reduce() to turn this nested array into a single flat array:
// [[1, 2], [3, 4], [5, 6]] → [1, 2, 3, 4, 5, 6]
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) =>acc.concat(arr), []);
console.log(flat);