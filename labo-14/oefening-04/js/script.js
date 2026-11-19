
// Gegeven array van cijfers
const grades = [16, 12, 16, 7, 17, 14, 9, 8, 18, 12];

let total = 0;
let succeeded = 0;
let failed = 0;

for (const grade of grades) {
    // Totaal nodig voor berekenen van gemiddelde
    total += grade;

    // Aantal geslaagde nodig voor berekening percentage en aantal gebuisde
    if (grade >= 10) {
        succeeded++;
    } else {
        failed++;
    }
}

// Bereken gemiddelde
const average = total / grades.length;

// Bereken het percentage
const percentage = (total / (grades.length * 20)) * 100;

// Print de resultaten in de console
console.log("Gemiddelde: " + average);
console.log("Percentage: " + percentage + "%");
console.log("Aantal gebuisde vakken: " + failed);

// Uitbreiding: laat de gebruiker de punten zelf ingeven. Vervang de array hierboven
// door onderstaande do while lus. De berekening eronder blijft identiek.
//
// const grades = [];
// let input;
//
// do {
//     input = prompt("Voer een punt in (typ 'stop' om te eindigen):");
//     if (input !== null && input !== "" && !isNaN(input)) {
//         grades.push(parseInt(input));
//     }
// } while (input !== null && input.toLowerCase() !== "stop");
