const columns = 5;
const rows = 3;

// Doorloop de rijen
for (let i = 1; i <= rows; i++) {
    let row = "";

    // Doorloop de kolommen binnen elke rij
    for (let j = 1; j <= columns; j++) {
        row += "X ";
    }

    // trim() haalt de spatie achteraan weg
    console.log(row.trim());
}
