
// Importeer data uit JSON
import animalsData from "../assets/json/dieren.json" with { type: 'json' };

// Print de genummerde lijst van dierennamen in de console
for (let i = 0; i < animalsData.length; i++) {
    console.log((i + 1) + ". " + animalsData[i].name);
}

// Vraag de gebruiker een dier te kiezen via prompt
const input = prompt("Welk dier wil je meer info over? [1-" + animalsData.length + "]:");
const chosenAnimal = animalsData[parseInt(input) - 1];

// Print de info van het gekozen dier in de console
if (chosenAnimal) {
    console.log(chosenAnimal.info);
} else {
    console.log("Foutieve keuze, gelieve enkel een getal te kiezen uit de lijst met opties.");
}
