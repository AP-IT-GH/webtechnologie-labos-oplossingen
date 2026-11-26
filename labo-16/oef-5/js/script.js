const getallen = [3, 2, 12, 22, 4];

// Zonder callback zet sort() alle waarden om naar strings.
// '12' komt dan vóór '2', want '1' komt vóór '2' in de Unicode-tabel.
console.log('Fout gesorteerd:', getallen.toSorted());
// Fout gesorteerd: [ 12, 2, 22, 3, 4 ]

// Met een callback bepalen we zelf hoe er vergeleken wordt.
// a - b is negatief als a < b, positief als a > b en 0 als ze gelijk zijn:
// precies wat sort() verwacht.
function sortNumbers(numbers) {
  // toSorted() geeft een nieuwe, gesorteerde array terug en laat de originele ongemoeid
  return numbers.toSorted((a, b) => a - b);
}

const gesorteerd = sortNumbers(getallen);

console.log('Juist gesorteerd:', gesorteerd);
// Juist gesorteerd: [ 2, 3, 4, 12, 22 ]

console.log('Origineel:', getallen);
// Origineel: [ 3, 2, 12, 22, 4 ]

// Aflopend sorteren: draai a en b om
console.log('Aflopend:', getallen.toSorted((a, b) => b - a));
// Aflopend: [ 22, 12, 4, 3, 2 ]
