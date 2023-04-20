"use strict";
// Type Alias in typescript
// Define Type like a variable and reuse it.
// 1. Type Alias with variable
// 2. Type Alias with function params
// isme ham common type define karenge 
// problem 
// function combine(
//     a:number | string,
//     b:number | string,
//     c:number | string,
//     d:number | string,  // yha sare variable ke liye same chij likhi hai to kya me isse ek jagah par rakh kar reuse kar sakta hu - yes
//     // to ham number | string iska type-alias bna lenge or vo as a variable dikhega and usse ham bar bar use kar payenge
//     type : "as-number" | "as-string"
// ){
//     if(type === "as-number"){
//         return +a + +b;
//     } else {
//         return a.toString() + b.toString();
//     }
// }
// console.log(combine(12,23,"as-number"));  // 35
// console.log(combine("anil","shidu","as-string")); // anilshidu
// solution of problem 
// 1.
// let a : string | number | undefined = 10;
// let b : string | number | undefined = "10";
// let c : string | number | undefined = undefined;
// 2.
// type varType = string | string | undefined
// let a : varType = 10;
// let b : varType = "10";
// let c : varType = undefined;
