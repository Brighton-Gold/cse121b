/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElements = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {console.log(temples)
    temples.forEach((temple) => {
        let articleElement = document.createElement('article');

        let title = document.createElement('h3');
        title.textContent = temple.templeName;

        let templePicture = document.createElement('img');
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

    articles.forEach((article) => {
        templeElements.removeChild(article);
      }
   )
}


/* sortBy Function */
function sortBy(temples){
    reset();

    let filter = document.getElementById('sortBy').value;

    switch(filter) {
        case "utah":
            displayTemples(temples.filter(findLocation = (temple) => temple.location.includes("Utah")));
            break;

        case "notutah":
            displayTemples(temples.filter(findLocation = (temple) => temple.location.includes("Utah")== false));
            break;

        case "older":
            displayTemples(temples.filter(getDate = (temple) => parseInt(temple.dedicated.substring(0,4)) < 1950));
            break;

        case "all":
            displayTemples(temples);
            break;
        }



}


/* Event Listener */
getTemples();

document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });