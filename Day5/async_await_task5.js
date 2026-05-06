// // 1. Rick and Morty Characters
// // Fetches characters and filters for those who are still "Alive" and are "Human".
async function getRickAndMortyCharacters() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    const aliveHumans = data.results
      .filter(c => c.status === "Alive" && c.species === "Human")
      .map(c => c.name);
    console.log("Alive Humans:", aliveHumans);
  } catch (err) {
    console.error(err);
  }
}
getRickAndMortyCharacters();

// // 2. Programming Jokes
// // Fetches 10 random jokes and filters for the "programming" category that aren't "explicit".
async function getProgrammingJokes() {
  try {
    const res = await fetch("https://v2.jokeapi.dev/joke/Any?amount=10");
    const data = await res.json();
    const jokes = data.jokes
      .filter(j => j.category === "Programming" && !j.flags.nsfw)
      .map(j => j.setup || j.joke);
    console.log("Programming Jokes:", jokes);
  } catch (err) {
    console.error(err);
  }
}
getProgrammingJokes();

// // 3. Open Brewery DB
// // Fetches a list of breweries and filters for those located in "California".
async function getCaliforniaBreweries() {
  try {
    const res = await fetch("https://api.openbrewerydb.org/v1/breweries?per_page=50");
    const list = await res.json();
    const caliBreweries = list
      .filter(b => b.state_province === "California")
      .map(b => b.name);
    console.log("California Breweries:", caliBreweries);
  } catch (err) {
    console.error(err);
  }
}
getCaliforniaBreweries();

// // 4. Harry Potter Characters
// // Fetches characters and filters for those who belong to "Gryffindor" house.
async function getGryffindorCharacters() {
  try {
    const res = await fetch("https://hp-api.onrender.com/api/characters");
    const chars = await res.json();
    const names = chars
      .filter(c => c.house === "Gryffindor")
      .map(c => c.name);
    console.log("Gryffindors:", names);
  } catch (err) {
    console.error(err);
  }
}
getGryffindorCharacters();

// // 5. Fake Store Products
// // Fetches products and filters for those in the "electronics" category with a price under $100.
async function getCheapElectronics() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    const titles = products
      .filter(p => p.category === "electronics" && p.price < 100)
      .map(p => p.title);
    console.log("Cheap Electronics:", titles);
  } catch (err) {
    console.error(err);
  }
}
getCheapElectronics();

// // 6. Advice Slip (Search)
// // Searches for advice containing the word "life" and maps the text of the advice slips.
async function getLifeAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice/search/life");
    const data = await res.json();
    const slips = data.slips.map(s => s.advice);
    console.log("Life Advice:", slips);
  } catch (err) {
    console.error(err);
  }
}
getLifeAdvice();

// // 7. JSONPlaceholder (Users)
// // Fetches users and filters for those whose website ends in .net.
async function getNetUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    const emails = users
      .filter(u => u.website.endsWith(".net"))
      .map(u => u.email);
    console.log(".net Emails:", emails);
  } catch (err) {
    console.error(err);
  }
}
getNetUsers();

// // 8. Disney Characters
// // Fetches Disney characters and filters for those who have appeared in more than 2 films.
async function getDisneyStars() {
  try {
    const res = await fetch("https://api.disneyapi.dev/character");
    const resData = await res.json();
    const names = resData.data
      .filter(c => c.films.length > 2)
      .map(c => c.name);
    console.log("Disney Stars (>2 films):", names);
  } catch (err) {
    console.error(err);
  }
}
getDisneyStars();

// // 9. Frankfurter (Currency Exchange)
// // Fetches the latest exchange rates and filters for currencies where the value is higher than 10 relative to the Euro.
async function getHighValueCurrencies() {
  try {
    const res = await fetch("https://api.frankfurter.app/latest");
    const data = await res.json();
    const highVal = Object.entries(data.rates)
      .filter(([cur, val]) => val > 10)
      .map(([cur]) => cur);
    console.log("Currencies > 10 relative to EUR:", highVal);
  } catch (err) {
    console.error(err);
  }
}
getHighValueCurrencies();

// 10. SpaceX Missions
// This call fetches all SpaceX missions, filters for those manufactured by "SpaceX" (as some are made by Orbital ATK or Boeing), and maps out the mission names.
async function getSpaceXMissions() {
  try {
    const res = await fetch("https://api.spacexdata.com/v3/missions");
    const missions = await res.json();
    const filtered = missions
      .filter(m => m.manufacturers.includes("SpaceX"))
      .map(m => m.mission_name);
    console.log("SpaceX Missions:", filtered);
  } catch (err) {
    console.error("Error fetching SpaceX data:", err);
  }
}
getSpaceXMissions();