let value = prompt("Введіть п'ятизначне число:");
let number = parseInt(value);

if (isNaN(number) || number < 10000 || number > 99999) {
    alert("Некоректне введення!");
} else {
    let numOne = number % 10;
    number = Math.floor(number / 10);

    let numTwo = number % 10;
    number = Math.floor(number / 10);

    let numThee = number % 10;
    number = Math.floor(number / 10);

    let numFour = number % 10;
    number = Math.floor(number / 10);

    let numFive = number % 10;

    let result = numFive + " " + numFour + " " + numThee + " " + numTwo + " " + numOne;
    alert(result);
}
