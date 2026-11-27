// een functie zonder argumenten die een getal teruggeeft
function getNumber() {
    return 42;
}

// een functie zonder argumenten die een string teruggeeft
function getGreeting() {
    return "Hallo!";
}

// een functie zonder argumenten die een boolean teruggeeft
function isWebtechnologieLeuk() {
    return true;
}

// een functie zonder argumenten die een string afprint in de console
function printGreeting() {
    console.log("Hallo vanuit een functie!");
}

// een functie met twee getallen die het resultaat afprint
function printSum(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

// dezelfde functie in arrow notatie
const printSumArrow = (firstNumber, secondNumber) => {
    console.log(firstNumber + secondNumber);
};

// arrow functie met verkorte notatie: zonder accolades en zonder return
const double = number => number * 2;

// functie met een standaardwaarde voor de tweede parameter
function multiply(number, factor = 2) {
    return number * factor;
}

console.log(getNumber());
console.log(getGreeting());
console.log(isWebtechnologieLeuk());
printGreeting();
printSum(3, 4);
printSumArrow(3, 4);
console.log(double(5));
console.log(multiply(5));
console.log(multiply(5, 10));
