const button = document.getElementById("submit")!;
const a = document.getElementById("input1")! as HTMLInputElement;
const b = document.getElementById("input2")! as HTMLInputElement;
const result = document.getElementById("result")!;

function add(a: number, b: number) {
  return a + b;
}

button.addEventListener("click", () => {
  console.log("clicked");
  result.innerText = `${add(+a.value, +b.value)}`;
});

let addArrow = (a: number, b: number) => a * b;

let x: number = 5;

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
let ad: number = 5;
let bc: number = 10;

function multiply(num1: number, num2: number) {
  return num1 + num2;
}

multiply(ad, bc);

//! --------------------------------------------------------

let arr: number[] = [1, 2, 3];
// ? arr,push('a'); // Error
arr.push(44);

//! --------------------------------------------------------

let str: Array<string> = ["a", "b"];

//! --------------------------------------------------------

let arr2L: readonly number[] = [1, 2, 3, 4, 5];
// ? We can not add new element, but we can override them by writing with new elements

//! --------------------------------------------------------
//* Tuples

let myTuple: [number, string];
myTuple = [2, "hello"];
myTuple.push("0", "admin");

console.log(myTuple);

let myArray: [number, string][] = [];
myArray.push([0, "admin"]);
myArray.push([1, "user1"]);

console.log(myArray);

// ! ========== ENUM -----------------
enum Role {
  User,
  Admin = 10,
}

let currentUser: Role = Role.User;
console.log(currentUser);

currentUser = Role.Admin;
console.log(currentUser);

//! --------------------------------------------------------

//* When you use const keyword, JS side is more understandable.
const enum Player {
  Rogue,
  Warrior,
  Magician,
}

let user1: Player = Player.Magician;
let user2: Player = Player.Warrior;

//! --------------------------------------------------------

enum Names {
  "Bekir" = "BSK",
  "Jason" = "JW",
  "Micheal" = "Jordan",
  "Betul" = 0,
  "Mahmut",
}

console.log(Names.Jason);
console.log(Names.Mahmut);

//! -----------------REAL LIFE SAMPLE ENUM------------------

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

const request: StatusCodes = StatusCodes.Success;
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
function sum(n1: number, n2: number): number {
  console.log(n1 + n2);
  return n1 + n2;
}

// ? it does not have to return something like any other object oriented programming languages.
function writeFullName(firstName: string, lastName: string): void {
  console.log(`${firstName} ${lastName}`);
}

let resultSum: number = sum(3, 5);
console.log(resultSum);

writeFullName("Bekir", "Kasan");

//! ------------------ NEVER ----------------------

function error(message: string): never {
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

// ! ----------- TYPE ALIASES ---------------//

type Nums = number | string;

function addNew(n1: Nums, n2: Nums) {
  console.log(`value 1 is ${n1} and value 2 is ${n2}`);
}

// ! ----------- STRING LITERAL ---------------//

type pet = "cat" | "bird";

let pet1: pet = "cat";
let pet2: pet = "bird";
// let gator: pet = "horse": // ERROR

// ! ----------- INTERSECTION ---------------//

// ? How to Create an Object in TypeScript
// const car: { type: string; model: string; year: number } = {
//   type: "Toyota",
//   model: "Corolla",
//   year: 2009,
// };

const employee: {
  empName: string;
  id?: number; //* ? means that it is optinal.
  getID(): void;
} = {
  empName: "Micheal",
  id: 1,
  getID() {
    console.log(this.id);
  },
};

type Book = {
  bookID: number;
  bookName: string;
};

type Author = {
  authorID: number;
  authorName: string;
};

type intersected_type = Book & Author;

let object1: intersected_type = {
  bookID: 1234,
  bookName: "Atomic Habits",
  authorID: 1892,
  authorName: "James Clear",
};
