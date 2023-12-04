// Create a search bar that displays live search results as users type, updating the results without requiring a full page reload.

// var inp = document.querySelector("input");
// var imageBox = document.querySelectorAll(".image-box");

// var heading = document.querySelectorAll(".image-box p");

// inp.addEventListener("change", (e) => {
//   var input = inp.value;

//   imageBox.map((el) => el === heading.map((el) => el === el.includes(input)));
// });

let box = document.querySelector(".box");
let input = document.querySelector("input");

let data = [
  {
    name: "Lucky",
    src: "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ajay",
    src: "https://images.unsplash.com/photo-1589279715734-6631a314dfa2?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rahul",
    src: "https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sachin",
    src: "https://images.unsplash.com/photo-1584043720379-b56cd9199c94?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// let data = [];

// Load expenses from localStorage on page load
// window.addEventListener("load", () => {
//   fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((json) => data.push(json));

//   setTimeout(() => {
//     data.forEach((el) => {
//       box1 += `<div class="box1">
//         <div class="img">
//           <img
//             src=${el.image}
//             alt="men"
//           />
//         </div>
//         <h4>${el.title}</h4>
//       </div>`;
//     });
//   }, 1000);

//   setTimeout(() => {
//     peopleData();
//   }, 1000);
// });

let box1 = "";

// function peopleData() {
// data.forEach((el) => {
//   box1 += `<div class="box1">
//   <div class="img">
//     <img
//       src=${el.image}
//       alt="men"
//     />
//   </div>
//   <h4>${el.title}</h4>
// </div>`;
// });

// box.innerHTML = box1;
// }

data.forEach((el) => {
  box1 += `<div class="box1">
  <div class="img">
    <img
      src=${el.src}
      alt="men"
    />
  </div>
  <h4>${el.name}</h4>
</div>`;
});

box.innerHTML = box1;

input.addEventListener("input", () => {
  let filteredData = data.filter((el) => el.name.startsWith(input.value));
  let newUsers = "";

  filteredData.forEach((el) => {
    newUsers += `<div class="box1">
    <div class="img">
      <img
        src=${el.src}
        alt="men"
      />
    </div>
    <h4>${el.name}</h4>
  </div>`;
  });
  box.innerHTML = newUsers;
});
