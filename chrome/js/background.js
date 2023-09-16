const images = ["0.png", "1.png", "2.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;
bgimage.classList.add("backgroundImg");

document.body.appendChild(bgimage);
