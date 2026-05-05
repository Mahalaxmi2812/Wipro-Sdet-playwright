// function getData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data received")
//         }, 2000) // 2000 milliseconds = 2 seconds
//     });
// }

// getData().then((data) => {
//     console.log(data);      // Output: "Data received" after 2 seconds
// }).catch((error) => {
//     console.error("Error:", error); //If reject is called, this will run
// });

// // setTimeout(() => {
// //     console.log("Timeout completed"); //runs after 3 seconds
// // }, 3000); 

// // setInterval(() => {
// //     console.log("Interval running"); //runs every 3 seconds
// // }, 3000);

fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data => data.filter(d => d.id <= 5))
.then(data => data.map(d => d.title))
.then(data => console.log(data))
.catch(error => console.error("Error fetching data:", error));
