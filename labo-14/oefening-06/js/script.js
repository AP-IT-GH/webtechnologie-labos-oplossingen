
const pokemon = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
];

// Maak een array voor het team
let team = [];

// Print de lijst van pokémon in de console
for (let i = 0; i < pokemon.length; i++) {
    console.log((i + 1) + ". " + pokemon[i]);
}

// Voeg pokémon toe aan het team met een do-while loop
let input;
do {
    input = prompt("Welke Pokémon wil je in je team? [1-21] (Typ 'STOP' om te eindigen):");

    if (input !== null) {
        const index = parseInt(input);

        if (!isNaN(index) && index > 0 && index <= pokemon.length) {
            const chosenPokemon = pokemon[index - 1];

            if (team.includes(chosenPokemon)) {
                console.log("Deze pokemon zit al in je team");
            } else {
                team.push(chosenPokemon);
            }
        } else if (input.toLowerCase() !== "stop") {
            console.log("Deze pokemon ken ik niet");
        }
    }
} while (input !== null && input.toLowerCase() !== "stop");

// Print het team van de gebruiker in de console
console.log("Jouw team van pokemon is:");
for (let i = 0; i < team.length; i++) {
    console.log((i + 1) + ". " + team[i]);
}
