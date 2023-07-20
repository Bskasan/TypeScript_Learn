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

let addArrow = (a:number, b:number ) => a * b;

let x : number = 5;

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








