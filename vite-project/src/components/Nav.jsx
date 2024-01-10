/*
    <div class="flex items-center">
        <a href="#home" class="ml-4  hover:text-blue-500 transition duration-1000"><h6 className="font-bold text-lg">Home</h6></a>
        <a href="#about" class="ml-4  hover:text-blue-500 transition duration-1000"><h6 className="font-bold text-lg">About</h6></a>
        <a href="#contact" class="ml-4 hover:text-blue-500 transition duration-1000"><h6 className="font-bold text-lg">Contact</h6></a>
        <a href="#contact" class="ml-4  hover:text-blue-500 transition duration-1000"><h6 className="font-bold text-lg">Login</h6></a>
    </div>

            <strong><p class="text-3xl ml-4">DiscoverDishes</p></strong>
*/

import React, { useState } from 'react';
import myPhoto from './logo.png'; 

export default function Nav() {
    return (<nav class="fixed top-0 left-0 right-0  z-10">
    <div class="flex justify-between items-center p-4 rounded-sm ">
        <img className="h-20 w-20 ml-10" src={myPhoto}></img>
    </div>
    </nav>)
}