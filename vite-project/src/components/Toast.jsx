import React, { useState } from 'react';


export default function Toast() {
    return (
        <div className="w-1/5 sticky bottom-0 right-0 mb-4 mr-4">
            <div className="bg-green-700 text-white font-bold rounded-lg border shadow-lg p-4">
                <div className="flex flex-row items-center">
                    <div className="flex-shrink-0">
                        <svg className="fill-current text-white h-6 w-6 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                    </div>
                    <div className="flex-1">
                        <h1 className="text-xl font-bold">Success</h1>
                        <h1 className="text-sm">Your recipe has been added!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}