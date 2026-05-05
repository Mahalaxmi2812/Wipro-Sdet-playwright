// // 1. Rick and Morty Characters
// // Fetches characters and filters for those who are still "Alive" and are "Human".
// fetch("https://rickandmortyapi.com/api/character")
//   .then(res => res.json())
//   .then(data => data.results)
//   .then(chars => chars.filter(c => c.status === "Alive" && c.species === "Human"))
//   .then(aliveHumans => aliveHumans.map(c => c.name))
//   .then(console.log)
//   .catch(err => console.error(err));

// // 2. Programming Jokes
// // Fetches 10 random jokes and filters for the "programming" category that aren't "explicit".
// fetch("https://v2.jokeapi.dev/joke/Any?amount=10")
//   .then(res => res.json())
//   .then(data => data.jokes)
//   .then(list => list.filter(j => j.category === "Programming" && !j.flags.nsfw))
//   .then(jokes => jokes.map(j => j.setup || j.joke))
//   .then(console.log);

// // 3. Open Brewery DB
// // Fetches a list of breweries and filters for those located in "California".
// fetch("https://api.openbrewerydb.org/v1/breweries?per_page=50")
//   .then(res => res.json())
//   .then(list => list.filter(b => b.state_province === "California"))
//   .then(caliBreweries => caliBreweries.map(b => b.name))
//   .then(console.log);

// // 4. Harry Potter Characters
// // Fetches characters and filters for those who belong to "Gryffindor" house.
// fetch("https://hp-api.onrender.com/api/characters")
//   .then(res => res.json())
//   .then(chars => chars.filter(c => c.house === "Gryffindor"))
//   .then(names => names.map(c => c.name))
//   .then(console.log);

// // 5. Fake Store Products
// // Fetches products and filters for those in the "electronics" category with a price under $100.
// fetch("https://fakestoreapi.com/products")
//   .then(res => res.json())
//   .then(products => products.filter(p => p.category === "electronics" && p.price < 100))
//   .then(titles => titles.map(p => p.title))
//   .then(console.log);

// // 6. Advice Slip (Search)
// // Searches for advice containing the word "life" and maps the text of the advice slips.
// fetch("https://api.adviceslip.com/advice/search/life")
//   .then(res => res.json())
//   .then(data => data.slips)
//   .then(slips => slips.map(s => s.advice))
//   .then(console.log);

// // 7. JSONPlaceholder (Users)
// // Fetches users and filters for those whose website ends in .net.
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(users => users.filter(u => u.website.endsWith(".net")))
//   .then(emails => emails.map(u => u.email))
//   .then(console.log);

// // 8. Disney Characters
// // Fetches Disney characters and filters for those who have appeared in more than 2 films.
// fetch("https://api.disneyapi.dev/character")
//   .then(res => res.json())
//   .then(res => res.data)
//   .then(chars => chars.filter(c => c.films.length > 2))
//   .then(names => names.map(c => c.name))
//   .then(console.log);

// // 9. Frankfurter (Currency Exchange)
// // Fetches the latest exchange rates and filters for currencies where the value is higher than 10 relative to the Euro.
// fetch("https://api.frankfurter.app/latest")
//   .then(res => res.json())
//   .then(data => Object.entries(data.rates)) // Convert object to array of [key, value]
//   .then(entries => entries.filter(([cur, val]) => val > 10))
//   .then(highVal => highVal.map(([cur]) => cur))
//   .then(console.log);

// 10. SpaceX Missions
// This call fetches all SpaceX missions, filters for those manufactured by "SpaceX" (as some are made by Orbital ATK or Boeing), and maps out the mission names.
fetch("https://api.spacexdata.com/v3/missions")
  .then(res => res.json())
  .then(missions => missions.filter(m => m.manufacturers.includes("SpaceX"))) // Filter by manufacturer
  .then(filtered => filtered.map(m => m.mission_name))                        // Map to mission names
  .then(data => console.log("SpaceX Missions:", data))
  .catch(err => console.error("Error fetching SpaceX data:", err));