/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let firstname = "Boston";
let currentyear = "2023";
let profilepicture = "IMG_6618.jpeg";
let favoritefoodlist = ["fries", "ranch", "doritos"]; // Define your favorite food list properly.

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const imageElement = document.getElementById('profileimage');
const yearElement = document.querySelector('#year');
const altText = `Profile image of ${firstname}`;

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${firstname}</strong>`;
yearElement.textContent = `${currentyear}`;
imageElement.setAttribute('src', profilepicture);
imageElement.setAttribute('alt', altText);

// You can use a loop to add your favorite foods to the foodElement.
const foodElement = document.getElementById('favoritefoodlist');
for (const food of favoritefoodlist) {
    foodElement.innerHTML += `<br>${food}`;
}







