// Oefening 7: Getal raden

// 1. Een getal dat de gebruiker moet raden.
let answer = 4

// 2. Vraag de gebruiker om een gok
let guess = Number(prompt("Raad het getal (tussen 1 en 10):"));

// 3. Controleer het antwoord
if (guess === answer) {
    console.log("Gefeliciteerd, je hebt het juiste getal geraden!");
} else {
    console.log(`Helaas, het juiste getal was ${answer}.`);
}
