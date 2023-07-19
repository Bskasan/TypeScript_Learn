var button = document.getElementById("submit");
var a = document.getElementById("input1");
var b = document.getElementById("input2");
var result = document.getElementById("result");
function add(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    console.log('clicked');
    result.innerText = "".concat(add(+a.value, +b.value));
});
