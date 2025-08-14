import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Authmainprovider } from "../Authincation";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Register = () => {
    const [passwordMsg, setPasswordMsg] = useState("");
    const { createUser, googleAuth } = useContext(Authmainprovider);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        // const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        setPasswordMsg("");

        if (password.length < 6) {
            setPasswordMsg("Password should be at least 6 characters");
            return;
        }
        if (!/[0-9]/.test(password)) {
            setPasswordMsg("Please include at least one number");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordMsg("Please include at least one uppercase letter");
            return;
        }
        if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setPasswordMsg("Please include at least one special character");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire("Success!", "Successfully registered!", "success");
                e.target.reset();
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleGoogle = () => {
        googleAuth()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="bg-gradient-to-br from-green-200 via-emerald-200 to-green-300 md:min-h-screen flex items-center justify-center p-4">
            <motion.div
                className="w-full max-w-md"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="bg-white shadow-2xl rounded-3xl p-8 border-4 border-transparent hover:border-green-400 transition-all duration-300 hover:shadow-green-200"
                    whileHover={{ scale: 1.02 }}
                >
                    <h1 className="text-3xl md:text-4xl font-extrabold text-center text-green-600 mb-6">
                        Register Now!
                    </h1>
                    <form onSubmit={handleRegister} className="space-y-5">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <label className="block mb-1 font-semibold">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered w-full border-2 border-gray-300 rounded-xl focus:border-green-500 transition-all"
                                required
                            />
                        </motion.div>

                        {/* <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <label className="block mb-1 font-semibold">Photo URL</label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Photo URL"
                                className="input input-bordered w-full border-2 border-gray-300 rounded-xl focus:border-green-500 transition-all"
                                required
                            />
                        </motion.div> */}

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <label className="block mb-1 font-semibold">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered w-full border-2 border-gray-300 rounded-xl focus:border-green-500 transition-all"
                                required
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <label className="block mb-1 font-semibold">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered w-full border-2 border-gray-300 rounded-xl focus:border-green-500 transition-all"
                                required
                            />
                        </motion.div>

                        {passwordMsg && (
                            <p className="text-red-500 text-sm font-medium">{passwordMsg}</p>
                        )}

                        <motion.button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-green-300 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Submit
                        </motion.button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600 text-sm">
                            Already have an account?{" "}
                            <Link to="/login" className="text-green-500 font-bold hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>

                    <div className="mt-6 text-center ">
                        <span className="block text-gray-500 mb-2 text-sm">Or register with</span>
                        <motion.button
                            onClick={handleGoogle}
                            className="px-6 py-3 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 hover:shadow-red-300 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Google
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Register;
