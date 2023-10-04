/* 
    ? Instructions
    * connect your files (index, style, app)
    * create a pokedex card in index: (div)
    * it should have name (h3), weight (p), and picture (img)
    * above it, there should be a form with an input field and a Go button
    * access all elements within app.js using DOM
    * create an event listener that listens for the button click
    * when the button is clicked, it should grab the input value (aka pokemon name)
    * it should then trigger a fetch to the pokemon api with that pokemon name
    * it should then display the values of that pokemon's name, weight, and picture
*/
const url="https://pokeapi.co/api/v2/pokemon/"

const pokeName = document.getElementById("pokeName");
const pokeWeight = document.getElementById("pokeWeight");
const pokePic = document.getElementById("pokePic");

const goButton=document.getElementById("goButton")

const capitalize=str=>{
    return str[0].toUpperCase()+str.slice(1).toLowerCase()
}

const mainContainer = document.getElementById("pokeDex");

const renderError = () => {
    card.style.display = "none";
    const h2 = document.createElement("h2");
    h2.textContent = "Error fetching data.";
    mainContainer.appendChild(h2);
}


const render = (data) => {
    console.log(data);
    pokeName.textContent = `Name: ${capitalize(data.name)}`;
    pokeWeight.textContent = `Weight: ${data.weight}`;
    pokePic.src = data.sprites.front_shiny;
}

const getData=async(pokemon) => {

    try {
    const res=await fetch(`${url}${pokemon}`)
    const data=await res.json()
    render(data)
}   catch(err) {
    console.log(err)
    renderError()
}

goButton.addEventListener("click", event => {
event.preventDefault()
getData(event.target.form[0].value)
})
}
