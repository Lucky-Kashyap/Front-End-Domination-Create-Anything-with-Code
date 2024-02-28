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
// Generators
// Error Handling in Asynchronous Code
// Web Workers
