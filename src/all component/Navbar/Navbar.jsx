// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = ["Home", "About", "Course", "Challenge", "Learning Flow"];

//   return (
//     <nav className="w-full shadow-md bg-white fixed top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">

//           {/* Logo */}
//           <Link to="/" className="flex items-center font-bold text-xl text-yellow-500">
//             Knowlearge
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-8 items-center">
//             {navLinks.map((link, idx) => (
//               <li key={idx}>
//                 <NavLink
//                   to={`/${link.replace(/\s+/g, "").toLowerCase()}`}
//                   className={({ isActive }) =>
//                     `text-gray-700 hover:text-blue-500 font-medium ${
//                       isActive ? "text-blue-500" : ""
//                     }`
//                   }
//                 >
//                   {link}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>

//           {/* Buttons */}
//           <div className="hidden md:flex space-x-4">
//             <button className="px-4 py-1 rounded-full border border-gray-300 hover:bg-gray-100 transition">
//               Sign Up
//             </button>
//             <button className="px-4 py-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">
//               Sign In
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-gray-700 hover:text-blue-500"
//             >
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           <ul className="flex flex-col px-4 py-4 space-y-2">
//             {navLinks.map((link, idx) => (
//               <li key={idx}>
//                 <NavLink
//                   to={`/${link.replace(/\s+/g, "").toLowerCase()}`}
//                   className={({ isActive }) =>
//                     `block text-gray-700 hover:text-blue-500 font-medium ${
//                       isActive ? "text-blue-500" : ""
//                     }`
//                   }
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {link}
//                 </NavLink>
//               </li>
//             ))}
//             <div className="flex flex-col mt-2 space-y-2">
//               <button className="w-full px-4 py-1 rounded-full border border-gray-300 hover:bg-gray-100 transition">
//                 Sign Up
//               </button>
//               <button className="w-full px-4 py-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">
//                 Sign In
//               </button>
//             </div>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;







import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiMoon, FiSun, FiUser, FiGift } from "react-icons/fi";
import './navbar.css'

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    const navlink = (
        <>
            {[
                { name: "Home", to: "/" },
                { name: "Store", to: "/store" },
                { name: "About", to: "/about" },
                { name: "Login", to: "/login" }
            ].map((item, idx) => (
                <li
                    key={idx}
                    className="relative group font-semibold text-lg lg:text-xl transition-all duration-300"
                >
                    <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                            `pb-1 ${isActive ? "text-blue-600 font-bold" : ""}`
                        }
                    >
                        {item.name}
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                </li>
            ))}

        </>
    );

    return (
        <div className="sticky top-0 z-50">
            {/* Top banner */}
            <div className="items-center bg-indigo-500">
                <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-center  text-white gap-3">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 text-sm md:text-lg font-serif"
                    >
                        <FiGift className="text-yellow-300 text-xl" />
                        <span>Take one option, make life easy!</span>
                    </motion.div>

                    {/* Enroll Now button with spinning border */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="enroll-btn text-sm md:text-base relative"
                    >
                        <span className=""></span>
                        <span className="relative z-10">Enroll Now</span>
                    </motion.button>

                </div>
            </div>

            {/* Main navbar */}
            <nav className="backdrop-blur-lg bg-violet-200/80 dark:bg-gray-900/80 shadow-md">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex justify-between items-center py-3">
                        {/* Brand */}
                        <Link
                            to="/"
                            className="text-lg md:text-2xl font-serif font-bold text-indigo-500 hover:scale-105 transition-all duration-300"
                        >
                            Studeon-institute
                        </Link>

                        {/* Desktop Menu */}
                        <ul className="hidden lg:flex gap-8 items-center">{navlink}</ul>

                        {/* Right Side */}
                        <div className="flex items-center gap-4">
                            {/* Search */}
                            {/* <div className="hidden md:flex items-center bg-white dark:bg-gray-700 px-3 py-1 rounded-full shadow-inner">
                                <FiSearch className="text-gray-500 dark:text-gray-300" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-transparent outline-none px-2 text-sm dark:text-white"
                                />
                            </div> */}

                            {/* Dark Mode */}
                            <button
                                onClick={toggleDarkMode}
                                className="hidden md:block p-2 rounded-full hover:bg-violet-300 dark:hover:bg-gray-700 transition-all"
                            >
                                {darkMode ? <FiSun /> : <FiMoon />}
                            </button>

                            {/* Profile */}
                            <button className="hidden md:block p-2 rounded-full hover:bg-violet-300 dark:hover:bg-gray-700 transition-all">
                                <FiUser />
                            </button>

                            <Link to="/register" className="hidden md:block">
                                <button className="btn btn-outline border-green-500 text-green-500 hover:bg-green-500 hover:text-white md:text-lg lg:mr-4 transition-all duration-300">
                                    Register
                                </button>
                            </Link>

                            {/* Mobile menu button */}
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="lg:hidden p-2 rounded-md hover:bg-violet-300 dark:hover:bg-gray-700 transition-all"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu with Framer Motion */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="fixed top-0 right-0 h-full w-full bg-white dark:bg-gray-900 shadow-lg p-6 z-50 lg:hidden"
                        >
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="mb-10 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-all"
                            >
                                Close ✖
                            </button>
                            <ul className="flex flex-col gap-6">{navlink}</ul>
                            <div className="mt-8">
                                <button className="btn btn-outline border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 w-full">
                                    Register
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
};

export default Navbar;
