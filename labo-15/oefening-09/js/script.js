const address = { street: "Lange Nieuwstraat", number: 14, city: "Antwerpen" };
const person  = { firstName: "Lena", lastName: "Peeters", age: 21 };

const addressCopy = { ...address, number: 99 };
const contact = { ...person, ...address };

console.log("Kopie:", addressCopy);
console.log("Contact:", contact);
console.log("Origineel ongewijzigd:", address);
