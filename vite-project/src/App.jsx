/*
    Utilizing the common 'useState' hook
    Passing functions as props
    Utilizing the spread operator to avoid state mutation
*/

import React, { useState } from 'react';
import Recipe from './Recipe.jsx';
import "./tailwind.css";

export default function App() {
  const [favorites, setFavorites] = useState([]);

  // Function to add a recipe to favorites
  const addToFavorites = (recipe) => {
    setFavorites((prevFavorites) => [...prevFavorites, recipe]); // utilizes spread operator to avoid mutating state
  };

  // Function to remove a recipe from favorites
  const removeFromFavorites = (recipe) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.title !== recipe.title));
  };

  return (
    <>
      <h1>Favorites:</h1>
      {/* Render the list of favorites */}
      {favorites.map((favRecipe, index) => (
        <div key={index}>
          {favRecipe.title}{' '}
          <button onClick={() => removeFromFavorites(favRecipe)}>Remove from Favorites</button>
        </div>
      ))}

      <h1 className="header">Recipe List</h1>
      <div className="flex flex-row w-full justify-around">
        {/* Pass both addToFavorites and removeFromFavorites functions as props to Recipe */}
        <Recipe
          title="Recipe 1"
          ingredients="Ingredients for recipe 1"
          instructions="Instructions for recipe 1"
          addToFavorites={() => addToFavorites({ title: "Recipe 1", ingredients: "Ingredients for recipe 1", instructions: "Instructions for recipe 1" })}
          removeFromFavorites={() => removeFromFavorites({ title: "Recipe 1", ingredients: "Ingredients for recipe 1", instructions: "Instructions for recipe 1" })}
        />
        <Recipe
          title="Recipe 2"
          ingredients="Ingredients for recipe 2"
          instructions="Instructions for recipe 2"
          addToFavorites={() => addToFavorites({ title: "Recipe 2", ingredients: "Ingredients for recipe 2", instructions: "Instructions for recipe 2" })}
          removeFromFavorites={() => removeFromFavorites({ title: "Recipe 2", ingredients: "Ingredients for recipe 2", instructions: "Instructions for recipe 2" })}
        />
        <Recipe
          title="Recipe 3"
          ingredients="Ingredients for recipe 3"
          instructions="Instructions for recipe 3"
          addToFavorites={() => addToFavorites({ title: "Recipe 3", ingredients: "Ingredients for recipe 3", instructions: "Instructions for recipe 3" })}
          removeFromFavorites={() => removeFromFavorites({ title: "Recipe 3", ingredients: "Ingredients for recipe 3", instructions: "Instructions for recipe 3" })}
        />
      </div>
    </>
  );
}