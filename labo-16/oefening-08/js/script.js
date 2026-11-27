const artists = [
  { name: 'Stromae', streams: 4200 },
  { name: 'Élodie', streams: 1800 },
  { name: 'angèle', streams: 3100 },
  { name: 'Balthazar', streams: 900 },
];

// Met > en < vergelijk je de Unicode-waarden: 'angèle' belandt achteraan
// omdat kleine letters na hoofdletters komen, en 'Élodie' nog verder.
const wronglySorted = artists.toSorted((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

console.log('Fout gesorteerd:', wronglySorted);

// localeCompare vergelijkt volgens de taalregels.
function sortByName(artistsArray) {
  return artistsArray.toSorted((a, b) => a.name.localeCompare(b.name));
}

// toSorted() geeft een nieuwe array terug, het origineel blijft ongewijzigd.
console.log('Juist gesorteerd:', sortByName(artists));
console.log('Origineel:', artists);
