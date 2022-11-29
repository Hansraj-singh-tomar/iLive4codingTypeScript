// // Constructor and Shorthand Initializer
// // 1. Understand constructor
// // 2. Apply shorthand initialization
// // 3. Get property Value

// // constructor class ke andar method hote hai jiska name constructor hi hota hai jiska name ham change nhi kar sakte hai and ye automatically change ho jate hai jab class ka ek object banta hai and ek class se two object create karenge to two time constructor function run hoga 

// class Users3{
//     // 1.
//     // name="";
//     // age="";
//     // constructor(name,age,email){
//     //     this.name=name;
//     //     this.age=age;
//     //     this.email=email;
//     //     console.log("constructor called");
//     // }

//     // 2. Shorthand Initialization
//     constructor(public name, public age, public email){  // private bhi use kar sakte hai 

//     }
//     displayVal(){
//         console.log(this.name,this.age,this.email);
        
//     }
// }

// const u3 = new Users("hansraj",25,"hansr@gmail.com");  // yha se value pass karne par hame constructor ki jarurat hoti hai otherwise hame coonstructor fnction ki koi need nhi hai 
// u3.displayVal(); // hannsraj,25,hans@gmail.com