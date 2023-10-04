/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Boston Williams",
    photo: "IMG_6618.jpeg",
    favoriteFoods: [
        "Pizza",
        "Mashed Potatoes",
        "Chips",
        "Corn"],
    hobbies: [
        "Soccer",
        "Piano",
        "Guitar",
        "Crochet"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
    place: "Dayton, Ohio",
    length: "19 years"
    },
    {
    place: "Rexburg, Idaho",
    length: "2 years"
    },
    {
    place: "Los Angeles, California",
    length: "2 months"
    }
)

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List */
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    document.querySelector('#places-lived').appendChild(dt);
    
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dd);
});