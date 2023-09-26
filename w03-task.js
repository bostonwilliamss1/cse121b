/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (numbers1, numbers2) {
    let sum = numbers1 + numbers2;
    return sum;
}

function addNumbers () {
   let addnumber1 = parseFloat(document.querySelector('#add1').value);
   let addnumber2 = parseFloat(document.querySelector('#add2').value);
   let result = add(addnumber1, addnumber2);
   document.querySelector('#sum').value = result; 
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (numbers1, numbers2) {
    return numbers1 - numbers2;
}

function subtractNumbers () {
   let subtractnumber1 = parseFloat(document.querySelector('#subtract1').value);
   let subtractnumber2 = parseFloat(document.querySelector('#subtract2').value);
   let result = subtract(subtractnumber1, subtractnumber2);
   document.querySelector('#difference').value = result;
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (numbers1, numbers2) => {
    return numbers1 * numbers2;
    
}
const multiplyNumbers = () => {
   let multiplynumber1 = parseFloat(document.querySelector('#factor1').value);
   let multiplynumber2 = parseFloat(document.querySelector('#factor2').value);
   let result = multiply(multiplynumber1, multiplynumber2);
   document.querySelector('#product').value = result;
   
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (numbers1, numbers2) {
    return numbers1 / numbers2;
}

function divideNumbers () {
   let dividend = parseFloat(document.querySelector('#dividend').value);
   let divisor = parseFloat(document.querySelector('#divisor').value);
   let result = divide(dividend, divisor);
   document.querySelector('#quotient').value = result;
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.getElementById("year").value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
document.querySelector('#array').innerHTML = numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter((number) => number % 2 != 0);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter((number) => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
second_array = document.querySelector('#multiplied').innerHTML = numbersArray.map((number) => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = second_array.reduce((sum, number) => sum + number);