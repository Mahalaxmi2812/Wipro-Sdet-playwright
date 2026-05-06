// async function getData(){
//     const sum = 2 + 2;
//     return await new Promise((resolve, reject) => {
//         if(2<3){
//             setTimeout(() => {resolve("Data received");}, 2000);
//         }else{
//             reject('not working');
//         }
//     });
// }
// getData().then(data => console.log(data)).catch(err => console.log(err));

//await is only valid inside async functions

// async function getTodos(url){
//     let data = await fetch("https://jsonplaceholder.typicode.com/todos");  //cursor is blocked in this line
//     data = data.json(); 
//     return data;
// }

// getTodos().then(data => console.log(data)); 

const obj = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(JSON.stringify(obj)); // Convert object to JSON string
console.log(JSON.parse('{"name":"John","age":30,"city":"New York"}')); // Convert JSON string back to object


// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(res => res.json()) // res -> string -> json)
//     .then(data => data.filter(d => d.id % 2 === 0))
//     .then(data => data.map(d => (d.title = "Aaryan " + d.title)))
//     .then(data => console.log(data))
//     .catch(error => console.error("Error fetching data:", error));
 
// getData().then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.error("Error:", error);
// });
 
const timeoutId = setTimeout(() => { // Schedule a task to run after 5 seconds
    console.log("Data received");
}, 5000);
console.log("test");
 
clearTimeout(timeoutId); // Cancel the scheduled task before it executes


let count = 0;
const i = setInterval(() => {  // Schedule a task to run every 3 seconds
    console.log("Checking for new data...");
    count++;
    if (count >= 5) {
        clearInterval(i); // Stop the interval after 5 checks
    }
}, 3000);
 
