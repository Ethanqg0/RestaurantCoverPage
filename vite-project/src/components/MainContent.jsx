import React, { useState } from 'react';
import Hero from './Hero.jsx';
import MainContent from './MainContent.jsx';
import Nav from './Nav.jsx';
import '/Users/ethangutierrez/Desktop/Current Projects/DiscoverDishes/vite-project/src/styling/app.css';
import '/Users/ethangutierrez/Desktop/Current Projects/DiscoverDishes/vite-project/src/styling/tailwind.css';
import Toast from './Toast.jsx';

export default function MainContent() {
    const [favorites, setFavorites] = useState([]);
    const addToFavorites = (recipe) => {
      setFavorites((prevFavorites) => [...prevFavorites, recipe]); // utilizes spread operator to avoid mutating state
      addToast();
    };
  
    const removeFromFavorites = (recipe) => {
      setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.title !== recipe.title));
      addToast();
    };

    return (
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
    </div>)
}
