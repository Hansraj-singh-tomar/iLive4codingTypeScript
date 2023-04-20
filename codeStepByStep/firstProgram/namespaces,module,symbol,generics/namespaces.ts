// namespace in TS
// what is namespace - ye hamara block of code hota hai jiske andar hamara interrelated code hota hai
// for exp - me user se related kuch kam kar rha hu to user related data namesapce me rakh sakte hai 
// How to use it
// Example for namespace
// namespace js me aaj kal jyada use nhi hota hai 


// <reference path="./Utils.ts" />
// namespace UsersUtils{
//     export class Users extends Parent implements userType{
//         getName(){
//             return this.name;
//         }
//     }
// }

// let u1 = new UsersUtils.Users();
// u1.setName("bruse")
// console.log(u1.getName());  // bruse

// // kya me ek namespace, two file me bna sakta hu
// // ek alag file bnakar vha par kuch likhu and iss file me import karu
// // Utils.ts

// namespace UsersUtils{
//     export class Parent {
//         name;
//         setName(name){
//             return this.name = name;
//         }
//     } 
//     export interface userType{  // interface bhi use kar sakte hai namespace ke sath
//         getName();
//     }
// }
