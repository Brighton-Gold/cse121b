/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
let fullname = 'Brighton M. Gold';
let currentYear = date.year();
let profilePicture = 'C:\Users\brigh\Documents\cse121b\images\IMG_7049.jpg';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('photo')



/* Step 4 - Adding Content */

nameElement.innerHTML = <strong>${fullname}</strong>;
foodElement.innerHTML = <strong>${favFood[2]}</strong>;
textContent.innerHTML = <strong>${currentYear}</strong>;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('src', "Profile image of Brighton Gold");



/* Step 5 - Array */



favFood = [pizza, sushi, chocolate, strawberries]


