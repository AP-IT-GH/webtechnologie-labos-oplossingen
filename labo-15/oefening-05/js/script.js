const cities = [
    { name: "Gent", temperature: 12 },
    { name: "Antwerpen", temperature: 4 },
    { name: "Hasselt", temperature: 25 },
    { name: "Brugge", temperature: 9 },
    { name: "Leuven", temperature: 7 },
];

function compareTemperature(a, b) {
    return a.temperature - b.temperature;
}

console.log("Koudste eerst:", [...cities].sort(compareTemperature));
console.log("Originele lijst ongewijzigd:", cities);

console.log("Warmste eerst:", [...cities].sort((a, b) => b.temperature - a.temperature));

cities.sort(compareTemperature);
console.log("sort() past de originele array aan:", cities);
