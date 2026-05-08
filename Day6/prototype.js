function person(name){
    this.name = name;
}

person.prototype.sayHi = function(){  // Adding a method to the prototype of person
    console.log('hello ' + this.name);
}

const me = new person("maha");
const you = new person("you");

me.sayHi();
you.sayHi();

console.log(Object.getPrototypeOf(me) === Object.getPrototypeOf(you)); // true
console.log(me.sayHi === you.sayHi); // true 
console.log(Object.getPrototypeOf(me));


// 1. The Constructor (The Factory) (another example)
function Smartphone(model, color) {
    this.model = model;
    this.color = color;
}
// 2. The Prototype (The "Universal Features" Manual)
// We add methods here so every phone shares the SAME function in memory.
Smartphone.prototype.makeCall = function(number) {
    console.log(`Calling ${number} from my ${this.model}...`);
};
// 3. The Instances (Individual Phones)
const myPhone = new Smartphone("iPhone 15", "Black");
const yourPhone = new Smartphone("Pixel 8", "Hazel");
myPhone.makeCall("emergency services"); // Works!
yourPhone.makeCall("100"); // Works!
// PROOF of Sharing:
console.log(myPhone.makeCall === yourPhone.makeCall); // true (Identical reference)