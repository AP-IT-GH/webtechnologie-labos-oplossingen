// de children van de parent opvragen
const list = document.querySelector("#list");
console.log(`De lijst heeft ${list.children.length} children`);

// alle li-elementen selecteren en de NodeList doorlopen met forEach
const items = document.querySelectorAll("#list li");

items.forEach((item, index) => {
  item.textContent = `${index + 1}. ${item.textContent}`;
});

// children is een HTMLCollection en heeft dus geen forEach
// wil je er toch over loopen, maak er dan eerst een array van
// [...list.children].forEach((item) => console.log(item.textContent));
