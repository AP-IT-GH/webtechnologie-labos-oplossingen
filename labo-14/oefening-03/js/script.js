// Maak twee arrays met voornamen en achternamen
const firstNames = ["Emma", "Liam", "Sophie", "Noah", "Fatima"];
const lastNames = ["Pietersen", "de Vries", "Bakker", "Legrand", "Errazzouki"];

// Controleer of de lengte van beide arrays gelijk is
if (firstNames.length !== lastNames.length) {
    console.error("Fout: De lengte van de arrays is niet gelijk.");
} else {
    // Gebruik een for-loop om door de lijst van namen te lopen
    for (let i = 0; i < firstNames.length; i++) {
        // Voeg voor- en achternaam samen en print de volledige naam
        const fullName = firstNames[i] + " " + lastNames[i];
        console.log(fullName);
    }
}
