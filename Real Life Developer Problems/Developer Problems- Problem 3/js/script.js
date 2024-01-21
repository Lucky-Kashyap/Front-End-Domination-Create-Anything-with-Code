// DEVELOPER PROBLEMS

// Working with Local Storage

// local Storage ek aisa space hai browser ke pass jismein tum data store kardo to data stored hi rehta hai, aap chaahe to browser band krdo, refresh krdo ya kuchh bhi karo aapka data stored rahega jab tak aap khud usey delete naa kar de

// local storage poore browser ka hota hai ya website ka, ls hota to browser ka part hai par data store ye website ke naam se karta hai

// localStorage.setItem("name", "Lucky Kashyap");

// localStorage.setItem("age", 23);

// localStorage.setItem('block',true);

// web site open or not if block true or false

// ek button banao jisse aap user block kardo ab jab bhi wo website khole use screen par blocked dikhey, nahi to website show ho and ek button jisse wo unblock ho

const block = document.querySelector("#block");
const unBlock = document.querySelector("#unblock");

const span = document.querySelector("span");

block.addEventListener("click", () => {
  localStorage.setItem("block", true);
  showFunc();

  // span.innerHTML = "Block";
});

unBlock.addEventListener("click", () => {
  localStorage.setItem("block", false);

  showFunc();
  // span.innerHTML = "Unblock";
});

function showFunc() {
  if (localStorage.getItem("block") === "false") {
    document.querySelector("span").textContent = "Unblock";
  } else {
    document.querySelector("span").textContent = "block";
  }
}

// showFunc();

// blocking scroll until something happens
// custom tooltip
