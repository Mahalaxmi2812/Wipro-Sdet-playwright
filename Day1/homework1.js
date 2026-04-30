//Swapping numbers 
let a = 2;
let b = 5;

console.log("Before swapping: a =", a, "b =", b);

let temp = a;
a = b;
b = temp;
//[a,b] = [b,a]; // Destructuring assignment to swap values

console.log("After swapping: a =", a, "b =", b);


//Type Checker
function checkType(input) {
    if (typeof input === 'number') {
        console.log("This is a number");
    } else if (typeof input === 'string') {
        console.log("This is a string");
    } else {
        console.log("This is something else");
    }
}

// Test cases:
checkType(42);          //This is a number
checkType("Hello");     //his is a string

//Initials Creator
let fullName = "John Doe";
let initials = fullName.split(" ")[0][0] + fullName.split(" ")[1][0];
console.log("Initials:", initials); //JD


//The cleaner
let messy = " JavaScript is fun";
console.log(messy.trim().toLowerCase()) //javascript is fun


//The Grocery List
let cart = ["apples", "bananas", "oranges"];
cart.push("Milk");      //Adds "Milk" to the end of the array
cart.unshift("Eggs");   //Adds "Eggs" to the beginning of the array
cart.pop();            //Removes the last item from the array (Milk)

console.log(cart);


//Value Finder
let numbers = [10, 20, 30, 40, 50];

console.log(numbers.includes(30)); // true
console.log(numbers.indexOf(50));
