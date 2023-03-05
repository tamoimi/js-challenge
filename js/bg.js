const box = document.getElementById("box");
const bgButton = document.getElementById("bg-button");

function randomBg() {
  const images = ["img-01.jpg", "img-02.jpg", "img-03.jpg", "img-04.jpg", "img-05.jpg", "img-06.jpg"];
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  const bgImages = document.createElement("img");
  bgImages.src = `./img/${chosenImage}`;
  box.appendChild(bgImages);
}

bgButton.addEventListener("click", randomBg);
