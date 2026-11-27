// Functie die de even getallen uit een array haalt en ze daarna verdubbelt
function filterAndDouble(numbers) {
  // filter houdt enkel de elementen over waarvoor de callback true teruggeeft
  const evenNumbers = numbers.filter((number) => number % 2 === 0);

  // map maakt een nieuwe array met het resultaat van de callback per element
  const doubledNumbers = evenNumbers.map((number) => number * 2);

  return doubledNumbers;
}

const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultArray = filterAndDouble(inputNumbers);

console.log('De input array:', inputNumbers);
console.log('Gefilterd en verdubbeld:', resultArray);
// De input array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Gefilterd en verdubbeld: [4, 8, 12, 16, 20]
