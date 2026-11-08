// Het te raden getal staat vast. Wil je elke keer een ander getal,
// dan kan je het genereren zoals in oefening 8.
const secretNumber = 17;

let guess;

// Een do-while loopt altijd minstens één keer: we moeten de vraag
// eerst stellen voor we iets kunnen controleren.
do {
    guess = parseInt(prompt("Raad het getal tussen 0 en 30:"), 10);

    if (guess > secretNumber) {
        console.log(`${guess} is te hoog, probeer lager.`);
    } else if (guess < secretNumber) {
        // Door hier else if te gebruiken in plaats van een gewone else,
        // herhaalt de lus zich ook als de gebruiker geen geldig getal intypt
        console.log(`${guess} is te laag, probeer hoger.`);
    }
} while (guess !== secretNumber);

console.log("Gefeliciteerd, je hebt het juiste getal geraden!");
