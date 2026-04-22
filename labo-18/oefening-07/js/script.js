const TOTAL_BUTTONS = 100;
const CORRECT_COUNT = 3;

const buttonGrid = document.querySelector('#buttonGrid');
const statusElement = document.querySelector('#status');

// Kies 3 willekeurige "juiste" knoppen
const correctNumbers = [];
while (correctNumbers.length < CORRECT_COUNT) {
    const number = Math.floor(Math.random() * TOTAL_BUTTONS) + 1;
    // check als de knop al in de lijst staat, zo niet, voeg toe
    if (!correctNumbers.includes(number)) {
        correctNumbers.push(number);
    }
}

console.log('HINT: De juiste knoppen zijn:', correctNumbers.join(', '));

let found = 0;

for (let i = 1; i <= TOTAL_BUTTONS; i++) {
    const button = document.createElement('button');
    button.textContent = i;

    button.addEventListener('click', function () {
        if (button.disabled) {
            return
        }

        if (correctNumbers.includes(i)) {
            button.disabled = true;
            button.classList.add('found');
            found++;

            if (found === CORRECT_COUNT) {
                statusElement.textContent = 'Gefeliciteerd! Je hebt alle 3 juiste knoppen gevonden!';
            } else {
                statusElement.textContent = `Goed! Nog ${CORRECT_COUNT - found} te gaan.`;
            }
        } else {
            button.disabled = true;
            button.classList.add('disabled');
        }
    });

    buttonGrid.appendChild(button);
}
