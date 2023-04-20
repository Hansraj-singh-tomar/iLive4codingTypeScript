// class in TS - A class is a user-defined type that describes what a certain type of object ?
// define a class
// create a object for class 
// make property
// make function 
// Define data type of function and property
// define data type to params

// Exp - 1  
// class User{
//     name:string;

//     constructor(n:string){
//         this.name = n;
//     }
    
//     getInfo(){
//         return `Students name: ${this.name}`
//     }
// }
// let user = new User("hanraj singh tomar")
// console.log(user);
// console.log(user.getInfo());



// By ilive4coding 
// Exp - 2
// class StudentClass {
//     name: string;

//     constructor(n:string){
//         this.name = n;
//     }

//     getInfo(){
//         return `Student's name: ${this.name}`
//     }
// }

// const stud1 = new StudentClass("hansraj singh tomar")

// // now i have created a object and in that object i will add key of getInfo
// const tempObj = {
//     getInfo: stud1.getInfo
// };

// console.log(tempObj.getInfo()); // Student's name: undefined, we are refering the object not passing the copy of object


// Exp - 3
// class StudentClass {
//     name: string;

//     constructor(n:string){
//         this.name = n;
//     }

//     getInfo(this:StudentClass, x:string){
//         return `Student's name: ${this.name} ${x}`
//     }
// }

// const stud1 = new StudentClass("hansraj singh tomar")
// // console.log(stud1.getInfo); // stduent name: hansraj singh tomar hello


// const tempObj = {
//     name: "kousal",
//     getInfo: stud1.getInfo
// };

// console.log(tempObj.getInfo("hello")); // student name: kousal hello

// Exp - 4 => Access Modifier

// class StudentClass {
//     name: string;
//     private subjects: string[];

//     constructor(n:string){
//         this.name = n;
//         this.subjects = [];
//     }

//     allocateSubjects(sub:string){
//         this.subjects.push(sub)
//     }

//     getInfo(this:StudentClass, x:string){
//         return `Student's name: ${this.name} ${x}`
//     }

//     getSubject(){
//         return this.subjects
//     }
// }

// const stud1 = new StudentClass("hansraj singh tomar")
// stud1.allocateSubjects("Maths");
// stud1.allocateSubjects("English");

// stud1.subjects.push("hindi"); // we can modify it from here which is not good
// console.log(stud1.getSubject()); // ["Maths", "English"]


// EXP - 5
// use of public keyword and readonly in typescript


// 5.1
// class StudentCll {
// 	constructor(public name:string, public age:number, public gender:string){
// 	    // this.name = name;
// 	    //   this.age = age;
// 	    //   this.gender = gender;
// 	  }
// }

// const obj1 = new StudentCll("hasnraj", 24, "male")

// console.log(obj); // {name: "hansraj", age: 24, gender: "male"}


// 5.2 - ab me chahta hu ki meri id ek baar change hone ke baad bar-bar change na ho uss
// chij ko solve karne ke liye me typescript ki readOnly vali property ka use karunga
// class StudentCll {
//     public readonly id:number;
// 	constructor(public name:string, public age:number, public gender:string){
// 	    // this.name = name;
// 	    //   this.age = age;
// 	    //   this.gender = gender;
//         this.id = Math.random(); 
// 	  }
// }

// const obj1 = new StudentCll("hasnraj", 24, "male")

// console.log(obj); // {name: "hansraj", age: 24, gender: "male"}

// obj1.id = 101; // we can't modify now because of readOnly


// Inheritance

class Studentt {
    subjects: string[]
    constructor(public name: string, public age: number, public passingYear: number){
        this.subjects = []
    }
    allocateSubjects(sub: string){
        this.subjects.push(sub)
    }
}

const CollectStud extends Studentt {
    constructor(name: string, age: number, passingYear:number){
        super(name, age, passingYear)
    }
}

const stud1 = new Studentt("hansraj", 54, 2023)
stud1.allocateSubjects("Maths");
stud1.allocateSubjects("Hindi");
console.log(stud1);





