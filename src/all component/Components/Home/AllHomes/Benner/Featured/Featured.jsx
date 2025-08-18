import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Showfeaturesdata from "./Showfeaturesdata/Showfeaturesdata";

const Featured = () => {
    const news = useLoaderData();
    const [visibleCount, setVisibleCount] = useState(14);

    return (
        <div className="bg-fuchsia-200">
            {/* <h1 className="text-4xl mb-10 font-semibold text-center">Featured Course :</h1> */}
            <h1 className="text-center text-3xl text-cyan-500 font-serif font-extrabold pt-3">Find Your Perfect Course</h1>
            
            <div className="flex justify-center my-4 space-x-1">
                {Array(7).fill(0).map((_, idx) => (
                    <hr key={idx} className="w-24 border-red-500 border-t-2" />
                ))}
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-3 p-6 bg-cyan-300 gap-6 mt-8">
                {news.slice(0, visibleCount).map((data) => (
                    <Showfeaturesdata key={data.id} data={data} />
                ))}
            </div>

            {visibleCount < news.length && (
                <div className="flex justify-center mt-6 mb-20">
                    <button
                        onClick={() => setVisibleCount(visibleCount + 6)}
                        className="relative px-6 py-2 rounded-lg overflow-hidden border-2 border-green-500 text-green-600 font-semibold transition-all duration-500 hover:text-white hover:bg-green-500 before:absolute before:inset-0 before:border-2 before:border-green-500 before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-0 mb-4"
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Featured;
