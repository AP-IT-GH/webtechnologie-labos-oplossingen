
// Gegeven invoer als één string
const input = "brood,melk,kaas,appels";

// Splits de string op de komma tot een array
const shoppingList = input.split(",");
console.log("Je lijst bevat " + shoppingList.length + " boodschappen.");

// Achteraan toevoegen met push(), vooraan toevoegen met unshift()
shoppingList.push("boter");
shoppingList.unshift("koffie");
console.log(shoppingList.join(" | "));

// Laatste element verwijderen met pop(). pop() geeft het verwijderde element terug
const removedLast = shoppingList.pop();
console.log(removedLast + " valt weg (laatste boodschap verwijderd).");

// Eerste element verwijderen met shift()
const removedFirst = shoppingList.shift();
console.log(removedFirst + " hebben we nog in huis (eerste boodschap verwijderd).");

// Zoek de index van "kaas" en vervang dat element via zijn index
const cheeseIndex = shoppingList.indexOf("kaas");
shoppingList[cheeseIndex] = "hummus";
console.log("kaas stond op index " + cheeseIndex + " en is nu " + shoppingList[cheeseIndex] + ".");

// indexOf() geeft -1 terug wanneer de waarde niet in de array zit
if (shoppingList.indexOf("chips") === -1) {
    console.log("chips staat niet op je lijst.");
}

// Een index buiten bereik geeft undefined terug
console.log("Element op index 10: " + shoppingList[10]);

// Twee elementen verwijderen vanaf index 1 met splice()
const removed = shoppingList.splice(1, 2);
console.log("Verwijderd met splice(): " + removed.join(" en "));

// De volledige lijst als één regel met join()
console.log("Je definitieve boodschappenlijst: " + shoppingList.join(", "));
