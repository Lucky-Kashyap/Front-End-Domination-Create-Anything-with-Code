// DEVELOPER PROBLEMS

// custom tooltip

document.querySelector("#hide").addEventListener("mouseenter", () => {
  document.querySelector(".tooltip").style.display = "initial";
});

document.querySelector("#hide").addEventListener("mouseleave", () => {
  document.querySelector(".tooltip").style.display = "none";
});
