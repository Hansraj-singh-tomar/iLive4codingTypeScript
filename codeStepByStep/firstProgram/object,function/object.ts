// // Object Type in TypeScript
// // can't add new property in object
// // can update property with same type  


// // Case - 1
// // // const person:{} = {  // ya
// // const person:object = {
// //     name : "hansraj",
// //     age : 22
// // }
// // person.name = 1000; // ye bhi error dega // knoki name me bydefault string type chala gya hai 
// // person.name="peter"; // isme error nhi dega // value update kar sakte hai 
// // person.address="shriram nagar"; // new value nhi put kar sakte 
// // console.log(person);
// // console.log(person.name); // Error - Property 'name' does not exist on type 'object'


// // Case - 1, solution (custom type for object)
// // const person:{name:string, age:number, email:string} = {   // actual me isme semicolon hai jiska mtlb hai ye ek object ka type hai => const person: { name: string; age: number; email: string; }
// //     name : "hansraj",
// //     age : 22,
// //     email : "abc@gmail.com",
// // }

// // console.log(person);
// // console.log(person.name); // hansraj // ab error nhi milegi


// // Case - 2
// // {name:string, age:number, email:string} iss chij ko bar-bar na likhne ka solution
// type objType = {name:string, age:number, email:string}

// const person:objType = {
// name : "hansraj",
// age : 22,
// email : "abc@gmail.com",
// }
// const User:objType = {
// name : "shivani",
// age : 23,
// email : "shivani@gmail.com",
// }
// console.log(User);
// console.log(User.name);


// // use any with object

// // 1.
// // type objType = {name:string, age:number, email:string}
// // const person:objType = {
// // name : "hansraj",
// // age : 22,
// // email : any,
// // }
// // console.log(person);


// // 2.
// // const person:any = {
// // name : "hansraj",
// // age : 22,
// // email : any,
// // }
// // person.name="anil";
// // person.name=100;
// // console.log(person);


// By ilive4coding

// 1.
// let person: {name: string; nationality: string;} = {
//     name: "hansraj",
//     nationality: "Indian"
// }

// 2. - This way should not be used
// let obj1:object = {
//     name: "rohit",
//     1: 3
// };

// 3. - this one also not be used 
// let obj2:{};
// obj1 = {
//     name: "Om"
// }

// 4. Objects are modifier and if we want don't want to modified then we have to do like that
// const student:{age: number; class: 4} = {  // class = 4 fix hai we can't change it. ye const se nhi hua hai
//     age: 25,
//     class: 4
// }


// Definite Assignment - apke variable ki value assign jarur hogi before you use it.
// let a: string
// a.toUpperCase(); // Variable 'a' is used before being assigned. it must be assigned some value 


// Optional Properties
// ab ham chahte hai ki ek object ho or uski koi key na bhi ho to vo chal jaye
// let teacher:{name:string; exp:number;sub:string[];address?:string}={
//     name: "devlali",
//     exp: 4,
//     sub: ["math", "science", "Eng"],
// }


// Index Signature - 
// let teacher:{ name:string; exp:number; sub:string[]; address?:string; [key:string]:any}={
//     name: "devlali",
//     exp: 4,
//     sub: ["math", "science", "Eng"],
//     dob: "10-10-1997"
// }
// teacher.photo = "file path"
    




