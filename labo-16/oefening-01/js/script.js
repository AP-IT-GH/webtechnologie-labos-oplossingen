function calculate(num1, num2, callback) {
    const sum = num1 + num2;
    callback(sum);
}

function printToConsole(result) {
    console.log(result);
}

calculate(5, 10, printToConsole);
