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
import Button from './Button.jsx';
import Hero from './Hero.jsx';
import Nav from './Nav.jsx';
import Toast from './Toast.jsx';
import '/Users/ethangutierrez/Desktop/Current Projects/DiscoverDishes/vite-project/src/styling/app.css';
import '/Users/ethangutierrez/Desktop/Current Projects/DiscoverDishes/vite-project/src/styling/tailwind.css';


export default function App() {
  const [toast, setToast] = useState(false);

  const closeToast = () => {
    setToast(false);
  };

  const showToast = () => {
    setToast(true);

    setTimeout(() => {
      closeToast();
    }, 2000);
  };

  return (
    <div className="font-sans h-full">
      <Nav />
      <Hero />
      <div className="h-1/2 flex justify-end items-end">
        <Button onToast={showToast}/>
      </div>
      {toast && <Toast onClose={closeToast} />}
    </div>
  );
}