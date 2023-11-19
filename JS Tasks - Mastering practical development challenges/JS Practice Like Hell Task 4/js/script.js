// Create an unordered list. Allow users to add and remove list items dynamically using buttons.

var btn = document.querySelector("button");
var input = document.querySelector("input");
var unorderedList = document.querySelector("ul");

btn.addEventListener("click", () => {
  var list = document.createElement("li");

  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete Element";

  // list.textContent = input.value;

  list.textContent = input.value;

  unorderedList.append(list, deleteBtn);
  input.value = "";

  deleteBtn.addEventListener("click", () => {
    // list.removeChild();
    unorderedList.removeChild(list);
    unorderedList.removeChild(deleteBtn);
  });
});
