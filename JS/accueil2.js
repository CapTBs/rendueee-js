const h1 = document.querySelector("h1");
const buttonh1 = document.querySelector("buttonh1");

buttonh1.addEventListener("click", function() {
  if (h1.style.color === "blue") {
    h1.style.color = "red";  
    buttonh1.innerText = "Blue"
  } else {
    h1.style.color = "blue";  
    buttonh1.innerText = "Red"
  }
  
})