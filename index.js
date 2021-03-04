//Read from a .txt file a list of pokemon
//Use the PokeAPI to return the types of those pokemon
//Output the names of the pokemon and their types
//Example: Gengar: Ghost, Poison


//1. Read the .txt file containing Pokemon names
//2. Output the names of each pokemon and store them somewhere ( so we can utilize each element in the get request)
//3. Get request from API for each pokemon to return their type
//4. Store the type
//5. Create a pokemon object containing their name and type, store them in an arry
//6. output the contents of the Pokemon array

//1. READ THE FILE
// -split the .txt file on '\n'
// -store each item into an array of Pokemon names

// https://pokeapi.co/docs/v2

// require statements for node-fetch and file system


const fetch = require('node-fetch');
const fs = require('fs');



function readFile(fileName) {
    let dataArray = [];
    fs.readFile(fileName, 'utf8', function(err, data) {
        if (err) {
            console.log(`${err}: Error reading the file`);
        }
        dataArray = data.split('\n');
        // console.log(dataArray);
    });
    return dataArray;
};

var pokemonArray = readFile('input.txt');


const fetch = require('node-fetch');

function fetchPokemonData(pokemon) {
    // let url = 'https://pokeapi.co/api/v2/pokemon/1/'  
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then(response => response.json())
        .then(function(pokeData) {
            //console.log(pokeData)
            console.log(pokeData.type);
        })
}
//need to access type from returned pokemon.json


fetchPokemonData('charizard');


?
? ? ?