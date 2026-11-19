
// Recept object aanmaken
const spaghetti = {
    name: "Spaghetti Bolognese",
    description: "Een klassiek Italiaans gerecht",
    persons: 4,
    ingredients: [
        { name: "Spaghetti", amount: "400 gram", price: 2.5 },
        { name: "Gehakt", amount: "500 gram", price: 5 },
        { name: "Tomatensaus", amount: "1 blik", price: 3 },
        { name: "Ui", amount: "1 stuk", price: 0.5 }
    ]
};

// Functie om totaalprijs te berekenen
function calculateTotalPrice(recipe) {
    let total = 0;

    // Loop door alle ingredienten
    for (let i = 0; i < recipe.ingredients.length; i++) {
        // Voeg de prijs van elk ingrediënt toe aan de totaalprijs
        total += recipe.ingredients[i].price;
    }

    return total;
}

// Print de naam van het gerecht en de totaalprijs van alle ingrediënten in de console
console.log(spaghetti.name);
console.log("Totaalprijs van de ingrediënten: " + calculateTotalPrice(spaghetti).toFixed(2));
