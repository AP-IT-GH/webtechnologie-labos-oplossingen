const year = parseInt(prompt("Geef het jaartal in:"), 10);

// De flowchart uit de opgave, letterlijk omgezet naar geneste if-statements
let isLeapYear = false;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}

if (isLeapYear) {
    console.log(`${year} is een schrikkeljaar!`);
} else {
    console.log(`${year} is geen schrikkeljaar.`);
}
