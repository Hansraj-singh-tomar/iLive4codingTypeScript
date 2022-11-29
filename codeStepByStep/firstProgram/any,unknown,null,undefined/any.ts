// Any in typescript 
// agar hame pta na ho ki iss variable me kis type ka data aa rha hai in that situation we will use any

let data:string|number|boolean = true;
let data2:any = "hansraj"
// advantage 
data2=12; // yha mujhe error aana chahiye thi 
// disadvantage
// isme error aane ke chances bad jate hai
// jha tak posible ho any ko nhi use karna chahiye  

// Exp - 2
// any ko ham array bhi define kar sakte hai 
// let data3:any[] = 10;  // ye error dega
// let data3:any[] = [10];
// let data3:any = [10];