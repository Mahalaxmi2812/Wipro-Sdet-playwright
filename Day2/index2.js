let a = "Rishi"
let b = "Maha"
let c = "Laxmi"

let d = "Hello " + a +", " + b + " and " + c + "!"; //Concatenation
//console.log(d);
let e = `Hello ${a}, ${b} and ${c}!`; //Template literals
let f = `Length of a is ${a.length * 2}`;
//console.log(e); 
//console.log(f);

function table(num){
    let result = "";
    for(let i = 1; i <= 10; i++){
        //console.log(num + " x " + i + " = " + (num * i)); //Using string concatentaion
        result += `${num} x ${i} = ${num * i}\n`; //Using template literals
    }
    return result;
}
// console.log(table(5)); //Displaying the multiplication table of 5

// funtion sum(a,b){
//    return a + b;
// }

//let sum1 = sum(3, 4);

let sum = (a,b) => a + b; //Arrow function for addition
console.log("Sum of 3 and 4 is:", sum(3,4)); // 9

let arr = [1, 2, 3, 4, 5, "Maha"];

// arr.filter(function(x){
//     return typeof x === 'number';   
// }).map(function(y){
//     return y * 2;
// }).forEach(function(z){
//     console.log("Elemment after * 2:", z * 2);
// });

arr.filter(x => typeof x === 'number').map(y => y * 2).forEach(z => console.log("Element after * 2:", z * 2)); // Filter out non-number elements
// console.log(arr.find(x => x === "Maha")); // Find the element "Maha" in the array
// Arrow function is represented by =>

console.log(Math.floor(Math.random() * 100) + 1); // Generate a random number between 1 and 100
// floor -> rounds down to the nearest integer 0.9 --> 0
// 0 --> 99.999 -> 99 [0 - 99]

// Math.random() --> 0 - 1 * 10 --> 0 - 10
// Math.floor(x) --> 0.3 (0, 1) = 0, 1.6 (1, 2) = 1, 3.998 (3, 4) = 3
// floor(0.1, 9.999) -> [0, 9]

// == / ===
// console.log(5 == "5"); 
// console.log(5 === "5");

let strnum = "5";
console.log(Number(strnum));
console.log(String(5));

let val = "0.6";
console.log(parseInt(val)); // 0
console.log(parseFloat(val)); // 0.6

// floor [int] -> Low int, parseInt -> type conversion (string -> int)
let colors = ["red", "green", "blue"];
console.log(colors.indexOf("yellow")); // -1
console.log(colors.includes("yellow")); // false
console.log(colors.length); // 3
console.log(colors[3]); // undefined
console.log(colors[colors.length - 1]); // "blue"
colors.push("yellow"); // Adds "yellow" to the end of the array
console.log(colors); // ["red", "green", "blue", "yellow"]
colors.pop(); // Removes the last element ("yellow")
console.log(colors); // ["red", "green", "blue"]
colors.unshift("purple"); // Adds "purple" to the beginning of the array
console.log(colors); // ["purple", "red", "green", "blue"]
colors.shift(); // Removes the first element ("purple")
console.log(colors); // ["red", "green", "blue"]

// [red] [green] [blue] --> undefined

// let indexOf = "yellow";
// for (let i = 0; i < colors.length; i++) {
//     if(colors[i] === indexOf) {
//         return i;
//     } if(i == colors.length - 1) {
//         return -1;
//     }
// }

// remove by index, obj, [1, length - 2] --> math.random() * (length - 2)
console.log(colors.splice(0, 1)); //splice() returns the removed elements inside a new array.
                                  // Removes 1 element at index 0 (red)
console.log(colors); 

console.log(colors.splice(1, 2)); // Removes 2 elements starting from index 1 (green and blue)
console.log(colors);

console.log(colors.splice(1, 3)); // Removes 3 elements starting from index 1 (nothing left to remove, so it returns an empty array)
console.log(colors); // []
// console.log(colors.splice(Math.floor(Math.random() * (colors.length - 2)), 1));
let str = "Hello World";
console.log(str.slice(0, 5)); // "Hello"


const prices = [20, 30, 15, 5];
// let s = 0
// for (let i = 0; i < prices.length; i++) {
//     s += prices[i];
// }

const total = prices.reduce((acc,curr) => {return acc + curr}, 0);
//0 + 20 = 20
//20 + 30 = 50
//50 + 15 = 65
//65 + 5 = 70
console.log("Total price:", total); // 70

const fruitBasket = ["apple", "banana", "orange", "grape", "apple", "banana", "apple"];
const tally = fruitBasket.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1; // If acc[fruit] is undefined, use 0, then add 1
    return acc;
}, {}); //initial value is an empty object
console.log("Fruit tally:", tally); // { apple: 3, banana: 2, orange: 1, grape: 1 } 

// function b(a,c){
//     return a * c * 2;
// }
// function a(b, c){
//     return b(a(1,2), c);
// }