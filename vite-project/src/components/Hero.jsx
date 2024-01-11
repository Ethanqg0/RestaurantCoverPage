import React, { useState } from 'react';

export default function Hero() {
    return (
    <div className="h-full flex flex-row items-center bg-cover bg-center bg-food">
        <div className="w-2/3 flex flex-col items-center justify-center">
            <div className="justify-start items-start ">
                <h1 className="text-7xl pb-2 poppins">Fresh. Healthy.</h1>
                <h1 className="text-7xl pb-6 poppins">Tasty.</h1>
                <h1 className="text-xl font-serif text-gray-700">At our salad shop, we create crisp and customizable salads with</h1>
                <h1 className="text-xl font-serif text-gray-700">fresh, local ingredients for a deliciously healthy experience.</h1>

                <div className="mt-14 flex flex-row items-center">
                    <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-5 px-7 rounded-md focus:outline-none focus:shadow-outline-blue active:bg-green-700 shadow-lg shadow-slate-400"><h1 className="font-serif text-xl ">Discover Options</h1></button>
                </div>
            </div>
        </div>

        <div className="w-1/3 bg-slate-700"></div>
    </div>
    )
}