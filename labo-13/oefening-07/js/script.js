// Oefening 7: Getal raden

// 1. Een zelfgekozen getal dat de gebruiker moet raden
const answer = 4;

// 2. Vraag de gok van de gebruiker
const guess = parseInt(prompt("Raad het getal (tussen 1 en 10):"), 10);

// 3. Controleer het antwoord
if (guess === answer) {
    console.log("Gefeliciteerd, je hebt het juiste getal geraden!");
} else {
    console.log(`Helaas, het juiste getal was ${answer}.`);
}
