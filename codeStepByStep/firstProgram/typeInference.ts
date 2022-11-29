// Type Inference(anuman lgana) in TypeScript
// iske andar ts automatically detect kar leti hai ki hamari jo value hone vali hai vo string hogi ya number ya boolean

// Exp - 1
// let data = "hello";
// data = 10; // so ts mujhe yha 10 assign nhi karne dega kyonki usne data ko string data type man liya hai usne yha anuman lgaya hai ki pehle string tha ab number 
// data = "hi"; // ab yha mujhe error nhi aane vali

// Exp - 2 
// bydefault ye any type ka rhega 

// let data;    // ab yha koi bhi value assign nhi kar rha hu tb bydefault kya rhega data type

// kya ham ek variable ke andar ek specific value hi assign kar sakte hai kya 
// yha ham ek specific number hi type bna sakte hai 

// let data:5;   // ab yha data ki value sirf 5 hi rhegi kuch or nhi rakh sakta me 
// data=5;

// let data = 10;  // let data: number // let ki value ham change kar sakte hai but const ki value ham change nhi kar sakte hai that's why const val:10 type bta rha hai 
// const val = 10;  // const val: 10
 



