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