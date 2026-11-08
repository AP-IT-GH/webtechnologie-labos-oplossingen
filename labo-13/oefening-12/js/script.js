// Oefening 12: Som van even getallen

const limit = 10;
let sum = 0;

for (let i = 1; i <= limit; i++) {
    // Een getal is even als de rest na deling door 2 gelijk is aan 0
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log(`De som van alle even getallen tot en met ${limit} is ${sum}.`);
