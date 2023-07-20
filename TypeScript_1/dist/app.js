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
//! ------------------ NEVER ----------------------
function error(message) {
    throw new Error(message);
}
error("New Error");
console.log(error("New Error"));
//! ------------------ UNION ----------------------
// let uVar: string | number = 0
// uVar = '0'
// uVar = true // error
// //type narrowing
// function checkNumber(n: (string | number)):string{
//     n.
//     if (typeof n === 'number'){
//         n.
//     }else {
//         n.
//     }
// }
//Type aliasses
// type Nums = number | string 
// let xc: Nums = false;
// let y: Nums = '0'
// function add(n1: Nums, n2: Nums){
//     console.log(n1+n2)
// }
//String Literals
// type car = 'BMW' | 'Audi'
// let car1: car = 'BMW' 
// let car2: car = 'Audi' 
// let car3: car = 'Mercedes' 
// Intersection
//object
// const employee :{
//     eName: string;
//     id?:number; //? opsiyonel yapar
//     getID():void
// } = {
//     eName : 'Mark',
//     id:1,
//     getID(){
//         console.log(this.id)
//     }
// }
// type Book = {
//     book_id: number;
//     book_name: string;
//   }
//   type Author = {
//     Author_Id: number;
//     Author_name: string;
//   }
//   type intersected_type = Book & Author;
//   let obj1: intersected_type = {
//     book_id: 1234,
//     book_name: "Lord of the Rings",
//     Author_Id: 1892,
//     Author_name: "J. R. R. Tolkien",
//   };
// Type Asertions
// let score: unknown = '350';
// console.log(score.split(''))
// console.log((<string>score).split('')) 
// console.log((score as string).split('')) 
// console.log((score as number));
//functions
// function selamla (greet: string, name?:string ):string{
//     if(!name) name = 'user'
//     return `${greet+' '+name}`
// }
// selamla('Merhaba','sercan')
// selamla('Merhaba')
// selamla('Merhaba','sercan', 'yılmaz')
// function overloading
// function add (a:string, b:string):string;
// function add (a:number, b:number):number;
// function add (a:any, b:any):any{
//     return a+b
// }
// console.log(add('Hello ', "Mark"))
// console.log(add(4, 2))
// console.log(add(4, 'string'))
// Rest Parameters
// function add(num: number, ...numbers:number[]){
//     let total = num; 
//     numbers.forEach(number=> total+= number)
//     console.log(total);
// }
// add(1,2);
// add(1,2,3,4)
// add(100, 200, 3, 5, 6, 7, 8, 9)
// add(1);
