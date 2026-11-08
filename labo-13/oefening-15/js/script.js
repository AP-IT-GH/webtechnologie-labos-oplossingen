// Oefening 15: Even of oneven met de ternaire operator

const limit = 10;

let oddCount = 0;

for (let i = 1; i <= limit; i++) {
    // Een vergelijking geeft meteen een boolean terug, een if is hier niet nodig
    const isEven = i % 2 === 0;

    // De ternaire operator kiest tussen twee waarden op basis van een conditie
    const label = isEven ? "even" : "oneven";

    console.log(`${i} is ${label}`);

    // De NOT-operator draait de boolean om
    if (!isEven) {
        oddCount++;
    }
}

const message = oddCount === 1 ? "Er is 1 oneven getal." : `Er zijn ${oddCount} oneven getallen.`;

console.log(message);
