/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name:'Brighton M. Gold',
    photo:"images/a.png",
    favoriteFoods : [
        'Sushi', 
        'Pizza',
        'Broccolli',
        'Mushrooms'
    ], 
    hobbies : [
        "Video Games", 
        "Reading",
        "Drawing"
    ],
    placesLived: [],

};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Rexburg, ID",
        length:"3 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Waynesboro, VA",
        length:"19 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */
let dl = document.createElement('dl');
dl.setAttribute('id', 'places-lived');
document.querySelector('#places-lived').appendChild(dl);

myProfile.placesLived.forEach(object => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');

    dt.textContent = object.place;
    dd.textContent = object.length;
    
    dl.appendChild(dt)
    dl.appendChild(dd)

    //document.querySelector('#places-lived').appendChild(dt);
    //document.querySelector('#places-lived').appendChild(dd);

})
