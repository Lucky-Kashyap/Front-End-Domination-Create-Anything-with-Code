// Advance JS God level JS

// this call apply bind

// this keyword js mein one of the most suspenseful keyword

// keyword ka matlab hota hai aisa word jiska koi matlab ho programming mein

// var if else for break. let const function this

// this keyword

// this ki value baar baar badal sakti hai alag alag conditions mein, saari conditions ko seekh jaao to this ko samajh jaoge

// global    - window
// function   - window
// method     - object
// fnc inside method (es5)    - window
// fnc inside method (es6)    - object
// constructor fnc mein this ki value   - new blank object
// even listener mein this ki value     - that element jispar event lis lga ho

// console.log(this);

// function abcd() {
//   console.log(this);
// }

// abcd();

// var obj = {
//   name: "lucky",
//   abcd() {
// console.log(this);
//     console.log(this.name);
//   },
// };

// console.log(obj);
// obj.abcd();

// var obj = {
//   sayName: function () {
//     function childFnc() {
//       console.log(this);
//     }

//     childFnc();
//   },
// };

// obj.sayName();

// var obj = {
//   sayName: function () {
//     console.log(this);
//     const childFnc = () => {
//       console.log(this);
//     };

//     childFnc();
//   },
//   age: 23,
// };

// var obj = {
//   sayName: () => {
//     console.log(this);
//     const childFnc = () => {
//       console.log(this);
//     };

//     childFnc();
//   },
//   age: 23,
// };

// obj.sayName();

// function add() {
//   console.log(this);
// }

// add();

// function add() {
//   console.log(this);
// }

// const res = new add();

// console.log(res); // blank object

// document.querySelector("h1").addEventListener("click", (e) => {
//   console.log(this);
// });

// document.querySelector("h1").addEventListener("click", function () {
//   console.log(this);
// });

// call apply bind

// ye teen tareeke hai function ko call karne ke kisi object ko this maan kar

// function abcd() {
//   console.log(this);
// }

// abcd();
// const obj = { name: "lucky" };

// abcd.call(obj);

// function abcd(a, b, c, d) {
//   console.log(this, a, b, c, d);
// }

// abcd();
// const obj = { name: "lucky" };

// abcd.apply(obj, [1, 2, 3, 4]);

function abcd() {
  console.log(this);
}

abcd();
const obj = { name: "lucky" };

const res = abcd.bind(obj);

console.log(res());
