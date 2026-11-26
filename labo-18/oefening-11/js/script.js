const listEl = document.querySelector('#shoppingList');
const addButtonEl = document.querySelector('#addItem');

let counter = 1;

// Eén listener op de ul: de clicks op de li's bubbelen hier naartoe.
// Dit noemen we event delegation.
listEl.addEventListener('click', function (event) {
    // currentTarget is altijd de ul: daar staat de listener op
    console.log('currentTarget:', event.currentTarget);
    // target is het element waarop echt geklikt werd
    console.log('target:', event.target);

    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done');
    }
});

function removeItem(event) {
    // closest() zoekt het eerste parent-element dat bij de selector past
    event.target.closest('li').remove();

    // Zonder stopPropagation() bubbelt deze klik door naar de ul en loopt
    // de listener hierboven ook nog, op een li die al verwijderd is.
    event.stopPropagation();
}

listEl.querySelectorAll('li button').forEach((buttonEl) => {
    buttonEl.addEventListener('click', removeItem);
});

addButtonEl.addEventListener('click', function () {
    const itemEl = document.createElement('li');
    itemEl.textContent = `nieuw item ${counter}`;
    counter++;

    const removeButtonEl = document.createElement('button');
    removeButtonEl.textContent = 'x';
    removeButtonEl.addEventListener('click', removeItem);

    itemEl.appendChild(removeButtonEl);

    // Dit nieuwe item heeft geen eigen click-listener nodig om doorstreept
    // te worden: de listener op de ul vangt die klik ook op.
    listEl.appendChild(itemEl);
});
