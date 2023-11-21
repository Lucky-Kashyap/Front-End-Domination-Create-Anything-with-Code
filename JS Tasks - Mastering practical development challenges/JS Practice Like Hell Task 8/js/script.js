// Create a search bar that displays live search results as users type, updating the results without requiring a full page reload.

var inp = document.querySelector("input");
var imageBox = document.querySelectorAll(".image-box");

var heading = document.querySelectorAll(".image-box p");

inp.addEventListener("change", (e) => {
  var input = inp.value;

  imageBox.map((el) => el === heading.map((el) => el === el.includes(input)));
});
