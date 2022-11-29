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

