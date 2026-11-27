const producten = [
  { naam: 'toetsenbord', prijs: 45 },
  { naam: 'muis', prijs: 20 },
  { naam: 'monitor', prijs: 180 },
  { naam: 'webcam', prijs: 60 },
];

// find() doorloopt de array en geeft het EERSTE element terug
// waarvoor de callback true teruggeeft. Daarna stopt hij.
function findFirstExpensive(products, limiet) {
  return products.find((product) => product.prijs > limiet);
}

console.log(findFirstExpensive(producten, 50));
// { naam: 'monitor', prijs: 180 }

// Zoeken op naam
function findByName(products, naam) {
  return products.find((product) => product.naam === naam);
}

console.log(findByName(producten, 'muis'));
// { naam: 'muis', prijs: 20 }

// Vindt find() niets, dan is het resultaat undefined.
// Vang dat op voor je het resultaat gebruikt.
const duurste = findFirstExpensive(producten, 500);

if (duurste === undefined) {
  console.log('Geen product gevonden boven die prijs');
} else {
  console.log(duurste.naam);
}
// Geen product gevonden boven die prijs
