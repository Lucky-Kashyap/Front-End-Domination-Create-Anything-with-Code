// Create a tabbed interface where clicking on tabs displays different content sections without page reload.

var tabBtn1 = document.querySelector(".london");
var tabBtn2 = document.querySelector(".paris");
var tabBtn3 = document.querySelector(".tokyo");

var tabBox1 = document.querySelector(".lon");
var tabBox2 = document.querySelector(".par");
var tabBox3 = document.querySelector(".tok");

tabBtn1.addEventListener("click", () => {
  tabBox2.classList.add("hide");
  tabBox3.classList.add("hide");
  tabBox1.classList.remove("hide");
});
tabBtn2.addEventListener("click", () => {
  tabBox1.classList.add("hide");
  tabBox3.classList.add("hide");
  tabBox2.classList.remove("hide");
});
tabBtn3.addEventListener("click", () => {
  tabBox2.classList.add("hide");
  tabBox1.classList.add("hide");
  tabBox3.classList.remove("hide");
});
