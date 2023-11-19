// Create a page with two images and a button. When the button is clicked, swap the source attribute of the images.

var img1 = document.querySelector("#one");
var img2 = document.querySelector("#two");
var btn = document.querySelector("button");

// console.log(img1.setAttribute);
// console.log(img1.getAttribute("src"));

// getting values of src

var src1 = img1.getAttribute("src");
var src2 = img2.getAttribute("src");

btn.addEventListener("click", () => {
  // console.log(img1);

  img1.setAttribute("src", src2);
  img2.setAttribute("src", src1);

  // console.log(img1);
});
