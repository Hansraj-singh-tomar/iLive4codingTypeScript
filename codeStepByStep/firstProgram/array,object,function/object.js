"use strict";
// Object Type in TypeScript
// can't add new property in object
// can update property with same type  
const person = {
    name: "hansraj",
    age: 22,
    email: "abc@gmail.com",
};
const User = {
    name: "shivani",
    age: 23,
    email: "shivani@gmail.com",
};
console.log(User);
console.log(User.name);
// use any with object
// 1.
// type objType = {name:string, age:number, email:string}
// const person:objType = {
// name : "hansraj",
// age : 22,
// email : any,
// }
// console.log(person);
// 2.
// const person:any = {
// name : "hansraj",
// age : 22,
// email : any,
// }
// person.name="anil";
// person.name=100;
// console.log(person);
