"use strict";
// class in TS - A class is a user-defined type that describes what a certain type of object ?
// define a class
// create a object for class 
// make property
// make function 
// Define data type of function and property
// define data type to params

class App {
    constructor(name2) {
        // name="hansraj ";
        this.name = "hansraj ";
        console.log("constructor bydefault call hota hai");
        this.name2 = name2;
    }
    getName() {
        console.log(this.name); // anil sidhu 
    }
    getName2() {
        return this.name;
    }
}
let a1 = new App("anil sidhu");
a1.getName();
console.log(a1.getName2()); // anil sidhu
