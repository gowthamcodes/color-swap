const greenButton = document.getElementById("swap-one");
const blueButton = document.getElementById("swap-two");
const pinkButton = document.getElementById("swap-three");

const body = document.getElementById("background");

// handle events
greenButton.addEventListener("click", () => {
  body.className = "bg-color-1";
});

blueButton.addEventListener("click", () => {
  body.className = "bg-color-2";
});

pinkButton.addEventListener("click", () => {
  body.className = "bg-color-3";
});
