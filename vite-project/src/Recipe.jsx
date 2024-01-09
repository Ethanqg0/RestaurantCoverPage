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
        <div className="bg-slate-100 p-8 flex flex-col border-2 h-112 border-black items-center justify-between rounded-md">
            <h1 className="p-2 font-bold">{title}</h1>
            <p className="p-2 overflow-y-auto">{ingredients}</p>
            <p className="p-2 overflow-y-auto">{instructions}</p>

            <button onClick={toggleFavorite} class="bg-blue-300 p-2 rounded-md">
                {isFavorite ? "Remove from Favorites" : "Add to Favorites!"}
            </button>
      </div>
    )
}