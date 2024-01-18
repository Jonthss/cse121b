/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Jonathas Oliveira';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/Jonathas.png';

/* Step 3 - Element Variables */

const foodElement = document.querySelector('#food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `This is ${fullName}. He is student at BYU-Idaho.`);

/* Step 5 - Array */
let favFoods = ['Pizza', 'Sushi', 'Chocolate', 'Ice Cream', 'Pasta', 'Steak'];

foodElement.innerHTML = favFoods;
let newfood = 'Chicken';
favFoods.push(newfood); 
foodElement.innerHTML += `<br>${favFoods}`;