let name = document.getElementById("name");
let number = document.getElementById("number");
let address = document.getElementById("address");
let submit = document.getElementById("submit");
let textone = document.getElementById("textone")

const value1 = name.value;
const value2 = number.value;
const value3 = address.value;

let arr = [];
arr.push(value1, value2, value3);

console.log(arr);