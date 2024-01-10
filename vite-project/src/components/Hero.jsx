import React, { useState } from 'react';
import myPhoto from './logo.png'; 

export default function Hero() {
    return (
    <div className="h-full flex flex-row items-center bg-cover bg-center bg-food">
    <div className="w-2/3 flex flex-col items-center justify-center">
    <div className="justify-start items-start ">
        <h1 className="text-7xl font-bold pb-4 poppins">Thousands of</h1>
        <h1 className="text-6xl font-bold pb-6 poppins">Free, Delicious Dishes</h1>
        <h1 className="text-xl font-sans text-gray-700">Discover Simple and Delicious Recipes to Elevate</h1>
        <h1 className="text-xl font-sans text-gray-700">Your Culinary Adventure</h1>

        <div className="mt-14 flex flex-row items-center">
        <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-6 px-8 rounded-md focus:outline-none focus:shadow-outline-blue active:bg-green-700"><h1 className="inter">Learn More</h1></button>
        <div className="justify-center align-middle">
            <h1 className="ml-4 inter">5,000 users like you</h1>
            <h1 className="ml-4 inter">have enjoyed our product!</h1>
        </div>
        </div>
    </div>
    </div>

    <div className="w-1/3 bg-slate-700"></div>
    </div>
    )
}