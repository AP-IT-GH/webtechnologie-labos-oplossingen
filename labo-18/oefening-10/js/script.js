const openButtonEl = document.querySelector('#openDialog');
const closeButtonEl = document.querySelector('#closeDialog');
const dialogEl = document.querySelector('#orderDialog');
const totalEl = document.querySelector('#dialogTotal');

const total = 24.5;

openButtonEl.addEventListener('click', () => {
    // De inhoud van de dialoog vullen voor we hem openen
    totalEl.textContent = `Totaal: € ${total.toFixed(2)}`;

    // showModal() opent de dialoog als modal: de achtergrond wordt verduisterd
    dialogEl.showModal();
});

closeButtonEl.addEventListener('click', () => {
    dialogEl.close();
});
