const cart = {
    customer: "Lena",
    order: { product: "Koptelefoon", price: 100 }
};

const shallowCopy = { ...cart };
shallowCopy.customer = "Bram";

console.log("Klant origineel:", cart.customer);
console.log("Klant kopie:", shallowCopy.customer);

shallowCopy.order.price = 80;

console.log("Prijs origineel:", cart.order.price);
console.log("Prijs kopie:", shallowCopy.order.price);
console.log("De prijs is in beide objecten aangepast: spread kopieert enkel het eerste niveau, het geneste order-object wordt gedeeld.");

const deepCopy = structuredClone(cart);
deepCopy.order.price = 50;

console.log("Prijs origineel:", cart.order.price);
console.log("Prijs deep copy:", deepCopy.order.price);
