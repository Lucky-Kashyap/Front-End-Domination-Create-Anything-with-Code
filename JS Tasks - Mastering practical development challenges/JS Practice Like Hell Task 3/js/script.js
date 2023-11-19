// Create a form with input fields and a submit button. Use JavaScript to validate the form and display an error message if the input is invalid.

// jab bhi forms ke saath deal karo yaad rakho ki submit hone par forms page ko reload kar dete hai, aur tumhe khayaal rakhna hai ke pages reload naa ho, nahito agar page reload hua to js nahi chalegi, kyuki js chal paayein usse pehle hi page reload ho chuka hoga

// form ko submit karna par reload se rokne ke liyein

var form = document.querySelector("form");

var inp1 = document.querySelector("#input1");
var inp2 = document.querySelector("#input2");
var headng = document.querySelector("#error");

var inps = document.querySelectorAll('input[type="text"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // if (inp1.value === "") {
  // return <h2>Invalid</h2>;
  //   console.log("invalid");
  // }

  // if (inp1.value === "" || inp2.value === "") {
  //   // console.log("blank");
  //   headng.textContent = "error, some fields are blank.";
  //   headng.style.color = "red";
  // } else {
  //   headng.textContent = "";
  //   headng.style.color = "";
  // }

  // inps.forEach((el) => {
  //   if (el.value === "") {
  //     headng.textContent = "error in some feilds";
  //     headng.style.color = "red";
  //   } else {
  //     headng.textContent = "";
  //   }
  // });

  // console.log(inps.length);

  for (var i = 0; i < inps.length; i++) {
    if (inps[i].value.trim() === "") {
      headng.textContent = "error in some feilds";
      headng.style.color = "red";
      break;
    }
  }
});
