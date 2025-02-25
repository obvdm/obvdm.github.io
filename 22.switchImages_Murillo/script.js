const images = ["images/image1.jpeg", "images/image2.jpeg", "images/image3.jpeg"];
let index = 0;

function cycleImage() {
    index = (index + 1) % images.length;
    document.getElementById("image-container").style.backgroundImage = `url('${images[index]}')`;
}

// Set the initial image
window.onload = () => cycleImage();
