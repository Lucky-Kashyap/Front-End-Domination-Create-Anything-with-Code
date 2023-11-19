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

// function abcd() {
//   console.log(this);
// }

// abcd();
// const obj = { name: "lucky" };

// const res = abcd.bind(obj);

// console.log(res());

// prototypal Inheritance

// hum objects create karte hai and kisi ek parent constructor function k eprototype mein kuchh add kr dete hai and jab bhi add hota hai to wo parent se banne waale sabhi chldren instances ko wo properties jo parent ko prototype mein di gayi thi wo milti hai saugat mein.

// function makeHuman(name, age) {
//   this.name = name;
//   this.age = age;
// this.printMyName = function () {
//   console.log(this.name);
// };
// }

//  aisa koi bhi function jismein aap this ka upyog kar rhe ho aur us function ko call karte waqt aap new ka upyog karein, to new ka matlab waha par ek blank object hojaata hai

// blank object

// ek function jo ki this ka upyog kar raha ho and new ke dwara nayein nayein objects bnakar deta ho ese functions ko constructor function kehte hai

// function makeHuman(name, age) {
//   this.name = name;
//   this.age = age;
// this.printMyName = function () {
//   console.log(this.name);
// };
// }

// makeHuman.prototype.printMyName = function () {
//   console.log(this.name);
// };

// const human1 = new makeHuman("Harsh", 25);
// const human2 = new makeHuman("Harshita", 28);
// const human3 = new makeHuman("Lucky", 23);

// console.log(human1);

// human1.printMyName();
// human2.printMyName();
// human3.printMyName();

// closures

// aisa koi bhi function jo ek function ko return karde usey closure kahte hai

// can we say any function which returns another function using some value of a parent function is called closure ?

// ek function jo return kare doosra function, aur use kare parent function ka koi variable

// function counter() {
//   var count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const res = counter();

// res();

// function timer() {
//   var a = 12;

//   return setTimeout(() => {
//     console.log(a);
//   }, 2000);
// }

// var res = timer();

// console.log(res);

// Event Delegation

// event delegation = jab aap event listener se kai saare different elements ke events ko handle kar sake

// event listener ko parent par lgao and unko id, class ya fir tag ke basis par differentiate karke different task karao

// var parent = document.querySelector("#parent");

// parent.addEventListener("click", (e) => {
// console.log("works");
// console.log(e);
// console.log(e.target);
//   if (e.target.id === "play") {
//     console.log("play song");
//   } else if (e.target.id === "pause") {
//     console.log("pause song");
//   }
// });

// High order functions

// aisa koi fnc jo ki ek fnc ko parameter mein accept karle and/or ek function ko return karde

// function abcd(param) {}

// abcd(12);

// function abcd() {
//   return function () {};
// }

// var arr = [1, 2, 3, 4, 5];

// arr.forEach((el) => el);

// function operator(callback, a, b) {
//   console.log(callback(a, b));
// }

// function add(a, b) {
//   return a + b;
// }
// function div(a, b) {
//   return a / b;
// }
// function mul(a, b) {
//   return a * b;
// }

// function sub(a, b) {
//   return a - b;
// }

// operator(add, 12, 13);
// operator(mul, 12, 13);
// operator(sub, 12, 13);
// operator(div, 12, 13);

// Error Handling

// try catch

// function divide(a, b) {
// if (b == 0) {
// error
// }

//   try {
//     if (b == 0) {
//       throw Error("koi gadbar huyi");
//     }
//     console.log(a / b);
//   } catch (e) {
//     console.log(e);
//   }
// }

// const res = divide(10, 0);
// const res = divide(10, 2);

// console.log(res);

// custom events

// events click dblclick mouseover input
// chacha

// how
// make event
// attach event to some DOM element
// dispatch that event from that DOM element in which you attached the event

const evt = new Event("chacha");

document.querySelector("#play").addEventListener("chacha", () => {
  console.log("custom events");
});

document.querySelector("#play").dispatchEvent(evt);

// why
