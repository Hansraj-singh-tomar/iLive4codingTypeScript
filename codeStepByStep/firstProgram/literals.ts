// // Literal Type in typescript
// // Apply values rather than apply types to a variable or parameter
// // jab jyada variable honge tab ham iska use karenge
// // ye similar hai union ke 

// // let Data : string | number = "hello"

// // let Data :"abc" | 123 = "abc"
// // let Data :"abc" | 123 = 123

// // let type : "as-string" | "as-number" = "as-number"
// // let type : "as-string" | "as-number" = "as-string"


// // Exp. of union 
// // function combine(a:number | string, b:number | string){
// //     if( typeof a === "number" && typeof b === "number"){
// //         return a+b;
// //     } else {
// //         return a.toString() + b.toString();
// //     }
// // }

// // console.log(combine(12,23));  // 35
// // console.log(combine("anil","shidu")); // anilshidu



// // solution of union 
// function combine(a:number | string, b:number | string, type:"as-number" | "as-string"){
//     if( type === "as-number" ){  // yha ham types check nhi kar rhe hai directly ek variable ki value check kar rhe hai to vo ham iss tarah se check kar sakte hai 
//         return (+a)+(+b);
//     } else {
//         return a.toString() + b.toString();
//     }
// }

// console.log(combine(12,23,"as-number"));  // 35
// console.log(combine("anil","shidu","as-string")); // anilshidu