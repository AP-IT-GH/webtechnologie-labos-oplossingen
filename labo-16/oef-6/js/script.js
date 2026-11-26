const adjectives = ['leuk', 'aardig', 'Zalig', 'Élan', 'Blij'];

// Zonder callback vergelijkt sort() de Unicode-waarden van de strings.
// Alle hoofdletters komen daarin vóór de kleine letters, en letters met
// een accent staan er helemaal achter. 'Zalig' komt dus vóór 'aardig'
// en 'Élan' belandt op het einde.
console.log('Fout gesorteerd:', adjectives.toSorted());
// Fout gesorteerd: [ 'Blij', 'Zalig', 'aardig', 'leuk', 'Élan' ]

// localeCompare vergelijkt volgens de taalregels: het negeert het verschil
// tussen hoofdletters en kleine letters en zet 'É' bij de 'e'.
function sortStrings(stringsArray) {
  // toSorted() geeft een nieuwe array terug en laat de originele ongemoeid
  return stringsArray.toSorted((a, b) => a.localeCompare(b));
}

console.log('Juist gesorteerd:', sortStrings(adjectives));
// Juist gesorteerd: [ 'aardig', 'Blij', 'Élan', 'leuk', 'Zalig' ]

console.log('Origineel:', adjectives);
// Origineel: [ 'leuk', 'aardig', 'Zalig', 'Élan', 'Blij' ]
