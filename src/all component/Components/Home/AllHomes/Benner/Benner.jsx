import { Link } from 'react-router-dom';

const Bg = () => {
    return (
        <div className="mb-16 bg-orange-100">
            {/* Stylish Horizontal Lines */}
            <hr className="w-full mb-2 border-t-4 border-red-600" />
            <hr className="w-full mb-2 border-t border-red-600 opacity-70" />
            

            {/* Hero Section */}
            <div
                className="hero min-h-[60vh] md:min-h-screen bg-cover bg-center relative"
                style={{
                    backgroundImage: 'url(https://i.ibb.co/gT3GVWV/9999.jpg)'
                }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

                {/* Hero Content */}
                <div className="relative z-10 hero-content text-neutral-content px-4 sm:px-6 lg:px-12">
                    <div className="max-w-lg text-center md:text-left">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-snug">
                            Buying <span className="text-green-500 font-extrabold">
                                Course,
                                <br className="hidden sm:block" /> Learn & Earn
                            </span>{" "}
                            Best
                        </h1>

                        <p className="mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                            If you want to improve yourself with less effort and in less time,
                            these courses are just for you.
                        </p>

                        <Link to="/login">
                            <button className="btn btn-success px-6 py-2 text-lg rounded-full transition-transform transform hover:scale-105 shadow-lg hover:shadow-green-500/50">
                                Join Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bg;
