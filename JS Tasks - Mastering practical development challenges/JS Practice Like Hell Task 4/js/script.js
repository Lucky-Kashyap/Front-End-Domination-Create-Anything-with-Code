// Create an unordered list. Allow users to add and remove list items dynamically using buttons.

var btn = document.querySelector("button");
var input = document.querySelector("input");
var unorderedList = document.querySelector("ul");

// var list = document.createElement("li");

// var deleteBtn = document.createElement("button");

var list;

var deleteBtn;

btn.addEventListener("click", () => {
  if (input.value.trim() === "") {
  } else {
    list = document.createElement("li");

    deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete Element";

    // list.textContent = input.value;

    list.textContent = input.value;

    unorderedList.appendChild(list);
    list.appendChild(deleteBtn);

    input.value = "";

    deleteBtn.addEventListener("click", () => {
      // list.removeChild();
      unorderedList.removeChild(list);
      list.removeChild(deleteBtn);
    });
  }
});

// deleteBtn.addEventListener("click", () => {
// list.removeChild();
//   unorderedList.removeChild(list);
//   list.removeChild(deleteBtn);
// });
