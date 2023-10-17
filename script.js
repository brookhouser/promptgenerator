const adjectives = ["Mysterious", "Glowing", "Ancient", "Vibrant", "Whimsical"];
const nouns = ["Forest", "Castle", "River", "Galaxy", "Statue"];
const places = ["in the mountains", "on a distant planet", "in a forgotten city", "under the sea", "in a dream"];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function spin() {
    const adjective = getRandomElement(adjectives);
    const noun = getRandomElement(nouns);
    const place = getRandomElement(places);

    document.getElementById("adjectiveWheel").textContent = adjective;
    document.getElementById("nounWheel").textContent = noun;
    document.getElementById("placeWheel").textContent = place;

    const promptText = `Imagine a ${adjective} ${noun} ${place}.`;
    document.getElementById("prompt").textContent = promptText;
}
