//? Pokédex
const url="https://pokeapi.co/api/v2/pokemon/"

const pokeName = document.getElementById("pokeName");
const pokeWeight = document.getElementById("pokeWeight");
const pokePic = document.getElementById("pokePic");

const goButton=document.getElementById("goButton")

const capitalize=str=>{
    return str[0].toUpperCase()+str.slice(1).toLowerCase()
}

const mainContainer = document.getElementById("pokedex");

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

goButton.addEventListener("click", event => {
    event.preventDefault();
    getData(event.target.form[0].value);
    })

const getData=async(pokemon) => {

    try {
    const res=await fetch(`${url}${pokemon}`)
    const data=await res.json()
    render(data)
}   catch(err) {
    console.log(err)
    renderError()
}
}
