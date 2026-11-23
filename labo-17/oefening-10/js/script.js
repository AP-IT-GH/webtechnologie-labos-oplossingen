const list = document.querySelector("#list");

// een nieuw item vooraan toevoegen met insertBefore
const firstItem = document.createElement("li");
firstItem.textContent = "Nieuw bovenaan";

list.insertBefore(firstItem, list.firstChild);

// en een nieuw item achteraan toevoegen met appendChild
const lastItem = document.createElement("li");
lastItem.textContent = "Nieuw onderaan";

list.appendChild(lastItem);

console.log(list.innerHTML);
