let numOne = parseFloat(prompt("Введіть перше число:"));
let numTwo = parseFloat(prompt("Введіть друге число:"));

if (isNaN(numOne) || isNaN(numTwo)) {
    alert("Введіть коректні числа!");
} else {
    sum = numOne + numTwo;
    alert("Сума: " + sum);

    difference = numOne - numTwo;
    alert("Різниця: " + difference);

    product = numOne * numTwo;
    alert("Добуток: " + product);

    if (numTwo !== 0) {
        quotient = numOne / numTwo;
        alert("Частка: " + quotient);
    } else {
        alert("Ділення на 0 неможливе!");
    }
}
