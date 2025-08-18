import React from "react";
import { FaChalkboardTeacher, FaUsers, FaGlobe, FaVideo, FaUserTie } from "react-icons/fa";

const Specillaty = () => {
    return (
        <div className="w-full max-w-7xl mx-auto py-16 px-6">
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
                {/* Left Side */}

                <div className="
               grid md:grid-cols-2 items-center justify-between">


                    <div>
                        <h5 className="text-sm font-medium text-purple-600">Why choose us</h5>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                            Why Learners <span className="text-purple-600">Trust Us</span> to <br />
                            Achieve Their Goals
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-500 mt-3">
                            We stand out with unmatched expertise, personalized guidance, and  <br />measurable success.
                        </p>

                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5 items-stretch">
                    {/* Left Side (narrow) */}
                    <div className="space-y-6 bg-white rounded-2xl p-6 shadow h-full flex flex-col justify-center md:col-span-1">
                        <div className="flex items-center bg-blue-50 rounded-xl p-6">
                            <FaChalkboardTeacher className="text-blue-500 text-3xl mr-4" />
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">10+</h3>
                                <p className="text-gray-500 mt-2">Years of Industry Experience</p>
                            </div>
                        </div>

                        <div className="flex items-center bg-purple-50 rounded-xl p-6">
                            <FaUsers className="text-purple-500 text-3xl mr-4" />
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">5,000+</h3>
                                <p className="text-gray-500">Students Empowered Worldwide</p>
                            </div>
                        </div>

                        <div className="flex items-center bg-yellow-50 rounded-xl p-6">
                            <FaUserTie className="text-yellow-500 text-3xl mr-4" />
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">50+</h3>
                                <p className="text-gray-500">Expert Mentors</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side (wide) */}
                    <div className="bg-purple-50 rounded-2xl p-8 h-full flex flex-col md:col-span-2">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">What Makes Us Special?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
                            <div className="bg-white rounded-xl p-5 shadow hover:shadow-md transition">
                                <FaChalkboardTeacher className="text-blue-500 text-2xl mb-3" />
                                <h4 className="text-lg font-semibold text-gray-900">Customized Learning</h4>
                                <p className="text-gray-500 text-sm mt-1">
                                    Tailored programs that adapt to your goals and pace.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-5 shadow hover:shadow-md transition">
                                <FaVideo className="text-purple-500 text-2xl mb-3" />
                                <h4 className="text-lg font-semibold text-gray-900">Live & Recorded Classes</h4>
                                <p className="text-gray-500 text-sm mt-1">
                                    Engage in live discussions or learn at your convenience.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-5 shadow hover:shadow-md transition">
                                <FaUserTie className="text-yellow-500 text-2xl mb-3" />
                                <h4 className="text-lg font-semibold text-gray-900">Experienced Mentors</h4>
                                <p className="text-gray-500 text-sm mt-1">
                                    Learn from industry leaders with a track record of success.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-5 shadow hover:shadow-md transition">
                                <FaGlobe className="text-blue-500 text-2xl mb-3" />
                                <h4 className="text-lg font-semibold text-gray-900">Global Community</h4>
                                <p className="text-gray-500 text-sm mt-1">
                                    Be part of a supportive network of learners worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Specillaty;
