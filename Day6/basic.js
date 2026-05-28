function greetUser(name, callback) {
    console.log('Hello ' + name);
    callback();
}
 
function sayGoodbye() {
    console.log('Goodbye!');
}
 
greetUser('Aryan', sayGoodbye);
 
function doforeach(e) {
    console.log(e);
}
 
const doeach = e => console.log(e);
[1, 2, 3].forEach(doeach); // callback | forEach is a higher order function (HOF)
[1, 2, 3].forEach(e => console.log(e)); // anonymous callback
 
// Stack --> box | | --> 1 | 2 | 3 --> 3 | 2 | 1 (LIFO)
// Heap --> box | | --> doeach | sayGoodbye | greetUser
 
 
let age = 25; // number --> Stack
let name = "Aryan"; // string --> Stack
 
let user = { // object --> Heap
    name: "Aryan",
    age: 25
}
 
// Primitve copy (Stack)
let x = 5;
let y = x; // copy of value of x is stored in y
 
// Refrence copy (Heap)
let obj1 = { name: "Aryan" }; // heap
let obj2 = obj1;
 
obj2.name = "Arush";
console.log(obj1.name); // obj1 and obj2 are referencing the same object in heap, so change in obj2 reflects in obj1
 
const a = [1, 2, 3];
const b = [3, 4, 5];
 
let c = [...a, ...b, 10];
 
const obj = {
    name: "Aaryan"
}
const obj3 = {
    age: 25
}
 
const obj4 = {...obj1, ...obj3};
console.log(obj4)
// for (let i = 0; i < a.length; i++) {
//     c.push(a[i]);
// }
// for (let i = 0; i < b.length; i++) {
//     c.push(b[i]);
// }
console.log(c)