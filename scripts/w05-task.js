/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElements = document.getElementById(temples);
let templeList = [];

/* async displayTemples Function */

const displayTemples = temples => {
    templeList.forEach(temple => {
        let articleElement = document.createElement('article');

        let title = document.createElement('title');
        title.textContent = temple.templeName;

        let templePicture = document.createElement('templePicture');
        templePicture.src = temple.imageUrl;
        templePicture.alt = temple.location;

        articleElement.appendChild(title);
        articleElement.appendChild(templePicture);

        templeElements.appendChild(articleElement);

    }
    )

}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    templeList = await response.json();

    displayTemples(templeList);


}

/* reset Function */
const reset = () => {
    const articles = templeElements.querySelectorAll('article');
    
    articles.forEach(article => {
        templeElements.removeChild(article);
    }
    )
}


/* sortBy Function */
function sortBy(temples){
    reset();

    let filter = document.getElementById('#sortBy');

    switch(filter) {
        case "utah":
            displayTemples(temples.location("Utah"));

        // case "notutah":

        case "older":
            displayTemples(temples.dedicated());

        case "all":
            displayTemples(temples);
    }
}



/* Event Listener */
DocumentTimeline.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList)});