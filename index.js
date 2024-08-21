const drums = ["Crash", "Tom", "Snare", "Kick",];
const containerElement = document.querySelector(".container");


drums.forEach(drum => {
const instrumentButton = document.createElement("button");
instrumentButton.classList.add("music-button");
instrumentButton.innerText = drum;
instrumentButton.style.backgroundImage = "url(Images/" + drum + ".png)"
containerElement.appendChild(instrumentButton);

const soundElement = document.createElement("audio");
soundElement.src = "sounds/" + drum + ".mp3"
containerElement.appendChild(soundElement);

instrumentButton.addEventListener("click", () => {
soundElement.play();
})
});
