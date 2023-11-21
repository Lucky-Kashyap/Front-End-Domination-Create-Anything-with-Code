// Display a progress bar that updates in real-time, showing the progress of a task, download, or form submission.

var capsule = document.querySelector(".capsule");
var range = document.querySelector(".range");

var count = 0;

// setInterval(() => {
//   count++;
// if(count === 100){
//   clearInterval(id);
// }
//   range.style.width = count + "%";
// }, 1000);

var btn = document.querySelector(".download");
var stop = document.querySelector(".stop");
var span = document.querySelector("span");
var id;

btn.addEventListener("click", () => {
  id = setInterval(() => {
    if (count >= 299) {
      span.textContent = "Completed..😎🤩";
      clearInterval(id);
      // span.textContent = "Completed..😎🤩";
    }
    count++;
    // span.textContent = "Started...";
    range.style.width = count + "px";
  }, 10);
  // if (count > 300) {
  //   clearInterval(id);
  // }
  // count++;
  // id = setInterval(() => {
  //   range.style.width = count + "px";
  // }, 10);
});

// if(range.style.width>'300px'){
//   clearInterval(id);
// }

stop.addEventListener("click", () => {
  clearInterval(id);
  span.textContent = "Stop..";
});
