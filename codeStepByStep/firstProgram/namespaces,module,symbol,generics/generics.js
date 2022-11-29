"use strict";
// what is Generics in TypeScript - jab hame ese functions bnane hote hai jinhe ham bar-bar re-use karna chahte hai, in that situation ham generics program bna lete hai  
// why we need it
// Make a program with Generics
// check difference
// // 1.
// function users(data:object):object{
//     return data;
// }
// console.log(users({name:"hansraj",age:"34"}));
// // 2.
// function users(data:string):string{
//     return data;
// }
// console.log(users("hansraj"));
// // 3.
// function users<T>(data:T):T
// {
//     return data;
//     // return "345"; // ye bhi error dega mtlb jo input aaya hai usi se related return hona chahiye
// }
// console.log(users("anil"));
// console.log(users(30));
// console.log(users({name:"anil",age:23}));
// console.log(users({name:"anil",age:23}).age);
