/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
};

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
};

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = (number1, number2) => number1 - number2;

const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
};

function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function () {
    // Get the numeric value entered by the user in the subtotal field
    let subtotalValue = Number(document.querySelector('#subtotal').value);

    // Check if the membership checkbox is checked
    let membershipCheckbox = document.querySelector('#member'); // Corrected ID
    let isMembershipChecked = membershipCheckbox.checked;

    // Apply a 20% discount if the membership checkbox is checked
    let discount = isMembershipChecked ? 0.2 : 0;

    // Calculate the total after applying the discount
    let total = subtotalValue * (1 - discount);

    // Output the total to the total span with two decimals using a template string
    document.querySelector('#total').textContent = `$${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
document.querySelector('#array').textContent = numbersArray.join(',');

/* Output Odd Numbers */
document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 !== 0).join(',');

/* Output Even Numbers */
document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0).join(',');

/* Output Sum of Array */
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number, 0);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2).join(',');

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);

console.log("Source Array:", sourceArray);
console.log("Odds Only Array:", oddsOnlyArray);
console.log("Evens Only Array:", evensOnlyArray);
console.log("Sum of Original Array:", sumOfOriginalArray);
console.log("Multiplied by 2 Array:", multipliedBy2Array);
console.log("Sum of Multiplied by 2 Array:", sumOfMultipliedBy2Array);
