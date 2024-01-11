import React, { useState } from 'react';
import Hero from './Hero.jsx';
import Nav from './Nav.jsx';
import '/Users/ethangutierrez/Desktop/Current Projects/DiscoverDishes/vite-project/src/styling/app.css';
import '/Users/ethangutierrez/Desktop/Current Projects/DiscoverDishes/vite-project/src/styling/tailwind.css';


export default function App() {
  return (
    <div className="font-sans h-full w-full">
      <Nav />
      <Hero />
    </div>
  );
}