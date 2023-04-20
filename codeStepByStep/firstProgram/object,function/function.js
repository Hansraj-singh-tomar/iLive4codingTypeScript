"use strict";
// Function Type 
// Q. how we define function type 
// what is function type - ek function jis type ki value return karta hai vhi uska return type hota hai, agar ek function numeric type ki value return karta hai to uska type numeric hoga like that string,boolean
// Exp - 1
// function add(){
//     return 100; 
// } // to yah function numeric value return kar rha hai to iss function ka type numeric hai 
// Q. why we need function type 
// ek function ka type ham iss liye define karenge taki galat type ki value ko return na kare, agara vo galat type ki value ko return kar rha hai to ts hme error de degi
// iska bydefault type - function add(): number
// function add(){
//     return 100; 
// }
// ab hame iss function ki type define karna hoti hai to vo ham kaise karenge
// let num:number = 10;
// console.log(num);
// ab agar hame manually type define karna hai to vo ham kaise karenge 
// function add():string{
//     return "hello";
// }
// function add(a:number,b:number):number{
//     return a+b+"hello";  // ye sirf numeric type ki value hi return karega that's why ye error de rha hai 
// }
// console.log(add(10,20));
// Interview Quetion - kya ek function ka type undefined ho sakta hai  
// function add:undefined{
//     return undefined
// }
// add();
// another exp- // agar b ki value pass na ki gyi hai to
function cals(a, b) {
    return b ? a + b : a; // agar b ki value hai to a+b kar do nhi to a ko return kar do
}
console.log(cals(100)); // 100
console.log(cals(100, 50)); // 150 
