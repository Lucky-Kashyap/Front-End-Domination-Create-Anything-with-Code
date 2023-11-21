// Build a character counter for a text area or input field, which updates
//  real-time as the user types and enforces a character limit.

var char = document.querySelector(".char");
var word = document.querySelector(".word");

var textArea = document.querySelector("textarea");

textArea.addEventListener("input", () => {
  char.textContent = textArea.value.length;
  word.textContent = textArea.value.trim().split(" ").length;
});
