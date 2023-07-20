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
let ad = 5;
let bc = 10;
function multiply(num1, num2) {
    return num1 + num2;
}
multiply(ad, bc);
let arr = [1, 2, 3];
arr.push(44);
let str = ["a", "b"];
let arr2L = [1, 2, 3, 4, 5];
let myTuple;
myTuple = [2, "hello"];
myTuple.push("0", "admin");
console.log(myTuple);
let myArray = [];
myArray.push([0, "admin"]);
myArray.push([1, 'user1']);
console.log(myArray);
