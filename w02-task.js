/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let firstname = "Boston";
let currentyear = "2023";
let profilepicture = "IMG_6618.jpeg";
let food = "pizza"

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const imageElement = document.getElementById('profileimage');
const yearElement = document.querySelector('#year');
const altText = `Profile image of ${firstname}`;
const foodElement = document.getElementById("favoritefoodslist");
/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${firstname}</strong>`;
yearElement.textContent = `${currentyear}`;
imageElement.setAttribute('src', profilepicture);
imageElement.setAttribute('alt', altText);

let favFoods = ["pizza", "mashed potatoes", "chips", "corn"];

foodElement.innerHTML = favFoods;
let newFavoriteFood = "Ice Cream";
favFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;
  




