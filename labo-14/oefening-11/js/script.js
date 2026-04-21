
// Importeer data uit JSON
import animalsData from "../assets/json/dieren.json" with { type: 'json' };

// Functie om een lijst van dierennamen terug te geven
function getAnimalsList(animals) {
    const animalNames = [];
    for (let i = 0; i < animals.length; i++) {
        animalNames.push(animals[i].name);
    }
    return animalNames;
}

// Roep de functie aan met het ingelezen array van dieren
const animalsList = getAnimalsList(animalsData);

// Print de genummerde lijst van dieren in de console
for (let i = 0; i < animalsList.length; i++) {
    console.log((i + 1) + ". " + animalsList[i]);
}

// Functie om informatie over een gekozen dier in de console te tonen
function displayAnimalInfo(animals, choice) {
    const chosenAnimal = animals[choice - 1];
    if (chosenAnimal) {
        console.log(chosenAnimal.info);
    } else {
        console.log("Foutieve keuze, gelieve enkel een getal te kiezen uit de lijst met opties.");
    }
}

// Vraag de gebruiker een dier te kiezen via prompt
const input = prompt("Welk dier wil je meer info over? [1-" + animalsData.length + "]:");
displayAnimalInfo(animalsData, parseInt(input));
