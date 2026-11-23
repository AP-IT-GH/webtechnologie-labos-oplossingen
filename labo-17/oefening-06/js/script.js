// Nieuw li-element maken
const newLi = document.createElement("li");

newLi.textContent = "Nieuw item";
// newLi.innerHTML = "Nieuw item"; // alternatief voor de regel hierboven

// Bestaande ul selecteren en nieuw li-element toevoegen
const myList = document.querySelector("#list");
myList.appendChild(newLi);

// Resultaat tonen in de console
console.log(myList.innerHTML);
