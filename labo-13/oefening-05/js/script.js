const startHour = parseInt(prompt("Geef het startuur (0-23) in:"), 10);
const startMinutes = parseInt(prompt("Geef de startminuten (0-59) in:"), 10);

// De duur die we erbij tellen, is hardgecodeerd
const extraHours = 5;
const extraMinutes = 30;

if (isNaN(startHour) || isNaN(startMinutes)) {
    console.log("Fout: geef twee geldige getallen in.");
} else {
    // Minuten: alles boven de 60 wordt een extra uur
    const totalMinutes = startMinutes + extraMinutes;
    const minutes = totalMinutes % 60;
    const extraHoursFromMinutes = Math.floor(totalMinutes / 60);

    // Uren: alles boven de 24 wordt een extra dag
    const totalHours = startHour + extraHours + extraHoursFromMinutes;
    const hours = totalHours % 24;
    const days = Math.floor(totalHours / 24);

    // padStart vult aan tot twee cijfers, zodat 3 uur als 03 verschijnt
    console.log(`Nieuw tijdstip: ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`);

    if (days === 0) {
        console.log("Dit tijdstip valt nog op dezelfde dag.");
    } else if (days === 1) {
        console.log("Dit is het tijdstip 1 dag later.");
    } else {
        console.log(`Dit is het tijdstip ${days} dagen later.`);
    }
}
