"use strict";
// never type in TS
// 1. what is never type - jab ek function koi bhi value return nhi karta to vo ek never type ka hota hai but void bhi same hai 
// 2. How this is different from void - ek function hamesa ek kuch na kuch type return karega agar uske andar error nhi hai to, bina kuch return kiye bina bhi vo kuch na kuch return karta hai
// 3. Example?
// 3(1)
// function tryReturn(){  // iska type hai - function tryReturn(): boolean
//     return true;
// }
// console.log(tryReturn()); // true
// 3(2)
// function tryReturn(){  // kuch return nhi kar rha hai to iska type hoga - function tryReturn(): void
// }
// console.log(tryReturn());  // undefined // ye undefined return karega
// 3(3) - ye example hai never type ka 
function apiError(msg, code) {
    throw { message: msg, apiCode: code };
    // a+b // ye bhi error hi
}
console.log(apiError("server side eroor", 500)); // uncaought :{message: "server side eroor", apiCode: 500}
// isne kuch return isliye nhi kiya knonki error aa gya, or error hamare code ko break kar deta hai or jaise hi hamara code break hota hai vo kuch bhi return nhi karta hai ts ke andar
// 4. Interview Question.
