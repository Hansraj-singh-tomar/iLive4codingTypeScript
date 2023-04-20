"use strict";
// Union Type in TypeScript
// union type describes a value that can be one of several types
// ek variable or function ke parameter ke andar ek se jyada type ki value aa sakti hai ho sakta hai uske andar string value aaye or number or boolean, uss time par ham kya karte hai unko bna dete hai union type 
// let data : number | string = "hansraj";
// let data2 : number | string = 10;
// for number only
// function combine(a:number, b:number){
//     return a+b;
// }
// console.log(combine(12,23)); // 35
// for number and string only but we are getting an error
// function combine(a:number | string, b:number | string){
//     return a+b;
// }
// solution of error  - best way 
// function combine(a:number | string, b:number | string){
//     if( typeof a === "number" && typeof b === "number"){
//         return a+b;
//     } else {
//         return a.toString() + b.toString();
//     }
// }
// console.log(combine(12,23));  // 35
// console.log(combine("anil","shidu"));  // anilshidu
// any and union me union hi use krna chahiye, jo any me disadvantage hai uska solution hai union 
// any ka use kar ke ham typescript ka benefits le hi nhi pate hai 
