// ==========================================
// 1. ENCAPSULATION
// Goal: Protecting the internal state of an object.
// ==========================================
class SmartLight {
    #brightness = 0; // Private field: cannot be changed directly from outside

    setBrightness(level) {
        if (level >= 0 && level <= 100) {
            this.#brightness = level;
            console.log(`Brightness set to ${this.#brightness}%`);
        } else {
            console.log("Error: Level must be between 0 and 100");
        }
    }

    getBrightness() {
        return `Current level: ${this.#brightness}%`;
    }
}

const myLamp = new SmartLight();
myLamp.setBrightness(75);
console.log(myLamp.getBrightness());


// ==========================================
// 2. INHERITANCE
// Goal: Reusing code from a parent class.
// ==========================================
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(`${this.brand} engine started.`);
    }
}

class ElectricCar extends Vehicle {
    constructor(brand, batteryLife) {
        super(brand); // Calls the parent constructor
        this.batteryLife = batteryLife;
    }
    showBattery() {
        console.log(`${this.brand} has ${this.batteryLife}% battery left.`);
    }
}

const myTesla = new ElectricCar("Tesla", 88);
myTesla.start();       // Inherited method
myTesla.showBattery(); // Child specific method


// ==========================================
// 3. ABSTRACTION
// Goal: Hiding complexity and showing only the essential interface.
// ==========================================
class RemoteControl {
    #connectToWifi() { return "Connected to WiFi..."; }
    #authenticate() { return "User Authenticated..."; }

    // The user only needs to call 'pressPowerButton'
    // They don't need to know about WiFi or Authentication logic
    pressPowerButton() {
        console.log("Checking systems...");
        console.log(this.#connectToWifi());
        console.log(this.#authenticate());
        console.log("TV is now ON.");
    }
}

const remote = new RemoteControl();
remote.pressPowerButton();


// ==========================================
// 4. POLYMORPHISM
// Goal: Different classes using the same method name for different behaviors.
// ==========================================
class Instrument {
    play() {
        console.log("Playing an instrument...");
    }
}

class Piano extends Instrument {
    play() {
        console.log("Playing piano:  Plink-Plonk");
    }
}

class Guitar extends Instrument {
    play() {
        console.log("Playing guitar:  Strum-Strum");
    }
}

const orchestra = [new Piano(), new Guitar()];
orchestra.forEach(instrument => instrument.play()); 
// Every instrument responds to 'play()' but in its own way