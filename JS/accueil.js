// darkmode 
const body = document.querySelector("body");
const button = document.querySelector("button");

button.addEventListener("click", function() {
  if (body.classList.contains("light")) {
    body.classList.add("dark");
    body.classList.remove("light");
    button.innerText = "Mode ☀️";
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
    button.innerText = "Mode 🌚";
  }
});



