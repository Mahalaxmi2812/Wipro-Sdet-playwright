let name = "Maha"
console.log(name);

let result: number | string;
result = 45;
result = "success"
console.log(name, result);

function add(a:number, b:number): string{
    return "Sum:" +(a+b);
}
console.log(add(5,10));


interface Person{
    id: number;
    name: string;
    age: number;
    role: Role; //using enum for role
    isAdmin?: boolean;  //optional property "?"
}

interface Person{
    email: string; //merge interface to add email property
}

enum Role{
    User = "USER",
    Admin = "ADMIN",
    SuperAdmin = "SUPER_ADMIN" 
}   // USER, user, User, ADMIN, Admin, admin, SUPER_ADMIN, SuperAdmin, superAdmin

const user: Person = {
    id: 1,
    name: "Maha",
    age: 22,
    role: Role.User,
    email: "maha@gmail.com",
};

const admin: Person = {
    id: 2,
    name: "Aaryan",
    age: 25,
    role: Role.User,
    email: "aaryan@gmail.com",
};

console.log(user, admin);


let coordinates: [number, string] = [40.7234, "-65.5645"]; //Tuple for latitude and longitude
console.log("Coordinates:", coordinates);

let arr: number[] = [1, 2, 3]; //array of numbers
console.log("Array:", arr);



function identity<T>(arg : T): T{
    return arg;
}

let output = identity<number>(10);
let output1 = identity<string>("Aaryan");
let output2 = identity<boolean>(true);

console.log(output, output1, output2);



//Generic interface for a bag that can hold any type of content
interface Bag<T>{
    content: T;
}

const stringBag: Bag<string> = {content: "Apple"};
const numberBag: Bag<number> = {content: 5};

console.log(stringBag, numberBag);



class Storage<T>{
    private items: T[] = [];

    addItems(item: T): void{  //no return type
        this.items.push(item);
    }

    getItem(index: number): T {   //If "T | undefined)" is used then no need to use "!" in next line
        return this.items[index]!; //non-null assertion operator to indicate that the item will exsist at the given index(Outputs undefined if there is no such index)
    }
}

const names = new Storage<string>();
names.addItems("Aaryan");
names.addItems("Arush");
names.addItems("Rohan");

console.log(names.getItem(0), names.getItem(1), names.getItem(2), names.getItem(3)); //undefined fpr index 3