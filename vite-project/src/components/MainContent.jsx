import React, { useState } from 'react';
import Hero from './Hero.jsx';
import MainContent from './MainContent.jsx';
import Nav from './Nav.jsx';
import '/Users/ethangutierrez/Desktop/Current Projects/DiscoverDishes/vite-project/src/styling/app.css';
import '/Users/ethangutierrez/Desktop/Current Projects/DiscoverDishes/vite-project/src/styling/tailwind.css';
import Toast from './Toast.jsx';

export default function MainContent( {handleButtonClick} ) {
    return (
        <button onClick={handleButtonClick}>Click Here</button>
    )
}
