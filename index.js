const mostrarPokemon = document.getElementById("boton");
const container = document.getElementById("container");
const pantallaPoke = document.getElementById("poked");

function llamar(){
const user = document.getElementById("nombre").value;  //El valor del user será el valor entragado en el label
fetch(`https://pokeapi.co/api/v2/pokemon/${user}/`)   
.then((response) => response.json())
.then((data) => {

container.innerHTML = ""; //Aquí borro  cada vez que apreté el click
pantallaPoke.innerHTML =""; // en el botón se borre los datos del pokemón mostrado anteriormente

//Creacion de constantes sacadas de la api

const pokedex = data.id;                                  //  id del pokémon
const pokemon = data.name;                               // nombre del pokémon
const imagenPoke = data.sprites.front_default;          //foto del pokémon
const spriteContainer = document.createElement("div");      
spriteContainer.classList.add("img-container");       
  
const sprite = document.createElement("img");            
sprite.classList.add("img")                            
sprite.src = imagenPoke;
  
spriteContainer.appendChild(sprite);                  
  
const numero = document.createElement("p");         
numero.textContent = `#${pokedex.toString().padStart(3,0)}`;  //El padstart (3,0) para que se pueda ver por ejemplo:001
  
const name = document.createElement("p");   // parrafo para el nombre del pokémon
name.classList.add("name");                
name.textContent = pokemon;               



container.appendChild(spriteContainer);   
container.appendChild(numero);
container.appendChild(name);

  
});}



