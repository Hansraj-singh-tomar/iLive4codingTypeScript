// const num:number = 10;
// console.log(num);

// to run this file 
// E:\iLive4codingTypeScript\codestepbystep\firstprogram> tsc app.ts
// iske mujhe ek app.js name se filel milegi and uss js file ko ham html file me add kar lenge

// ts vali file ko ham html me use nhi kar sakte hai ye hame ek error show karega 

// Interview Quetion - man lo mere pass five ts files hai to kya me unhe ek sath js file me convert kar sakta hu


// Q. core Data Types in TS - 
//number(2,234,2.4),string("hi","Hello",'ok') and boolean(true or false)
// integer or float dono hi number data type me use honge


// ------------------------------------------------------------
// core Data Types in TS -
 
//number(2,234,2.4),string("hi","Hello",'ok') and boolean(true or false)
// integer or float dono hi number data type me use honge

// first way to use data types
// let num:number = 10;
// let str:string="hello ts";
// let isTrue:boolean=false;

// second way to use data types
// let num:number;
// num = 10;

// Exp - 2 
// function add(n1,n2){
//     return n1+n2;
// }
// // let result = add(10,30); // 40 
// let result = add("10",30); // 1030 // ye error hai but ye mujhe kuch output de rha hai to iss problem ka solution hai ts
// console.log(result);

// Exp - 2(1)
// function add(n1:number,n2:number){
//     return n1+n2;
// }
// let result = add(10,30); // 40 
// // let result = add("10",30); // ab jaise hi tsc app.ts karunga ye mujhe error de dega 
// console.log(result);

// Exp - 2(2) => ab iss chij ko ham js me kaise karenge
// function add(n1,n2){
//     if(typeof num1 === "number" && typeof num2 === "number")
//     {
//         return n1+n2;
//     } else {
//         return new Error("values are not number")
//     }
// }
// let result = add("10",30); 
// console.log(result);  // values are not number



// Exp - 2(3)
// function dummy(a:string){
//     return a;
// }
// let result = dummy("hello dummy");
// console.log(result);


// note - agar me app.ts and app.js file ko ek sath open kiye huye rakhta hu to mujhe ts file me error dekhne ko milti hai 

// ----------------------------------------------------

