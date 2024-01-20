
## Pokédex

The Pokédex project is a web application designed as an interactive guide for exploring details about Pokémon.

## Technology Stack
Framework: React
Styling: Reactstrap (Bootstrap components)
Interacts with the PokeAPI (external API).

## Stories
## Landing Page
When the user visits the index.html file.
Then they encounter the landing page.
And a centrally located "Play" button appears below the image.
And a footer displays site information.
Pokedex Landing Page

## Pokémon Search
Given the user is on the landing page.
When they enter the name of a Pokémon and submit the form.
Then the Pokédex responds with an image and the specified Pokémon's weight.

## Search for Another Pokémon
Given the user is on the landing page.
When they enter the name of another Pokémon and press the "GO" button.
Then the Pokédex fetches and displays information for the newly specified Pokémon.
And the user sees the image and weight of the newly searched Pokémon.

## Error Handling
Given the user is on the landing page.
When they enter a search query that is not a Pokémon's name and submit the form.
Then the Pokédex displays an error message indicating the search query is invalid.
And thus handles non-Pokémon searches.
