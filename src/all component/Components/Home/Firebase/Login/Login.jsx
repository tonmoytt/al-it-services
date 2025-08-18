import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Authmainprovider } from "../Authincation/Authincation";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Login = () => {
  const { signInUser, googleAuth } = useContext(Authmainprovider);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then(() => {
        Swal.fire("Success!", "Login Successful", "success");
        e.target.reset();
        navigate("/");
      })
      .catch(() => {
        Swal.fire("Error!", "Email & Password didn't match", "error");
      });
  };

  const handleGoogle = () => {
    googleAuth()
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/PvH83qps/bg14.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute "></div>

      {/* ---------- Header Section ---------- */}
      <motion.div
        className="relative z-10 text-center pt-12 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="hidden md:block">


          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Welcome Back to{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
              Learn & Earn
            </span>
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Access premium courses, upgrade your skills, and accelerate your career.
            Log in today and continue your success journey 🚀
          </p>
        </div>
      </motion.div>

      {/* ---------- Login Form Section ---------- */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 md:px-8">
        <motion.div
          className="w-full max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="shadow-2xl shadow-cyan-400 bg-gradient-to-r from-pink-500 via-purple-300 via-indigo-200 via-cyan-400 via-teal-200 to-green-100 bg-opacity-95 rounded-3xl p-10 border-4 border-transparent hover:border-cyan-400 transition-all duration-300 hover:shadow-cyan-200"
            whileHover={{ scale: 1.01 }}
          >
            <h1 className="text-4xl font-extrabold text-center text-cyan-700 mb-8 drop-shadow">
              Login Now!
            </h1>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block mb-1 font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full border-2 border-gray-300 rounded-xl py-3 px-4 focus:border-cyan-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full border-2 border-gray-300 rounded-xl py-3 px-4 focus:border-cyan-500 transition-all"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-xs">
                    Forgot password?
                  </a>
                </label>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-cyan-300 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Login
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-700 text-sm">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-cyan-600 font-bold hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>

            <div className="mt-8 text-center">
              <span className="block text-gray-600 mb-2 text-sm">
                Or sign in with
              </span>
              <motion.button
                onClick={handleGoogle}
                className="px-4 py-3 bg-red-500 w-full text-white rounded-lg shadow-md hover:bg-red-600 hover:shadow-red-300 transition-all font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Google
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
