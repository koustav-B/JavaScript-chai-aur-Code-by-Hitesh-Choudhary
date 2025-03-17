const cityCapitals = new Map([
    ["India", "New Delhi"],
    ["USA", "Washington, D.C."],
    ["France", "Paris"],
    ["Japan", "Tokyo"],
    ["Germany", "Berlin"]
]);

// Print the entire map
console.log(cityCapitals);

for (let [country, capital] of cityCapitals) {
    console.log(`${capital} is the capital of ${country}`);
}