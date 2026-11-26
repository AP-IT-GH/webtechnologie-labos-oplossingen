
// Vraag het aantal vrienden op via prompt
const amountFriends = parseInt(prompt("Hoeveel vrienden wil je toevoegen?"));

// Maak een array voor de vrienden
const friends = [];

// Vraag X aantal keer de naam van de vriend en voeg toe aan het begin van de array
for (let i = 0; i < amountFriends; i++) {
    const friendName = prompt("Geef de naam van vriend " + (i + 1) + ":");
    friends.unshift(friendName);
}

// Print de vriendenlijst in de console (laatste ingave eerst)
console.log(friends);
