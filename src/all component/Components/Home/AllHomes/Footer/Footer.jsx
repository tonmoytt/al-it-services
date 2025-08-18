import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16">
            {/* Main Footer Sections */}
            <div className="max-w-7xl mx-auto px-6 lg:px-0 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* About / CTA */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-emerald-400">
                        Talk to <Link to="/login" className="hover:underline">STUDEON-INSTITUTE</Link> about <br />
                        <span className="text-white">"YOUR CAREER"</span> building needs
                    </h2>
                    <p className="text-gray-400">
                        We provide the best courses and career guidance to help you achieve your goals in the tech industry.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2">
                        <input className="px-3 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-black flex-1" type="text" placeholder="Name" />
                        <input className="px-3 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-black flex-1" type="email" placeholder="Email address" />
                        <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
                            Submit
                        </button>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-emerald-400">Quick Links</h3>
                    <ul className="flex md:grid  space-x-2 md:space-y-2 underline">
                        <li><Link to="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
                        <li><Link to="/courses" className="hover:text-purple-400 transition-colors">Courses</Link></li>
                        <li><Link to="/about" className="hover:text-purple-400 transition-colors">About </Link></li>
                        <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
                        <li><Link to="/faq" className="hover:text-purple-400 transition-colors">FAQ</Link></li>
                    </ul>
                </div>

                {/* Services / Categories */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-emerald-400">Services</h3>
                    <ul className="space-y-2 ">
                        <div className="flex md:grid justify-between ">
                            <li><Link to="/services#webdev" className="hover:text-purple-400 hover:underline transition-colors">Web Development</Link></li>
                            <li><Link to="/services#datasci" className="hover:text-purple-400 transition-colors">Data Science</Link></li>
                        </div>

                        <div className="flex md:grid justify-between  ">
                            <li><Link to="/services#design" className="hover:text-purple-400 transition-colors">UI/UX Design</Link></li>
                            <li><Link to="/services#marketing" className="hover:text-purple-400 transition-colors">Digital Marketing</Link></li>
                        </div>

                        <li><Link to="/services#ai" className="hover:text-purple-400 transition-colors hidden md:block">AI & ML</Link></li>
                    </ul>
                </div>

                {/* Newsletter / Social */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-emerald-400">Follow Us</h3>
                    <p className="text-gray-400">Subscribe to our newsletter for the latest updates and courses.</p>
                    <div className="grid md:flex  gap-4 mt-2">
                        <input className="px-3 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-black flex-1" type="email" placeholder="Email address" />
                        <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
                            Subscribe
                        </button>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"><FaFacebook /></a>
                        <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl"><FaTwitter /></a>
                        <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"><FaLinkedinIn /></a>
                        <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"><FaYoutube /></a>
                        <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <hr className="my-10 border-gray-700 mx-6 lg:mx-0" />

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 lg:px-0 gap-4 md:gap-0">
                <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
                    © 2025 All rights reserved by STUDEON-INSTITUTE
                </p>
                <p className="text-gray-400 text-sm md:text-base text-center md:text-right">
                    Designed with ❤️ by Tonmoy $ STUDEON Team
                </p>
            </div>

            <div className="h-8"></div> {/* Bottom spacing */}
        </footer>
    );
};

export default Footer;
