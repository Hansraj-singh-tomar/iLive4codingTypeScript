// class in TS - A class is a user-defined type that describes what a certain type of object ?
// define a class
// create a object for class 
// make property
// make function 
// Define data type of function and property
// define data type to params

class Users{
    // name:'';
    // email:'';
    addUser(user){
        return `${user} is added`
    }
    removeUser(user){
        console.log(`${user} removed`);  // avani removed 
    }
}
let user1 = new Users;
let result = user1.addUser("hansraj");
console.log(result); // hansraj added
user1.removeUser("avani");
