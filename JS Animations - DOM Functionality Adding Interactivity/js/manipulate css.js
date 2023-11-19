// Manipulate CSS

var h1 = document.querySelector("h1");

// h1.style.color = "red";

var btn = document.querySelector("button");

btn.addEventListener("click", () => {
  // h1.style.color = "red";
  // h1.style.fontSize = "60px";

  h1.classList.add("makeitred");
});
