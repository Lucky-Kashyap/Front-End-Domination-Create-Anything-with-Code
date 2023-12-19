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

let arr = [1, 2, 3, 4];

// real copy

let arr2 = [...arr];

arr.pop();

console.log(arr, arr2);
