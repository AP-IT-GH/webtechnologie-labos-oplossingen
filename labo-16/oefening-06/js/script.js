const products = [
  { name: 'toetsenbord', price: 45 },
  { name: 'muis', price: 20 },
  { name: 'monitor', price: 180 },
  { name: 'webcam', price: 60 },
];

// find() doorloopt de array en geeft het EERSTE element terug
// waarvoor de callback true teruggeeft. Daarna stopt hij.
function findFirstExpensive(items, limit) {
  return items.find((product) => product.price > limit);
}

console.log(findFirstExpensive(products, 50));
// { name: 'monitor', price: 180 }

// Zoeken op naam
function findByName(items, name) {
  return items.find((product) => product.name === name);
}

console.log(findByName(products, 'muis'));
// { name: 'muis', price: 20 }

// Vindt find() niets, dan is het resultaat undefined.
// Vang dat op voor je het resultaat gebruikt.
const mostExpensive = findFirstExpensive(products, 500);

if (mostExpensive === undefined) {
  console.log('Geen product gevonden boven die prijs');
} else {
  console.log(mostExpensive.name);
}
// Geen product gevonden boven die prijs
