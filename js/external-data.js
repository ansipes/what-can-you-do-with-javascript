// Get reference to the button
var button = document.querySelector("button");

// Get reference to unordered list
var img = document.querySelector("img");

// Define the instructions
function getData() {
  // These are the instructions the function runs
  console.log("Trying to get the data...");

  // Get a random Cat photo
  fetch("https://aws.random.cat/meow")
    .then((response) => response.json())
    .then((data) => updateSrc(data.file));
}

// Updates the src of the image
function updateSrc(src) {
  img.src = src;
}

// Wiring it up
button.addEventListener("click", getData);
