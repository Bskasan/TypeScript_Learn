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
