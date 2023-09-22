/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 5 - Array */


let foodItem = "steak";
let favFood = ["pizza", "sushi", "chocolate", "strawberries"]

/* Step 2 - Variables */
let fullname = 'Brighton M. Gold';
let currentYear = new Date().getFullYear();
let profilePicture =  `../images/a.png`;


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullname}</strong>`;

foodElement.innerHTML = `<br>${favFood}`;

favFood.push(foodItem);
foodElement.innerHTML += `<br>${favFood}`;
favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;
favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;

yearElement.innerHTML =  `<strong>${currentYear}</strong>`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of Brighton Gold`);






