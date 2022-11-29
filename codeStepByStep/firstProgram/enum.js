"use strict";
// Enum Type in TypeScript
// 1. A group of constant
// 2. That can assign a number to your string and make an easy comparison.
// 3. enum Role[values]
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MANAGER"] = 1] = "MANAGER";
    Role[Role["READ_ONLY_USER"] = 2] = "READ_ONLY_USER";
})(Role || (Role = {}));
console.log(Role); // Object { 0: "ADMIN", 1: "MANAGER",2:"READ_ONLY_USER",ADMIN: 0, MANAGER: 1, READ_ONLY_USER: 2}
console.log(Role.MANAGER); // 1
