const classicMemes   = ["Distracted Boyfriend", "Drake Hotline Bling", "Two Buttons"];
const deepFriedMemes = ["Big Chungus", "Ugandan Knuckles", "Stonks"];
const currentMemes   = ["He's Right You Know", "This is Fine", "Woman Yelling at Cat"];

function combineMemes(...memeCategories) {
    let combined = [];
    for (const category of memeCategories) {
        combined = [...combined, ...category];
    }
    return combined;
}

const fullMemeList = combineMemes(classicMemes, deepFriedMemes, currentMemes);
console.log("Volledige memelijst:", fullMemeList);

const extendedMemeList = [...fullMemeList, "Giga Chad", "NPC Streamer"];
console.log("Uitgebreide memelijst:", extendedMemeList);
console.log("Originele lijst ongewijzigd:", fullMemeList);
