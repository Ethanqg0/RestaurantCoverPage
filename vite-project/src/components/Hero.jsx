export default function Hero() {
    return (
    <div className="h-full w-full flex flex-row items-center bg-cover bg-center bg-food">
        <div className="w-2/3 flex flex-col items-center">
            <div className="items-center ml-8 md:ml-0 text-start">
                <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-6xl lg:pb-2 poppins">Fresh. Healthy.</h1>
                <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-6xl pb-6 lg:pb-6 poppins">Tasty.</h1>
                <h1 className="xl:text-xl lg:text-lg md:text-base text-md font-serif text-gray-700">Using only <span className="text-orange-700 font-bold">local</span>, <span className="text-green-900 font-bold">fresh</span> ingredients, GreensDelight creates</h1>
                <h1 className="xl:text-xl lg:text-lg md:text-base text-md font-serif text-gray-700">crisp and customizable salads for a deliciously <span className="text-green-900 font-bold">healthy</span> experience.</h1>

                <div className="mt-14 flex flex-row justify-start">
                    <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-4 px-6 md:py-3 md:px-5 lg:py-4 lg:px-8 rounded-md focus:outline-none focus:shadow-outline-blue active:bg-green-700 shadow-lg shadow-slate-400">
                        <h1 className="font-serif text-lg md:text-base lg:text-xl xl:text-2xl">View Menu</h1>
                    </button>
                </div>
            </div>
        </div>

        <div className='w-1/3'></div>
    </div>
    )
}