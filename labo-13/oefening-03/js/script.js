const num1 = parseInt(prompt("Geef getal 1 in"), 10);
const num2 = parseInt(prompt("Geef getal 2 in"), 10);
const operator = prompt("Geef de operator in (+, -, *, /)");

// Controleer eerst of de ingevoerde operator geldig is
if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {

    // Genest in die controle kijken we na of er niet door 0 gedeeld wordt
    if (operator === "/" && num2 === 0) {
        console.log("Fout: delen door 0 is niet toegestaan.");
    } else {
        let result;

        if (operator === "+") {
            result = num1 + num2;
        } else if (operator === "-") {
            result = num1 - num2;
        } else if (operator === "*") {
            result = num1 * num2;
        } else {
            result = num1 / num2;
        }

        console.log(`Resultaat: ${result}`);
    }
} else {
    console.log("Fout: ongeldige operator. Gebruik alleen +, -, * of /.");
}
