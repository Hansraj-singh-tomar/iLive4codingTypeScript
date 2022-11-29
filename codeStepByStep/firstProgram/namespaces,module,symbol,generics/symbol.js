"use strict";
// symbol in TS
// what is symbol - symbol is similar data type like array,object, number,string
// symbol ek nya primitive data type hai 
// symbol use karne par ye hame ek unique id deta hai or uss unique id ko ham dekh nhi sakte hai 
// Make a Program with symbol
// // 1.
// let s1 = Symbol();
// let s2 = Symbol();
// console.log(s1);  // symbol()
// console.log(s1===s2); // false
// // 2. 
// let s3 = Symbol('My identifier');
// let s4 = Symbol('My identifier');
// console.log(s3); // symbol(s3)
// console.log(s3.toString()); // symbol(s3) color change ho gya hai, strig vala ho gya hai 
// console.log(s3===s4);  // false
// // 3.
// let s1 = Symbol();
// let data = {
//     [s1]:"some data"
// }
// console.log(data[s1]);
// // 4.
// let demoF1 = Symbol("d1")
// class Demo{
//     [demoF1](){  // ye ab dynamic ho gye hai 
//         return "some data"
//     }
// }
// let d1 = new Demo();
// console.log(d1.demoF1());  // some data
// console.log(d1[demoF1()]);  // some data
