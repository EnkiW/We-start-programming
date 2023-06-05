let txtOne = prompt("Введіть перше значення:");
let txtTwo = prompt("Введіть друге значення:");
let txtThree = prompt("Введіть третє значення:");

let numOne = parseFloat(txtOne);
let numTwo = parseFloat(txtTwo);
let numThree = parseFloat(txtThree);

let result = (numOne + numTwo + numThree) / 3;
alert("Середнє арифметичне трьох чисел = " + result);