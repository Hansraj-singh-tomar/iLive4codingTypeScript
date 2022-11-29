// // 1. Different betweeen read only and private
// // private me ham property ko class ke bahar access nhi kar sakte hai 
// // read only me ham uss property ko class ke bahar access to kar sakte hai but sirf read kar sakte hai usse update nhi kar sakte hai 
// // Example of read only 

// class Users4{
//     // name="hansraj";
//     // private name="hansraj";
//     readonly name = "hansraj";
// }
// const u4 = new Users4();

// // public
// // isme read and update dono kar sakte hai 
// console.log(u4.name); // hansaraj
// u4.name = "peter"
// console.log(u4.name); // peter

// // private
// // isme to read or update dono hi nhi kar sakte hai
// console.log(u4.name); // Error - Property 'name' is private and only accessible within class 'Users4'

// // readonly
// // isme to read sakte hai but update nhi kar sakte hai 
// console.log(u4.name); // hansaraj
// u4.name = "peter"
// console.log(u4.name); // error dega

