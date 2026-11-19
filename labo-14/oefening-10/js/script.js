
// Importeer data uit JSON
import personData from "../assets/json/person.json" with { type: 'json' };

// Print de volledige naam via dot-notatie
console.log(personData.firstname + " " + personData.lastname);

// Loop door de hobby's en print ze één voor één
console.log("Hobbies:");
for (let i = 0; i < personData.hobbies.length; i++) {
    console.log("- " + personData.hobbies[i]);
}
