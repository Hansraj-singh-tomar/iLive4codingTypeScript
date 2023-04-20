// Function Type 

// Q. how we define function type 
// what is function type - ek function jis type ki value return karta hai vhi uska return type hota hai, agar ek function numeric type ki value return karta hai to uska type numeric hoga like that string,boolean

// Exp - 1
// function add(){
//     return 100; 
// } // to yah function numeric value return kar rha hai to iss function ka type numeric hai 



// Q. why we need function type 
// ek function ka type ham iss liye define karenge taki galat type ki value ko return na kare, agara vo galat type ki value ko return kar rha hai to ts hme error de degi

// iska bydefault type - function add(): number
// function add(){
//     return 100; 
// }
// ab hame iss function ki type define karna hoti hai to vo ham kaise karenge



// let num:number = 10;
// console.log(num);


// ab agar hame manually type define karna hai to vo ham kaise karenge 
// function add():string{
//     return "hello";
// }



// function add(a:number,b:number):number{
//     return a+b+"hello";  // ye sirf numeric type ki value hi return karega that's why ye error de rha hai 
// }
// console.log(add(10,20));

// Interview Quetion - kya ek function ka type undefined ho sakta hai  
// function add:undefined{
//     return undefined
// }
// add();


// another exp- // agar b ki value pass na ki gyi hai to
// function cals(a:number, b?:number):number{
//     return b ? a+b : a;  // agar b ki value hai to a+b kar do nhi to a ko return kar do
// }
// console.log(cals(100));  // 100
// console.log(cals(100,50));  // 150 


// ------------------------------------------------

// BY ILIVE4CODING

// function - functions are first-class object

// Named Function 
function sum(a: number, b: number): number{
    return a+b;
}

// Function Expression
const s1 = function(a:number, b:number): number{
    return a+b;
}

// Arrow function 
const s2 = (a: number, b: number) => {
    return a + b
}


// Optional parameter
// function test(a:number, b?:number){
function test(a:number, b:number|undefined){
    return b ? a+b : a;
}

// REST parameters
// function sumOfAll(a:number, b?:number, c?:number, d?:number){

// 1.
function sumOfAll(...args:number[]){
    for(let a of args){
        
    }
}

function test1(msg:string, ...b:number[]){
    console.log(msg, sumOfAll(...b));
}
test1("hii", 2,3,4,5)

// Default Parameters 
// function test2(a:number, b:string="hii"){
function test2(a:number, b="hii"){ // it won't give us error 
    return `${b} ${a}`
}
test2(10, "hello") // hello 10
test2(44); // hii 44

// call, apply, bind
// in tsconfig.json file, strictCallApplyBind set it to true - enable bind,call,apply method on function
test2.call(null, 10, "world");  // world 10
sumOfAll.apply(null, [10,20,30]) // 60
s2.bind(null)(10,20);  // 30 


// This keyword

// 1.
let obj = {
    func: function(){
        return this
    }
}
console.log(obj.func()); // obj{...}
obj.func.call({}) // {}

// 2. - In this case we will get an error 
// function formattedDate(){
// to solve error
function formattedDate(this:Date, a:number){
    return a + this.getDate() + this.getMonth();
} 

const dt = new Date();
formattedDate.call(dt, 20);
// formattedDate.call("string"); // it will give us error
// formattedDate.call(); // it will also give us error 


// Invocation 

type CFun = (input1: number, input2: number) => number 

function main(cb:CFun, a:number, b:number){
    cb(1,2);
    // cb("a");  // An argument for 'input2' was not provided.
    // cb("a","b"); // Argument of type 'string' is not assignable to parameter of type 'number'.
}

function add(a:number, b:number):number {
    return a+b;
}
const mult = (a:number,b:number):number => {
    return a*b;
}

main(add, 10, 20)