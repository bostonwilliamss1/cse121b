/* W05: Programming Tasks */

/* Declare and initialize global variables */
let templeList = [];
const templesElement = document.querySelector("#temples");

const displayTemples = (temples) => {
    /* async displayTemples Function */
    temples.forEach(function (temple) {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch() */
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    templeList = data;
    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
}

/* sortBy Function */
const sortBy = () => {
    reset();
    let filter = document.getElementById('sortBy').value;
    switch (filter) {
        case "utah":
            const utahTemples = templeList.filter(temple => temple.location.includes('Utah'));
            displayTemples(utahTemples);
            break;

        case "notutah":
            const nonutahTemples = templeList.filter(temple => !(temple.location.includes('Utah')));
            displayTemples(nonutahTemples);
            break;

        case "older":
            const olderTemples = templeList.filter(temple => new Date(temple.dedicated) > new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;

        case "all":
            displayTemples(templeList);
            break;
    }
}

/* Event Listener */
document.querySelector('#sortBy').addEventListener("change", sortBy);

// Call the getTemples function to fetch and display the initial data
getTemples();