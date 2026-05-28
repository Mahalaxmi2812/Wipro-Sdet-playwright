class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a sound`);
    }
}

const dog = new Animal("Johnny");
const cat = new Animal("Kitty");
dog.speak(); // Output: Johnny makes a sound
cat.speak(); // Output: Kitty makes a sound
