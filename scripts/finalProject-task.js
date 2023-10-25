const pokeDex = document.getElementById(`pokeDex`);
let pokemonList = []

//This will capitalize the First letter of every string passed into it. 
// Makes everything prettier.
function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Each pokemon has it's name, and then another url pointing towards more information about the pokemon.
// This function will get the info from that second URL.
async function fetchPokemonData(pokemon, type) {
    let url = pokemon.url // 
    const response = await fetch(url);
    const pokeData = await response.json();
    renderPokemon(pokeData, type);
}

// Gets the first URL
async function fetchKantoPokemon(type) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    const allpokemon = await response.json();
    
    await Promise.all(allpokemon.results.map(pokemon => fetchPokemonData(pokemon, type)));
    sortPokemon();
    pokemonList.forEach((pokemon) => pokeDex.appendChild(pokemon));
}

// This will start the process of displaying the pokemon.
function renderPokemon(pokeData, type) {

    let validType = false;   // based on the searchby value, this will filter the pokemon. If all pokemon are wanted, 
                             // then validType will be set to True
    if (type != `all`) {     // however, if a special type is needed, the code will compare every type the pokemon has to the required 
        for (const typeObj of pokeData.types) {

            if (type === typeObj.type.name) {
                validType = true;
                break;
            }
        }
    }

    else {
        validType = true;
    }

    if (validType) {  //the pokemon "card" is created here. Number and name are on the same line, with types below it. 

        let name = document.createElement(`h3`);
        let pokemonCard = document.createElement(`article`);
        let pokemonType = document.createElement(`div`);
        let pokeNum = document.createElement(`h3`);
        let frontShinyPokemon = document.createElement(`img`);
        let frontPokemon = document.createElement(`img`);

        frontShinyPokemon.src = pokeData.sprites.front_shiny;
        frontPokemon.src = pokeData.sprites.front_default;
        name.textContent = `#${pokeData.game_indices[3].game_index} ${capitalizeString(pokeData.name)}`;

        let typeElement = document.createElement(`span`);
        typeElement.textContent = `Type(s) : `;
        for (const typeObj of pokeData.types) {
            typeElement.textContent += `${capitalizeString(typeObj.type.name)} `;

            typeElement.classList.add(`type-margin`);
            pokemonType.appendChild(typeElement);
        }

        pokemonType.classList.add(`center-text`);
        name.classList.add(`center-text`);
        pokeNum.classList.add(`center-text`);


        pokemonCard.appendChild(frontPokemon);
        pokemonCard.appendChild(frontShinyPokemon);
        pokemonCard.appendChild(name);
        pokemonCard.appendChild(pokemonType);

        pokemonList.push(pokemonCard);
    }

}

//In order to organize the pokemon by number, this function checks the name starting at 1 until a space is reached
function sortPokemon() {
    pokemonList.sort((a, b) => {
        const numA = parseInt(a.querySelector('h3').textContent.slice(1).split(' ')[0]);
        const numB = parseInt(b.querySelector('h3').textContent.slice(1).split(' ')[0]);
        return numA - numB;
    });
}

//Clears the screen of pokemon and the pokemonList as well
const reset = () => {
    const pokemons = pokeDex.querySelectorAll('article');

    pokemons.forEach((pokemon) => {
        pokeDex.removeChild(pokemon);
    }
    )
    pokemonList = [];
}

//Determines what to filter the pokemon by based on the drop down bar. Will then recall the
// fetchKantoPokemon function and pass in the new type. 
function filterBy() {
    reset();

    let filter = document.getElementById('sortBy').value;
    let type = ` `;

    switch (filter) {
        case `all`:
            type = `all`;

            break;
        case `normal`:
            type = `normal`;
            break;

        case `water`:
            type = `water`;
            break;

        case `grass`:
            type = `grass`;
            break;

        case `fire`:
            type = `fire`;
            break;

        case `psychic`:
            type = `psychic`;
            break;

        case `electric`:
            type = `electric`;
            break;

        case `fighting`:
            type = `fighting`;
            break;

        case `ice`:
            type = `ice`;
            break;

        case `dragon`:
            type = `dragon`;
            break;

        case `ground`:
            type = `ground`;
            break;

        case `ghost`:
            type = `ghost`;
            break;

        case `flying`:
            type = `flying`;
            break;

        case `poison`:
            type = `poison`;
            break;

        case `bug`:
            type = `bug`;
            break;

        case `rock`:
            type = `rock`;
            break;
    }

    fetchKantoPokemon(type);

}

fetchKantoPokemon(`all`); //initialize the program

document.querySelector(`#sortBy`).addEventListener(`change`, () => { filterBy() });