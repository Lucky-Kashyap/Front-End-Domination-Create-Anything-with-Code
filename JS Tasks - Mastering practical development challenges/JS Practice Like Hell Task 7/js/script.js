// Display a progress bar that updates in real-time, showing the progress of a task, download, or form submission.

var capsule = document.querySelector(".capsule");
var range = document.querySelector(".range");

var btn = document.querySelector("button");

btn.addEventListener("click", () => {
  setInterval(() => {
    range.style.width += "10px";
  }, 1000);
});
