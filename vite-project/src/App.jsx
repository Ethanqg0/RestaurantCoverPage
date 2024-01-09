/*
    Utilizing the common 'useState' hook
    Passing functions as props
    Utilizing the spread operator to avoid state mutation

    Add toast notification when you favorite a dish
*/

import React, { useState } from 'react';
import Recipe from './Recipe.jsx';
import "./tailwind.css";
import "./app.css";

export default function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (recipe) => {
    setFavorites((prevFavorites) => [...prevFavorites, recipe]); // utilizes spread operator to avoid mutating state
  };

  const removeFromFavorites = (recipe) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.title !== recipe.title));
  };

  return (
    <div className="font-serif h-full">

      <nav class="fixed top-0 left-0 right-0 bg-white z-10">
          <div class="flex justify-between items-center p-4">
              <strong><p class="text-2xl">DiscoverDishes</p></strong>
              <div class="flex items-center">
                  <strong><a href="#home" class="ml-4 hover:text-blue-500 transition duration-1000">Home</a></strong>
                  <strong><a href="#about" class="ml-4 hover:text-blue-500 transition duration-1000">About</a></strong>
                  <strong><a href="#projects" class="ml-4 hover:text-blue-500 transition duration-1000">Favorites</a></strong>
                  <strong><a href="#contact" class="ml-4 hover:text-blue-500 transition duration-1000">Contact</a></strong>
              </div>
          </div>
      </nav>

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

      <div className="h-full bg-slate-400">

      </div>

      <div className="flex flex-row items-center justify-around w-full h-full bg-slate-900">
        <div className="w-1/3 p-6">
          <Recipe
            title="Spaghetti Bolognese"
            ingredients="500g ground beef, 1 onion, 2 cloves garlic, 1 can crushed tomatoes, 2 tbsp tomato paste, 1 tsp dried oregano, 1 tsp dried basil, salt and pepper to taste, 400g spaghetti"
            instructions="1. In a large pan, sauté chopped onion and garlic until golden. Add ground beef and cook until browned.
  2. Stir in crushed tomatoes, tomato paste, oregano, basil, salt, and pepper. Simmer for 20 minutes.
  3. Cook spaghetti according to package instructions. Serve the Bolognese sauce over cooked spaghetti."
            addToFavorites={() => addToFavorites({ title: "Spaghetti Bolognese", ingredients: "500g ground beef, 1 onion, 2 cloves garlic, 1 can crushed tomatoes, 2 tbsp tomato paste, 1 tsp dried oregano, 1 tsp dried basil, salt and pepper to taste, 400g spaghetti", instructions: "1. In a large pan, sauté chopped onion and garlic until golden. Add ground beef and cook until browned.\n2. Stir in crushed tomatoes, tomato paste, oregano, basil, salt, and pepper. Simmer for 20 minutes.\n3. Cook spaghetti according to package instructions. Serve the Bolognese sauce over cooked spaghetti." })}
            removeFromFavorites={() => removeFromFavorites({ title: "Spaghetti Bolognese", ingredients: "500g ground beef, 1 onion, 2 cloves garlic, 1 can crushed tomatoes, 2 tbsp tomato paste, 1 tsp dried oregano, 1 tsp dried basil, salt and pepper to taste, 400g spaghetti", instructions: "1. In a large pan, sauté chopped onion and garlic until golden. Add ground beef and cook until browned.\n2. Stir in crushed tomatoes, tomato paste, oregano, basil, salt, and pepper. Simmer for 20 minutes.\n3. Cook spaghetti according to package instructions. Serve the Bolognese sauce over cooked spaghetti." })}
          />
        </div>

        <div className="w-1/3 p-6">
          <Recipe
            title="Chicken Alfredo Pasta"
            ingredients="250g fettuccine pasta, 2 chicken breasts, 2 cups heavy cream, 1 cup grated Parmesan cheese, 2 cloves garlic, salt and pepper to taste, chopped parsley for garnish"
            instructions="1. Cook fettuccine pasta according to package instructions. Drain and set aside.
          2. Season chicken breasts with salt and pepper. Cook in a pan until fully cooked. Slice into strips."
            addToFavorites={() => addToFavorites({ title: "Chicken Alfredo Pasta", ingredients: "250g fettuccine pasta, 2 chicken breasts, 2 cups heavy cream, 1 cup grated Parmesan cheese, 2 cloves garlic, salt and pepper to taste, chopped parsley for garnish", instructions: "1. Cook fettuccine pasta according to package instructions. Drain and set aside.\n2. Season chicken breasts with salt and pepper. Cook in a pan until fully cooked. Slice into strips.\n3. In the same pan, sauté minced garlic. Add heavy cream, Parmesan cheese, salt, and pepper. Stir until the sauce thickens.\n4. Combine cooked pasta, sliced chicken, and Alfredo sauce. Garnish with chopped parsley before serving." })}
            removeFromFavorites={() => removeFromFavorites({ title: "Chicken Alfredo Pasta", ingredients: "250g fettuccine pasta, 2 chicken breasts, 2 cups heavy cream, 1 cup grated Parmesan cheese, 2 cloves garlic, salt and pepper to taste, chopped parsley for garnish", instructions: "1. Cook fettuccine pasta according to package instructions. Drain and set aside.\n2. Season chicken breasts with salt and pepper. Cook in a pan until fully cooked. Slice into strips.\n3. In the same pan, sauté minced garlic. Add heavy cream, Parmesan cheese, salt, and pepper. Stir until the sauce thickens.\n4. Combine cooked pasta, sliced chicken, and Alfredo sauce. Garnish with chopped parsley before serving." })}
          />
        </div>

        <div className="w-1/3 p-6">
          <Recipe
            title="Vegetarian Stir-Fry"
            ingredients="2 cups broccoli florets, 1 red bell pepper, 1 yellow bell pepper, 1 carrot, 200g tofu, 3 tbsp soy sauce, 2 tbsp sesame oil, 1 tbsp ginger, 2 cloves garlic, 2 cups cooked rice"
            instructions="1. Cut broccoli, bell peppers, and carrot into bite-sized pieces. Cube the tofu.
          2. In a pan, heat sesame oil and sauté ginger and garlic. Add tofu and stir-fry until golden.
          3. Add broccoli, bell peppers, and carrot. Stir-fry until vegetables are tender-crisp.
          4. Pour soy sauce over the stir-fry and toss to combine. Serve over cooked rice."
            addToFavorites={() => addToFavorites({ title: "Vegetarian Stir-Fry", ingredients: "2 cups broccoli florets, 1 red bell pepper, 1 yellow bell pepper, 1 carrot, 200g tofu, 3 tbsp soy sauce, 2 tbsp sesame oil, 1 tbsp ginger, 2 cloves garlic, 2 cups cooked rice", instructions: "1. Cut broccoli, bell peppers, and carrot into bite-sized pieces. Cube the tofu.\n2. In a pan, heat sesame oil and sauté ginger and garlic. Add tofu and stir-fry until golden.\n3. Add broccoli, bell peppers, and carrot. Stir-fry until vegetables are tender-crisp.\n4. Pour soy sauce over the stir-fry and toss to combine. Serve over cooked rice." })}
            removeFromFavorites={() => removeFromFavorites({ title: "Vegetarian Stir-Fry", ingredients: "2 cups broccoli florets, 1 red bell pepper, 1 yellow bell pepper, 1 carrot, 200g tofu, 3 tbsp soy sauce, 2 tbsp sesame oil, 1 tbsp ginger, 2 cloves garlic, 2 cups cooked rice", instructions: "1. Cut broccoli, bell peppers, and carrot into bite-sized pieces. Cube the tofu.\n2. In a pan, heat sesame oil and sauté ginger and garlic. Add tofu and stir-fry until golden.\n3. Add broccoli, bell peppers, and carrot. Stir-fry until vegetables are tender-crisp.\n4. Pour soy sauce over the stir-fry and toss to combine. Serve over cooked rice." })}
          />
        </div>
      </div>
    </div>
  );
}