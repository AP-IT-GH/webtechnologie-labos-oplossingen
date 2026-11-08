const grade = parseInt(prompt("Geef een cijfer tussen 0 en 10:"), 10);
let rating;

// Cases zonder break vallen door naar de volgende case.
// Zo groeperen we alle cijfers die dezelfde beoordeling krijgen.
switch (grade) {
    case 0:
    case 1:
    case 2:
        rating = "Zeer slecht";
        break;
    case 3:
    case 4:
        rating = "Onvoldoende";
        break;
    case 5:
    case 6:
        rating = "Voldoende";
        break;
    case 7:
    case 8:
        rating = "Goed";
        break;
    case 9:
    case 10:
        rating = "Uitstekend";
        break;
    default:
        rating = "Fout: geef een geldig cijfer tussen 0 en 10.";
}

console.log(rating);
