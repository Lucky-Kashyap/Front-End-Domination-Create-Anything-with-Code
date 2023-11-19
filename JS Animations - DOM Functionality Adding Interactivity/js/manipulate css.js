// Manipulate CSS

// var h1 = document.querySelector("h1");

// h1.style.color = "red";

// var btn = document.querySelector("button");

// btn.addEventListener("click", () => {
// h1.style.color = "red";
// h1.style.fontSize = "60px";

// h1.classList.add("makeitred");
// h1.classList.remove("makeitred");
// });

// var h2 = document.createElement("h2");

// h2.textContent = "Heading 2 with creating element using js";

// document.body.append(h2);

// document.body.appendChild(h2);

// var img = document.createElement("img");

// img.src =
//   "https://vz-53036e60-5d9.b-cdn.net/e600d9a7-8240-4135-b021-fff9bdfe7fff/preview.webp";

// document.querySelector("body").appendChild(img);

// document.querySelector('body').removeChild(img);

// event handling

// jab bhi aap kisi element par kisi bhi prakaar ka koi action krte ho to whaa par event by default automatically raise hota hai ab agar aapne koi event listener nahi banaya hai toh wo event ignore krdiya jaata hai par agar listener banaya hai us event par to wo event ignore nahi kiya jaayega balki uska listener chalega

// var btn = document.querySelector("button");

// btn.addEventListener("click", (e) => {
// console.log(e);
// console.log("clicked");

//   btn.textContent = "starting";
//   btn.style.backgroundColor = "red";
// });

// btn.addEventListener("mouseover", (e) => {
//   btn.textContent = "starting";
//   btn.style.backgroundColor = "red";
// });

// btn.addEventListener("mouseleave", (e) => {
//   btn.textContent = "click Me";
//   btn.style.backgroundColor = "#fff";
// });

var body = document.querySelector("body");
var box = document.querySelector(".box");

body.addEventListener("mousemove", (e) => {
  // console.log(e.clientX);
  // console.log(e.clientY);

  box.style.width = "20px";
  box.style.height = "20px";
  box.style.borderRadius = "50%";
  box.style.position = "absolute";

  box.style.left = e.clientX;
  box.style.right = e.clientY;
  box.style.backgroundColor = "red";
});
