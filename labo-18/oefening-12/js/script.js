const formEl = document.querySelector('#pizzaForm');
const chosenEl = document.querySelector('#chosen');
const totalEl = document.querySelector('#total');

// Het change-event van een checkbox bubbelt, dus één listener op het
// formulier volstaat voor alle checkboxes.
formEl.addEventListener('change', function (event) {
    // checked vertelt of de topping net aan- of afgevinkt werd
    console.log(`${event.target.value} is ${event.target.checked ? 'aangevinkt' : 'afgevinkt'}`);

    const checkedEls = formEl.querySelectorAll('input[type="checkbox"]:checked');

    const toppings = [];
    let total = 0;

    checkedEls.forEach((checkboxEl) => {
        toppings.push(checkboxEl.value);
        // data-price komt in JavaScript terecht als dataset.price, maar wel als string
        total += Number(checkboxEl.dataset.price);
    });

    if (toppings.length === 0) {
        chosenEl.textContent = 'nog geen toppings gekozen';
    } else {
        chosenEl.textContent = `Gekozen: ${toppings.join(', ')}`;
    }

    totalEl.textContent = `Totaal: € ${total.toFixed(2)}`;
});
