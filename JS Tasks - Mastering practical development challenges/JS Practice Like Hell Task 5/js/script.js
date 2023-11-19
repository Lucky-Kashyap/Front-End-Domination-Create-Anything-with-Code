// Build a countdown timer that starts when a button is clicked and updates the display in real-time.

var span = document.querySelector("span");
var btn = document.querySelector(".start");
var stop = document.querySelector(".stop");
var restart = document.querySelector(".restart");
var count = 0;
var id;

btn.addEventListener("click", () => {
  // var count = 0;

  id = setInterval(() => {
    span.textContent = count;

    count++;
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(id);
});

restart.addEventListener("click", () => {
  count = 0;
  span.textContent = count;
  clearInterval(id);
});
