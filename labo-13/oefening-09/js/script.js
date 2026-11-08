// Het getal waarvan we de maaltafel maken en hoe ver we gaan
const baseNumber = 5;
const numberOfIterations = 10;

// De string waarin we de maaltafelreeks opbouwen
let multiplications = "";

for (let i = 1; i <= numberOfIterations; i++) {
    multiplications += `${baseNumber * i}, `;
}

// Knip de laatste ", " weg
multiplications = multiplications.substring(0, multiplications.length - 2);

console.log(multiplications);
