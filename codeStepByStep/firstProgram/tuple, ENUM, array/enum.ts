// // Enum Type in TypeScript
// In TypeScript, an enum is a data type that allows you to define a set of named constants. 
// // 1. A group of constant or can say set of values hota hai
// // 2. That can assign a number to your string and make an easy comparison.
// // 3. enum Role[values]

// // Example - 1
// // enum Role {
// //     ADMIN,MANAGER,READ_ONLY_USER
// // }
// // console.log(Role); // Object { 0: "ADMIN", 1: "MANAGER",2:"READ_ONLY_USER",ADMIN: 0, MANAGER: 1, READ_ONLY_USER: 2}
// // console.log(Role.MANAGER); // 1

// // Example - 2
// enum Days{
//     // mon,tue,wed,thu,fri,sat,sun
//     mon="mon",tue="tue",
// }

// // let whichDay:Days;
// // console.log(whichDay);


// // case -1 
// // whichDay="test"; // ye error dega

// // case - 2
// // //mon,tue,wed,thu,fri,sat,sun sirf ye use karne par
// // whichDay=Days.mon
// // console.log(whichDay);  // 0

// // case - 3
// // // mon="mon",tue="tue"
// // whichDay=Days.mon
// // console.log(whichDay);  // mon
// // console.log(whichDay === "mon"); // true
// // console.log(whichDay === "mon"); // false

// // Case - 4 (in function)
// function whichDay(day:Days){
//     return day;
// }
// // console.log(whichDay("mon1")); // ye mon1 exist hi nhi karta hai 
// console.log(whichDay(Days.mon)); // mon


// another exmple of enum
enum Direction {
    North = 1,
    South,
    East,
    West
}

let myDirection: Direction = Direction.North;
console.log(myDirection); // Output: 1

if (myDirection === Direction.North) {
  console.log("Going North!");
}

  



// have a look a complex exmple of enum
enum LogLevel {
    None = 0,
    Error = 1,
    Warning = 2,
    Info = 3,
    Debug = 4
  }
  
  function logMessage(level: LogLevel, message: string) {
    if (level >= LogLevel.Error) {
      console.error(`[Error] ${message}`);
    } else if (level >= LogLevel.Warning) {
      console.warn(`[Warning] ${message}`);
    } else if (level >= LogLevel.Info) {
      console.info(`[Info] ${message}`);
    } else if (level >= LogLevel.Debug) {
      console.debug(`[Debug] ${message}`);
    }
  }
  
  logMessage(LogLevel.Info, "This is an informational message.");
  logMessage(LogLevel.Warning, "This is a warning message.");
  logMessage(LogLevel.Error, "This is an error message.");
  logMessage(LogLevel.Debug, "This is a debug message.");
  

// output -
// [Info] This is an informational message.
// [Warning] This is a warning message.
// [Error] This is an error message.
// [Debug] This is a debug message. 
