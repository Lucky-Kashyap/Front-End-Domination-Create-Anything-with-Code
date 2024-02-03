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

// Promises - yeh janaab ke andar jo code likhoge wow apna kaam krega aur khud side stack mein chale jayenge us code ko lekar aur jab andar se code ke resolve kiya jayega tab ye chalenge

// yeh sabhi use hi tab kiye jate ha jab apko kuchh aisa karna ho jismein time lagega

// Async/Await
// Event Loop
// Callbacks vs Promises vs Async/Await
// Generators
// Error Handling in Asynchronous Code
// Web Workers
// AJAX
