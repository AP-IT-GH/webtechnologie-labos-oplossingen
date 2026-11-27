// Functie die objecten sorteert op basis van een attribuutnaam
function sortByAttribute(objectArray, attributeName) {
  // De callback vergelijkt twee objecten op het opgegeven attribuut.
  // Dezelfde vergelijking werkt voor getallen én voor strings,
  // zolang die strings met een hoofdletter beginnen en geen accenten bevatten.
  objectArray.sort((a, b) => {
    if (a[attributeName] < b[attributeName]) return -1;
    if (a[attributeName] > b[attributeName]) return 1;
    return 0;
  });

  return objectArray;
}

const people = [
  { name: 'Bob', age: 45 },
  { name: 'Charlie', age: 35 },
  { name: 'Alice', age: 30 },
];

// sort() past de array zelf aan, dus geven we telkens een kopie mee.
const sortedByAge = sortByAttribute([...people], 'age');
const sortedByName = sortByAttribute([...people], 'name');

console.log('De originele array:', people);
console.log('Gesorteerd op age:', sortedByAge);
console.log('Gesorteerd op name:', sortedByName);
