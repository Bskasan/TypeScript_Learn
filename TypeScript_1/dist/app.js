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
