import React, { useState } from 'react';

export default function Recipe({ title, ingredients, instructions, addToFavorites, removeFromFavorites }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);

        if (!isFavorite) {
            addToFavorites({ title, ingredients, instructions });
        } else {
            removeFromFavorites({ title, ingredients, instructions });
        }
    }
    
    return (
      <div className="bg-slate-100 p-8 flex flex-col items-center rounded-md">
        <h2>{title}</h2>
        <p>{ingredients}</p>
        <p>{instructions}</p>

        <button onClick={toggleFavorite} class="bg-blue-300 p-2 rounded-md">
            {isFavorite ? "Remove from Favorites" : "Add to Favorites!"}
        </button>
      </div>
    )
}