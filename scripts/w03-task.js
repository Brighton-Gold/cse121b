/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function addNumbers() {
    let addNumberOne = Number(document.querySelector('#add1').value);
    let addNumberTwo = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumberOne, addNumberTwo);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function subtractNumbers() {
    let subtractNumberOne = Number(document.querySelector('#subtract1').value);
    let subtractNumberTwo = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumberOne, subtractNumberTwo);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */

let multiply = (numberOne, numberTwo) => numberOne * numberTwo;

let multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);



/* Open Function Use - Divide Numbers */
let divide = (numberOne, numberTwo) =>(numberOne / numberTwo);

function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    if (divisor === 0) {
        alert("You can't divide by zero")
        return;
    }
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
const today = new Date();
const currentYear = today.getFullYear();

document.querySelector('#year').value = currentYear;

let pagination = 10;
let i = 1;
while ( i >= pagination ) {
    console.log('hi');

    console.log(`pass ${i}`);
    i++;
}
console.log(i);


/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
document.querySelector('#array').innerHTML = numbersArray.join(", ");

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0).join(", ");

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0).join(", ");

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number);

document.querySelector('#sumOfArray').innerHTML = sumOfArray; 


/* Output Multiplied by 2 Array */
function myFunction(num) {
  return num * 2;
}

let newArr = numbersArray.map(myFunction)

document.querySelector('#multiplied').innerHTML = newArr.join(", "); 

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = newArr.reduce((sum, number) => sum + number);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied; 
