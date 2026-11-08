// Oefening 14: Fibonacci-reeks

const numberOfGeneratedNumbers = 10;

// Elk getal is de som van de twee vorige, dus die twee houden we bij
let previous = 0;
let current = 1;

let sequence = "";

for (let i = 0; i < numberOfGeneratedNumbers; i++) {
    sequence += `${previous}, `;

    const next = previous + current;
    previous = current;
    current = next;
}

// Knip de laatste ", " weg
sequence = sequence.substring(0, sequence.length - 2);

console.log(`De eerste ${numberOfGeneratedNumbers} Fibonacci-getallen zijn: ${sequence}`);
