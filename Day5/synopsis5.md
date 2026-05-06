JavaScript Synopsis: Async, Data, and OOP
I. Asynchronous Programming & API Interaction
fetch(): Initiates a network request to a server and returns a promise.
Syntax: const response = await fetch(url);
async / await: Used to handle promises sequentially, making asynchronous code look synchronous.
Syntax: async function name() { const data = await promise; }
try...catch: A block used to handle errors and prevent the script from crashing.
Syntax: try { /* run code */ } catch (err) { /* handle error */ }
Promise: An object representing the eventual completion (or failure) of an asynchronous operation.
Syntax: return new Promise((resolve, reject) => { ... });
II. Data Transformation & JSON
.filter(): Creates a new array with elements that pass a specific logical test.
Syntax: const result = array.filter(item => item.condition);
.map(): Creates a new array by transforming every element in the original array.
Syntax: const result = array.map(item => item.newValue);
Object.entries(): Converts an object's key-value pairs into an array of arrays.
Syntax: Object.entries(object).filter(([key, value]) => value > 10);
JSON.stringify(): Converts a JavaScript object into a JSON string for data transmission.
Syntax: const jsonString = JSON.stringify(object);
JSON.parse(): Converts a JSON string back into a JavaScript object.
Syntax: const object = JSON.parse(jsonString);
III. Timers & Scheduling
setTimeout: Executes a function once after a specified delay in milliseconds.
Syntax: const id = setTimeout(() => { ... }, delay);
setInterval: Repeatedly executes a function at every specified time interval.
Syntax: const id = setInterval(() => { ... }, interval);
clearTimeout / clearInterval: Cancels a scheduled timeout or interval using its ID.
Syntax: clearTimeout(id); / clearInterval(id);
IV. Object-Oriented Programming (OOP) Concepts
1. Core Structure
class: A template or blueprint for creating objects with properties and methods.
Syntax: class Name { ... }
constructor(): A special method for initializing properties when a new object is created.
Syntax: constructor(param) { this.prop = param; }
new (Instantiation): The keyword used to create a concrete instance of a class.
Syntax: const instance = new ClassName();
2. The Four Pillars of OOP
Encapsulation (Private Fields): Using # to hide internal data from outside access to ensure data integrity.
Syntax: class Bank { #balance = 0; }
Inheritance (extends): Allows a child class to derive properties and methods from a parent class.
Syntax: class Admin extends User { ... }
Abstraction: Hiding complex implementation details and showing only necessary features to the user.
Pseudo-code: brew() { this.#boil(); this.#grind(); return "Coffee Ready"; }
Polymorphism: The ability of different classes to define their own unique version of the same method name.
Pseudo-code: Circle.draw() { /* logic A */ } Square.draw() { /* logic B */ }
3. Advanced Inheritance
super(): A keyword used to call the constructor or methods of the parent (base) class.
Syntax: constructor(name) { super(name); } or super.methodName();