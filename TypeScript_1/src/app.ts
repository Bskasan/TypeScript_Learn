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
myArray.push([1, 'user1']);

console.log(myArray);