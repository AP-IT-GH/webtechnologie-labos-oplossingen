// deel a: stijlen rechtstreeks aanpassen via de style-property
const RED = "rgb(255,70,0)";
const BLUE = "rgb(20,20,255)";

let p1 = document.querySelector(".red");
p1.style.color = RED;

let p2 = document.querySelector(".blue");
p2.style.color = BLUE;

// deel b: stijlen aanpassen via classList
// de opmaak zelf staat in css/style.css, JS bepaalt enkel wanneer ze geldt
console.log("classList voor add:", p1.classList);

p1.classList.add("highlight");
p2.classList.add("highlight");

console.log("classList na add:", p1.classList);

// en weer weghalen bij de tweede paragraaf
p2.classList.remove("highlight");

console.log("classList van p2 na remove:", p2.classList);
