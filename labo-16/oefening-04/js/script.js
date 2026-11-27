// Functie die elk element van een array in de console print met forEach
function printAll(items) {
  // forEach roept de callback één keer op voor elk element van de array
  items.forEach((item) => console.log(item));
}

// Functie die elk element print met zijn index erbij
function printWithIndex(items) {
  // De callback van forEach krijgt als tweede parameter de index van het element
  items.forEach((item, index) => console.log(`${index}: ${item}`));
}

const plants = ['varen', 'cactus', 'monstera', 'basilicum'];

printAll(plants);
// varen
// cactus
// monstera
// basilicum

printWithIndex(plants);
// 0: varen
// 1: cactus
// 2: monstera
// 3: basilicum
