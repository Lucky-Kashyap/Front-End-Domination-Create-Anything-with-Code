// Create an HTML page with a button. When the button is clicked, change the text of a paragraph element.

var btn = document.querySelector("button");
var para = document.querySelector("p");

btn.addEventListener("click", () => {
  para.textContent = "Update Content...!!";
});
