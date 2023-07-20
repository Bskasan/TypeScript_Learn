"use strict";
const button = document.getElementById("submit");
const a = document.getElementById("input1");
const b = document.getElementById("input2");
const result = document.getElementById("result");
function add(a, b) {
    return a + b;
}
button.addEventListener("click", () => {
    console.log("clicked");
    result.innerText = `${add(+a.value, +b.value)}`;
});
let addArrow = (a, b) => a * b;
let x = 5;
//! --------------------------------------------------------
// let aa;
// aa = '5';
// aa = 5
// aa = false
//! --------------------------------------------------------
// let ab = '5';
// // ab = 5; --> Error
//! --------------------------------------------------------
// let abc : any = 4;
// abc = '4';
// //? Avoid using any in TypeScript.
//! --------------------------------------------------------
let ad = 5;
let bc = 10;
function multiply(num1, num2) {
    return num1 + num2;
}
multiply(ad, bc);
//! --------------------------------------------------------
let arr = [1, 2, 3];
// ? arr,push('a'); // Error
arr.push(44);
//! --------------------------------------------------------
let str = ["a", "b"];
//! --------------------------------------------------------
let arr2L = [1, 2, 3, 4, 5];
// ? We can not add new element, but we can override them by writing with new elements
//! --------------------------------------------------------
//* Tuples
let myTuple;
myTuple = [2, "hello"];
myTuple.push("0", "admin");
console.log(myTuple);
let myArray = [];
myArray.push([0, "admin"]);
myArray.push([1, "user1"]);
console.log(myArray);
// ! ========== ENUM -----------------
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 10] = "Admin";
})(Role || (Role = {}));
let currentUser = Role.User;
console.log(currentUser);
currentUser = Role.Admin;
console.log(currentUser);
let user1 = 2 /* Player.Magician */;
let user2 = 1 /* Player.Warrior */;
//! --------------------------------------------------------
var Names;
(function (Names) {
    Names["Bekir"] = "BSK";
    Names["Jason"] = "JW";
    Names["Micheal"] = "Jordan";
    Names[Names["Betul"] = 0] = "Betul";
    Names[Names["Mahmut"] = 1] = "Mahmut";
})(Names || (Names = {}));
console.log(Names.Jason);
console.log(Names.Mahmut);
//! -----------------REAL LIFE SAMPLE ENUM------------------
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
const request = StatusCodes.Success;
console.log(request); //200
//! -------------------- UNKNOWN ------------------------
// let notSure: unknown = 4;
// notSure = "Hello";
// notSure = 100;
// let numVar: number = notSure as number;
// let anyVar: any = notSure;
// let anyVar2: any = 2;
// numVar = anyVar2;
//! ---------------- VOID ---------------------
// ? it has to return as number.
function sum(n1, n2) {
    console.log(n1 + n2);
    return n1 + n2;
}
// ? it does not have to return something like any other object oriented programming languages.
function writeFullName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
}
let resultSum = sum(3, 5);
console.log(resultSum);
writeFullName("Bekir", "Kasan");
