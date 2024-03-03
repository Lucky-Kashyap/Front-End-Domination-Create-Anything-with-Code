// ASYNC JS

// aisa koi bhi code jismein kuchh time lagta hai, js mein usey by default in most cases async code maan kar side stack mein dhal diya jaata hai

// setTimeout - settimeout ka code kuchh der baad chalta hai

// console.log(1);
// setTimeout(() => {
//   console.log("Learning setTimeout..!!!");
// }, 3000);
// console.log(2);

// setInterval - set intervl ka code kuchh der baa chalta hai baar baar ek particular interval of time mein

// setInterval(() => {
//   console.log("Interval runs !!!");
// }, 1000);

// let count = 0;

// let intervalID = setInterval(() => {
//   count++;
//   console.log(count);
//   if (count === 4) {
//     clearInterval(intervalID);
//   }
// }, 1000);

// Fetch API - ye kisi aur url (API) par jaa kar kuchh data laayega ya data humaare paas se us url par lekar jaayega

// kyuki ye internet par jaayega aur fir data ko lekar aayega to ismein time lagta hai to by default hi fetch ko async bnaya hai kyuki fetch ka kaam hai data lana woh bhi kisi url se ab aisa ho skta hai us url ki website slow ho, to data laane mein time lagega aur agar fetch synchronous hota to uske baad ka code tab tak nahi chalta jab tak uska data nahi aajata, which is a bg problem, poora code atak sakta tha

// console.log("1");

// fetch("https://randomuser.me/api")
//   .then((data) => data.json())
//   .then((res) => console.log(res.results[0].gender));

// console.log(2);

// Axios (or other HTTP libraries) - ye bhi wahi karega jo fetch karta hai bas ye thoda jda developer friendly hai

// axios
//   .get("https://randomuser.me/api")
//   .then((res) => console.log(res.data.results[0]));

// callbacks

// callback kuchh khaas nhi balki sirf ek function hota hai,
// bas thod special jo hai wo ye hai ki ise pass kiya jaata hai as an
// argument jab particular async code chl jaayein

// callback ek function hai jise pass kiya gaya ho kisi aur function mein aur jab wo function chle to aap us pass kiye gaye callback function ko chala paayege

// function abcd(a,b)
// {

// }

// abcd(1,function(){});

// function abcd(a, b) {
//   b();
// }

// abcd(1, function () {
//   console.log("abcd runs");
// });

// function getData(url, callback) {
//   fetch(url)
//     .then((raw) => raw.json())
//     .then((result) => {
//       callback(result);
//     });
// }

// getData(`https://randomuser.me/api`, function (result) {
//   console.log(
//     result.results[0].gender,
//     result.results[0].email,
//     result.results[0].name.first
//   );
// });

// Promises - yeh janaab ke andar jo code likhoge wow apna kaam krega aur khud side stack mein chale jayenge us code ko lekar aur jab andar se code ke resolve kiya jayega tab ye chalenge

// yeh sabhi use hi tab kiye jate ha jab apko kuchh aisa karna ho jismein time lagega

// const promise1 = new Promise(function (resolve, reject) {
//   let a = "10";

//   if (a === 10) {
//     resolve("value match");
//   } else {
//     reject("value does not match");
//   }
// });

// promise1
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const parchi = new Promise(function (resolve, reject) {
// fetch(`https://randomuser.me/api`)
//   .then((raw) => raw.json())
//   .then((result) => console.log(result));

// fetch(`https://randomuser.me/api`)
//   .then((raw) => raw.json())
//   .then((result) => {
//     // console.log(result.results[0].gender);

//       if (result.results[0].gender === "female") {
//         resolve("Matched");
//       } else {
//         reject("Not Matched");
//       }
//     });
// });

// console.log(parchi);

// parchi.then((res) => console.log(res)).catch((err) => console.log(err));

// Async/Await

// with async await ap async code bhi aise likh skte ho jaise ki aap normal synchronous code likh rahe ho

// async function abcd() {
//   const data = await fetch(`https://randomuser.me/api`);

//   const result = await data.json();

//   console.log(result.results[0]);

//   console.log(result.results[0].name.first);
// }

// abcd();

// Event Loop

// Callbacks vs Promises vs Async/Await

// Question: https://randomuser.me/api is url se data lekar aao and usey console par show karo

// using callback

// function dataFetch(url, callback) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((result) => {
//       callback(result);
//     });
// }

// dataFetch(`https://randomuser.me/api`, function (data) {
//   console.log(data);
// });

// using promises

// function dataFetch(url) {
//   const data = new Promise((resolve, reject) => {
//     fetch(url)
//       .then((raw) => raw.json())
//       .then((res) => resolve(res));
//   });
//   return data;
// }

// dataFetch(`https://randomuser.me/api`).then((res) => console.log(res));

// using async await

// async function dataFetch(url) {
//   const data = await fetch(url);

//   const result = await data.json();

//   return result;
// }

// async function dataPrint(url) {
//   const data = await dataFetch(url);

//   console.log(data);
// }

// dataPrint(`https://randomuser.me/api`);

// setTimeout(() => {
//   dataFetch(`https://randomuser.me/api`);

// });

// Generators

// aap program ke flow ko pause kr skte ho (execution) and bol sakte ab agla step karo

// function* printNum() {
//   console.log("started");
//   yield 1;
//   console.log("pehle chl chuka hai");
//   yield 2;
//   console.log("dusra chl chuka");
//   yield 3;
//   console.log("chotha chl chuka");
//   yield 4;
// }

// const ans = printNum();

// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next().value);

// ans.next();

// ans.next().value;

// ans.next().value;
// ans.next().value;

// question 1 - 10print

// function* allNums() {
//   for (let i = 1; i < 11; i++) {
//     yield i;
//   }
// }

// allNums().next();
// console.log(allNums().next().value);

// const gen = allNums();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// prime numbers nikaalo with generator jab jab next bola jaaye tabji agla print ho

// function printPrime(num) {
//   let bool = false;

//   for (let i = 2; i < num; i++) {
//     if (i % 2 == 0) {
//       bool = false;
//       // break;
//     } else {
//       console.log(i);
//     }
//   }
// }

// printPrime(10);

// function* primeGenerator() {
//   let num = 2;
//   while (true) {
//     if (isPrime(num)) {
//       yield num;
//     }
//     num++;
//   }
// }

// function isPrime(n) {
//   if (n <= 1) return false;
//   if (n <= 3) return true;
//   if (n % 2 === 0 || n % 3 === 0) return false;
//   let i = 5;
//   while (i * i <= n) {
//     if (n % i === 0 || n % (i + 2) === 0) return false;
//     i += 6;
//   }
//   return true;
// }

// const primeGen = primeGenerator();

// console.log(primeGen.next().value);

// console.log(primeGen.next().value);
// console.log(primeGen.next().value);
// console.log(primeGen.next().value);
// console.log(primeGen.next().value);

// for (let i = 0; i < 5; i++) {
// Change this number to generate more prime numbers
// console.log(primeGen.next().value);
// }

// Web Workers

// thread aisa smjho ki ek computational task ko perform karne ke liyein ek thread alotted hota hai

//  usually humara code single thead par chlta hai par kai baar kuchh bade calculations perform karne pad jate hai jiski wajah se aapka main thread busy ho jaata hai yaa fir wo kaafi jaada loaded ho jaata hai aur aapke baki tasks ki performance kam ho jaati hai

// ap chaaho to apna koi task web worker ko bhej sakte ho jo ki doosre thread mein usko perform karega and aapka main thread efficiently baaki cheejo ko handle kar paayega

// aap apni main js file se data send kr skte ho and aap worker file data accept karoge and jo perform karna hai karoge and waha se data waapis main file bhejoge and main file main waapis accept kroge

// add numbers

const nums = Array.from({ length: 10000 }, (_, b) => b + 1);

const worker = new Worker("worker.js");

// data send

worker.postMessage(nums);

worker.onmessage = function (data) {
  console.log(data.data);
};

// console.log(nums);

// const worker = new Worker("worker.js");

// worker.postMessage("Hello Worker!");

// worker.onmessage = function (event) {
//   console.log("Message from worker:", event.data);
// };
