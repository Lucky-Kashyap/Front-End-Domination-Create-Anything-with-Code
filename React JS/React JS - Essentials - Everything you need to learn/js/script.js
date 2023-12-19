// arrays

// [1,2,3,4,5]

// [1,2,3,'apple']

// [1,2,2.1,7.1,'blue',null,[],{},function(){}];

// Arrays are dynamic

// array aisa data sturcture hai jo ki ek se jyada elements rkh skta hai

// immutable vs mutable

// let arr = [1, 2, 3, 4];

// primitive vs reference

// let arr2 = arr;

// arr2.pop();

// console.log(arr, arr2);

// react js mein aapko ek state naam ki cheej milegi us bande ko aap mutable nahi kr skte matlab ki directly uski value nahi hata ya jod sakte

// let state = [1, 2, 3];

// state is immutable

// state.pop(); // not allowed in react

// state ko immutable way mein kaise update karein

// let state = [1, 2, 3, 4];

// state.pop();

// state = [1, 2, 3];

// state.pop(); // react mein nahi krna hai

// state = [1, 2]; // react mein ese krenge

// let arr = [1, 2, 3, 4];

// real copy

// let arr2 = [...arr];

// arr.pop();

// console.log(arr, arr2);

// let state = { name: "lucky", age: 23 };

// let stateCopy = { ...state };

// state.name = "HArsh";

// stateCopy.age = 25;

// state = stateCopy;

// console.log(state, stateCopy);

// let obj = { name: "lucky", age: 23 };

// let { name, age } = obj;

// console.log(name);
// console.log(age);

// let obj = {
//   name: "string",
//   social: {
//     facebook: {
//       first: "haaah",
//       sec: "ahscasd",
//     },
//   },
// };

// let { name } = obj;

// let arr = [12, function () {}];

// let [first, sec] = arr;

// console.log(first);
// console.log(sec);

// import export

// hum log component banaate hai, component matlab page ka hissaa
// navbar sidebar cart home landing page second page, ab dikkat yeh aati hai har hissa alag alag component hai aur components ko hum log alag alag files mein rakhte hai, to inko last mein jodna bhi padta hai, jodne ke liyein use hota hai import & export

// navbar  - export

// sidebar  - export

// cart  - import navbar sidebar

// main - import navbar

// function Cart() {}

// export default Cart;

// export function Cart(){

// }

// arrow functions

// let sum = (a, b) => a + b;

// console.log(sum(10, 12));

// map filter

// dono hi array pe chlte hai, aur dono kaa kaam hai array par kuchh perform krna hand "ek naya array return karna"

// let arr = [1, 2, 3, 4, 5];

// map - har element par kuch karo aur naye array mein rakho

// let arr2 = arr.map((item) => item * 10);

// console.log(arr2);

// map ke andar return krne ke wajah se hi elements naye array mein place hote hai

// ek array hai saare numbers jo ki 5 se bade ho unke 5 jod dena and baaki numbers waise ke waise return karo naye array mein

// let state = [11, 22, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14];

// let greaterFive = state.map((elem) => (elem > 5 ? elem + 5 : elem));

// console.log(greaterFive);

// map filter mein ek hi farak hai, map saare bande lautata hai matlab ki count kam nahi hoga, filter bando ko kam kar skta hai

// ek array mein sabhi nums jo ki 5 se bade hai unmein 10 add kro

//jab originl array ka size kam naa hona ho waha map use hota hai

// jab original array ka size kam krna ho toh wha filter use hota hai

// ek array mein se saare wo nums hata do jo ki 5 se chhote hai

// let arr = [1, 2, 3, 4, 5, 6];

// let filterArr = arr.filter((elem) => elem > 5);

// console.log(filterArr);
