# JavaScript Technical Synopsis: Async, Data, and OOP


## 1. Asynchronous Programming & API Interaction

*   **`fetch()`**: A web API used to make network requests. It returns a promise that resolves to the Response object.
    *   *Syntax:* `const res = await fetch("https://api.url.com");`
*   **`async / await`**: Syntactic sugar used to handle promises in a more readable, synchronous-looking way.
    *   *Syntax:* `async function fetchData() { const data = await res.json(); }`
*   **`try...catch`**: A block used to handle potential errors during execution, especially useful for network requests.
    *   *Syntax:* `try { /* code */ } catch (err) { console.error(err); }`
*   **`Promise`**: Represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    *   *Syntax:* `return new Promise((resolve, reject) => { ... });`

## 2. Data Transformation & JSON

*   **`.filter()`**: Creates a new array with all elements that pass the test implemented by the provided function.
    *   *Syntax:* `const filtered = data.filter(item => item.status === "Alive");`
*   **`.map()`**: Creates a new array populated with the results of calling a provided function on every element.
    *   *Syntax:* `const names = data.map(item => item.name);`
*   **`Object.entries()`**: Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
    *   *Syntax:* `Object.entries(data.rates).filter(([key, val]) => val > 10);`
*   **`JSON.stringify()`**: Converts a JavaScript object or value to a JSON string.
    *   *Syntax:* `const jsonString = JSON.stringify(obj);`
*   **`JSON.parse()`**: Parses a JSON string, constructing the JavaScript value or object described by the string.
    *   *Syntax:* `const obj = JSON.parse(jsonString);`

## 3. Timers & Scheduling

*   **`setTimeout`**: Executes a block of code once after a specified delay (in milliseconds).
    *   *Syntax:* `const id = setTimeout(() => { ... }, 5000);`
*   **`setInterval`**: Repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
    *   *Syntax:* `const id = setInterval(() => { ... }, 3000);`
*   **`clearTimeout / clearInterval`**: Used to stop a timer from running using the ID returned by the setter.
    *   *Syntax:* `clearInterval(id);`

## 4. Object-Oriented Programming (OOP) Concepts

### Core Structure
*   **`class`**: A blueprint for creating objects, encapsulating data with code to work on that data.
    *   *Syntax:* `class Animal { ... }`
*   **`constructor()`**: A special method for creating and initializing an object instance of a class.
    *   *Syntax:* `constructor(name) { this.name = name; }`
*   **`new`**: The keyword used to create an instance of a class.
    *   *Syntax:* `const dog = new Animal("Johnny");`

### The Four Pillars of OOP
1.  **Encapsulation (Private Fields)**: Restricting direct access to data by using the `#` prefix to keep variables private within a class.
    *   *Syntax:* `class Bank { #balance = 0; }`
2.  **Inheritance (`extends`)**: A mechanism where one class (child) acquires the properties and methods of another (parent).
    *   *Syntax:* `class Admin extends User { ... }`
3.  **Abstraction**: Hiding complex implementation details and showing only the necessary features of an object.
    *   *Pseudo-code:* `machine.brew(); // Internally calls private #boil() and #grind()`
4.  **Polymorphism**: The ability of different classes to respond to the same method call in their own specific way.
    *   *Pseudo-code:* `Circle.draw(); // draws circle | Square.draw(); // draws square`

### Advanced Keywords
*   **`super()`**: Used to call the constructor or methods of the parent class.
    *   *Syntax:* `constructor(name) { super(name); }`
*   **`this`**: Refers to the current instance of the object.
    *   *Syntax:* `this.propertyName = value;`