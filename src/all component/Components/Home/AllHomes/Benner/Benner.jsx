import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import teacher from '../../../../../assets/Author img/achi.jpg'
import intro from '../../../../../assets/Author img/Training Overview - Learning Introduction Video Template.mp4'

const Bg = () => {
    // এখানে তোমার background images array
    const bgImages = [
        "https://i.ibb.co.com/WWQskcS7/background3.png",
        "https://i.ibb.co.com/k2P7nJD7/bg6.jpg ",
        "https://i.ibb.co.com/PvH83qps/bg14.png"
    ];

    return (
        <div>
            <div className="relative mb-1 md:mb-16 bg-orange-100">
                {/* Stylish Horizontal Lines */}
                 

                {/* Swiper Background Section */}
                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    effect="fade"
                    pagination={{ clickable: true }}
                    className="hero min-h-[60vh] md:h-[670px] relative"
                >
                    {bgImages.map((bg, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="h-full w-full bg-cover bg-center relative"
                                style={{ backgroundImage: `url(${bg})` }}
                            >
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent"></div>

                                {/* Hero Content */}
                                <div className="relative z-10 text-neutral-content px-4 sm:px-6 lg:px-12 w-full h-full flex items-center">
                                    <div className="flex flex-col md:flex-row items-center md:justify-between w-full gap-8">

                                        {/* Left Text Info */}
                                        <div className="py-6 px-6 md:px-10 shadow-md flex-1 max-w-2xl text-center md:text-left ml-36">
                                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-snug">
                                                Buying{' '}
                                                <span className="text-green-500 font-extrabold">
                                                    Course,
                                                    <br className="hidden sm:block" /> Learn & Earn
                                                </span>{' '}
                                                Best
                                            </h1>

                                            <p className="mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                                                If you want to improve yourself with less effort and in less time,
                                                these courses are just for you.
                                            </p>

                                            <Link to="/login">
                                                <button className="btn btn-success px-6 py-2 text-lg rounded-xl transition-transform transform hover:scale-105 shadow-lg hover:shadow-green-500/50">
                                                    Join Now
                                                </button>
                                            </Link>
                                        </div>

                                        {/* Right Video */}
                                        <div className="flex-1 flex md:ml-[215px]">
                                            <div className="hidden md:block w-full max-w-[620px] aspect-video rounded-md overflow-hidden shadow-lg border-2 border-white/30">
                                                <video
                                                    className="w-full h-full object-cover"
                                                    src={intro}
                                                    title="Learning Video"
                                                    controls
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Learn Easily Section */}
            <div
                className="
                    bg-black z-50
                    absolute 
                    -mt-20 sm:-mt-28 md:-mt-40 
                    ml-4 md:ml-80 
                    w-[90%] sm:w-[85%] md:max-w-7xl 
                    mx-auto 
                    text-white 
                    rounded-2xl 
                    p-6 sm:p-8 md:p-10 
                    flex flex-col md:flex-row items-center gap-6 md:gap-8
                "
            >
                {/* Left Text */}
                <div className="flex-1  text-center md:text-left">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold leading-snug">
                        Learn Easily, Achieve <br className="hidden sm:block" /> Greatly Together
                    </h2>
                    <p className="text-gray-300 mt-3 sm:mt-4 text-sm sm:text-base">
                        Structured learning paths are designed to make success accessible for
                        everyone.
                    </p>

                    <button className="mt-5 sm:mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-purple-600 hover:bg-purple-700 transition rounded-xl text-white font-medium shadow">
                        Start For Free
                    </button>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={teacher}
                        alt="Learning"
                        className="hidden md:block w-[70%] sm:w-[60%] md:w-1/2 h-auto md:rounded-bl-[100px] rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Bg;
