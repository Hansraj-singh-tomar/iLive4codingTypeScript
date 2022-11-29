// // unknown Type in TS
// // what is defferent in unknown and any

// // 1. What is an unknown type? - jab hame kisi var. ki type ka pta nhi hota hai tab ham use karte hai unknown

// // 2. how this is defferent from any?
// let data:any;
// data = 20;
// data = "20";
// let item:string;
// item = data;  // isme error nhi milegi

// let data2:unknown;
// data2 = 20;
// data2 = "20";
// let item2:string;
// // item2 = data2; // yha error dekhne ko milegi - Type 'unknown' is not assignable to type 'string'.

// // solution of unknown error 
// let data3:unknown;
// data3 = 20;
// data3 = "20";
// let item3:string;
// if(typeof data3 === "string"){
//     item3 = data3;
// }  // ab vo error nhi milegi


// // 3. How to use unknown?
// // 4. Interview Question.