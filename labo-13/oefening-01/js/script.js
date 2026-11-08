const firstName = prompt("Wat is je voornaam?");
const lastName = prompt("Wat is je achternaam?");

// prompt geeft altijd een string terug. parseInt maakt er een geheel getal van.
// Het tweede argument (10) is de radix: we lezen een gewoon decimaal getal.
const age = parseInt(prompt("Hoe oud ben je?"), 10);

if (firstName === "" || lastName === "") {
    console.log("Vul zowel voornaam als achternaam in!");
} else if (isNaN(age) || age < 12 || age > 60) {
    // isNaN vangt de gevallen op waar de gebruiker geen geldig getal intypte
    console.log("U behoort niet tot de gezochte leeftijdsklasse!");
} else {
    console.log(`Welkom ${firstName} ${lastName}, je bent ${age} jaar oud.`);
}
