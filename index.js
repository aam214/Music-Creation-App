const drums = ["Crash", "Tom", "Snare", "Kick",];
const containerElement = document.querySelector(".container");


drums.forEach(drum => {
const instrumentButton = document.createElement("button");
instrumentButton.classList.add("snare-button");
instrumentButton.innerText = drum;
containerElement.appendChild(instrumentButton);
});
