function createCalculator(operation) {
  if (operation === 'add') {
    return function (num1, num2, callback) {
      const result = num1 + num2;
      callback(result);
    };
  } else if (operation === 'multiply') {
    return function (num1, num2, callback) {
      const result = num1 * num2;
      callback(result);
    };
  } else {
    return null;
  }
}

function printToConsole(result) {
  console.log(result);
}

const addCalculator = createCalculator('add');
addCalculator(5, 10, printToConsole);

const multiplyCalculator = createCalculator('multiply');
multiplyCalculator(3, 4, printToConsole);
