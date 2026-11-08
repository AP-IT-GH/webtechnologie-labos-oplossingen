// Oefening 8: Willekeurig getal

const minimum = 1;
const maximum = 10;

// 1. Math.random() geeft een kommagetal van 0 tot net onder 1.
//    Dankzij de + 1 in de formule kan het maximum ook uitkomen.
const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// 2. Vraag de gok van de gebruiker
const guess = parseInt(prompt("Raad het getal (tussen 1 en 10):"), 10);

// 3. Controleer het antwoord
if (guess === answer) {
    console.log("Gefeliciteerd, je hebt het juiste getal geraden!");
} else {
    console.log(`Helaas, het juiste getal was ${answer}.`);
}
