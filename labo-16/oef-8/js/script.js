const artists = [
  { name: 'Stromae', streams: 4200 },
  { name: 'Élodie', streams: 1800 },
  { name: 'angèle', streams: 3100 },
  { name: 'Balthazar', streams: 900 },
];

// Met > en < vergelijk je de Unicode-waarden: 'angèle' belandt achteraan
// omdat kleine letters na hoofdletters komen, en 'Élodie' nog verder.
console.log('Fout gesorteerd:', artists.toSorted((a, b) => (a.name > b.name ? 1 : -1)));

// localeCompare vergelijkt volgens de taalregels.
function sortByName(artistsArray) {
  return artistsArray.toSorted((a, b) => a.name.localeCompare(b.name));
}

console.log('Juist gesorteerd:', sortByName(artists));
console.log('Origineel:', artists);
