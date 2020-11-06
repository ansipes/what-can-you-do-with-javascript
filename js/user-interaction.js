// Get reference to the button
var button = document.querySelector("button");

// Get reference to unordered list
var ul = document.querySelector("ul");

// Define a variable
var count = 1;

// Define the instructions
function doSomething() {
  // These are the instructions the function runs
  console.log("I did something!");
}

// A more complex set of instructions
function doSomethingComplex() {
  console.log(count);
  ul.innerHTML += `<li>I am #${count}</li>`;
  count += 1;
}

// Wiring it up (you can swap the function names if you want to do the simple one)
button.addEventListener("click", doSomethingComplex);
