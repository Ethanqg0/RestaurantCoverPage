/*
    Utilizing the common 'useState' hook
    Passing functions as props
    Utilizing the spread operator to avoid state mutation


        <h1>Favorites:</h1>
    {favorites.map((favRecipe, index) => (
      <div key={index}>
        {favRecipe.title}{' '}
        <button onClick={() => {
          removeFromFavorites(favRecipe);
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>
    ))}
*/

import React, { useState } from 'react';
import Nav from './Nav.jsx';
import Recipe from './Recipe.jsx';
import "./tailwind.css";
import "./app.css";

export default function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (recipe) => {
    setFavorites((prevFavorites) => [...prevFavorites, recipe]); // utilizes spread operator to avoid mutating state
    addToast();
  };

  const removeFromFavorites = (recipe) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.title !== recipe.title));
    addToast();
  };

  const addToast = () => {
    document.getElementById("toast-success").classList.add("show");
    setTimeout(function(){ 
      document.getElementById("toast-success").classList.remove("show");
    }, 3000);
  }

  return (
    <div className="font-sans h-full">
      <Nav />

      <div className="h-full flex flex-row items-center bg-cover bg-center bg-food">
        <div className="w-2/3 flex flex-col items-center justify-center">
          <div className="justify-start items-start ">
            <h1 className="text-7xl font-sans font-bold pb-4 poppins">Thousands of</h1>
            <h1 className="text-6xl font-sans font-bold pb-4">HealthDishes</h1>
            <h1 className="text-xl font-sans text-gray-500">Discover Simple and Delicious Recipes to Elevate Your Culinary Adventure</h1>
            <div className="mt-10 flex flex-row items-center">
              <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-6 px-6 rounded-md focus:outline-none focus:shadow-outline-blue active:bg-green-700"><h1>Discover Dishes</h1></button>
              <h1 className="ml-4 text-green-700">5,000 users like you have enjoyed our product!</h1>
            </div>
          </div>
        </div>
        <div className="w-1/3 bg-slate-700">  

        </div>
      </div>

      <div className="flex flex-row items-center justify-around w-full h-full bg-slate-900">
        <div className="w-1/3 p-6">
          <Recipe
            id="1"
            title="Spaghetti Bolognese"
            ingredients="500g ground beef, 1 onion, 2 cloves garlic, 1 can crushed tomatoes, 2 tbsp tomato paste, 1 tsp dried oregano, 1 tsp dried basil, salt and pepper to taste, 400g spaghetti"
            instructions="1. In a large pan, sauté chopped onion and garlic until golden. Add ground beef and cook until browned.
  2. Stir in crushed tomatoes, tomato paste, oregano, basil, salt, and pepper. Simmer for 20 minutes.
  3. Cook spaghetti according to package instructions. Serve the Bolognese sauce over cooked spaghetti."
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            addToast={addToast}
          />
        </div>

        <div className="w-1/3 p-6">
          <Recipe
            id="2"
            title="Chicken Alfredo Pasta"
            ingredients="250g fettuccine pasta, 2 chicken breasts, 2 cups heavy cream, 1 cup grated Parmesan cheese, 2 cloves garlic, salt and pepper to taste, chopped parsley for garnish"
            instructions="1. Cook fettuccine pasta according to package instructions. Drain and set aside.
          2. Season chicken breasts with salt and pepper. Cook in a pan until fully cooked. Slice into strips."
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            addToast={addToast}
          />
        </div>

        <div className="w-1/3 p-6">
          <Recipe
            id="3"
            title="Vegetarian Stir-Fry"
            ingredients="2 cups broccoli florets, 1 red bell pepper, 1 yellow bell pepper, 1 carrot, 200g tofu, 3 tbsp soy sauce, 2 tbsp sesame oil, 1 tbsp ginger, 2 cloves garlic, 2 cups cooked rice"
            instructions="1. Cut broccoli, bell peppers, and carrot into bite-sized pieces. Cube the tofu.
          2. In a pan, heat sesame oil and sauté ginger and garlic. Add tofu and stir-fry until golden.
          3. Add broccoli, bell peppers, and carrot. Stir-fry until vegetables are tender-crisp.
          4. Pour soy sauce over the stir-fry and toss to combine. Serve over cooked rice."
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            addToast={addToast}
          />
        </div>
      </div>

      <div id="toast-success" class="p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span class="sr-only">Check icon</span>
        </div>
        <div class="ms-3 text-sm font-normal">Item added successfully.</div>
        <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
      </div>


    </div>
  );
}