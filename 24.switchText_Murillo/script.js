// JavaScript Document
const sentences = [
    "Enhypen Concert in Chicago.",
    "My favorite band and represents my love for music.",
    "Discovering the band during my teenage years.",
    "Their music is a heartbeat.",
    "Their music moves because they never stand still."
];

let index = 0;

document.getElementById("image").addEventListener("click", function() {
    index = (index + 1) % sentences.length;
    document.getElementById("text-box").textContent = sentences[index];
});
