const num1 = parseInt(prompt("Geef getal 1 in"), 10);
const num2 = parseInt(prompt("Geef getal 2 in"), 10);
const operator = prompt("Geef de operator in (+, -, *, /)");

if (operator === "/" && num2 === 0) {
    console.log("Fout: delen door 0 is niet toegestaan.");
} else {
    // De ongeldige operator handelen we af in de default-tak,
    // een aparte controle vooraf is dus niet meer nodig
    switch (operator) {
        case "+":
            console.log(`Resultaat: ${num1 + num2}`);
            break;
        case "-":
            console.log(`Resultaat: ${num1 - num2}`);
            break;
        case "*":
            console.log(`Resultaat: ${num1 * num2}`);
            break;
        case "/":
            console.log(`Resultaat: ${num1 / num2}`);
            break;
        default:
            console.log("Fout: ongeldige operator. Gebruik alleen +, -, * of /.");
    }
}
