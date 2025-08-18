import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authmainprovider } from "../Authincation";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUsers, FaRocket } from "react-icons/fa";

const Register = () => {
  const [passwordMsg, setPasswordMsg] = useState("");
  const { createUser, googleAuth } = useContext(Authmainprovider);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
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
      .then(() => {
        Swal.fire("Success!", "Successfully registered!", "success");
        e.target.reset();
        navigate("/login");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Swal.fire("Oops!", "This email is already registered!", "error");
        } else {
          Swal.fire("Error!", error.message, "error");
        }
      });
  };

  const handleGoogle = () => {
    googleAuth()
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/qL6r4y6L/wallpaperflare-com-wallpaper-1.jpg')",
      }}
    >
      <div className="relative z-10 w-full max-w-6xl rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden backdrop-blur-md bg-gradient-to-br from-green-400/80 via-emerald-500/70 to-green-700/80 border border-white/20">
        {/* ---------- Left Info Section ---------- */}
        <motion.div
          className="hidden md:flex flex-col justify-center p-12 text-white space-y-6 bg-gradient-to-b from-black/40 via-black/30 to-black/50"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold leading-tight">
            Join <span className="text-green-300">Learn & Earn</span> Today 🚀
          </h1>
          <p className="text-gray-200 text-lg">
            Build your future with world-class courses, expert guidance, and a
            community of learners who help you succeed.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <FaGraduationCap className="text-green-300 text-3xl" />
              <span className="font-semibold text-lg">Expert Mentors & Instructors</span>
            </div>
            <div className="flex items-center gap-3">
              <FaUsers className="text-green-300 text-3xl" />
              <span className="font-semibold text-lg">Collaborative Community</span>
            </div>
            <div className="flex items-center gap-3">
              <FaRocket className="text-green-300 text-3xl" />
              <span className="font-semibold text-lg">Boost Your Career Growth</span>
            </div>
          </div>
        </motion.div>

        {/* ---------- Right Form Section ---------- */}
        <motion.div
          className="p-10 md:p-14 flex flex-col justify-center bg-white/90 backdrop-blur-lg"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-600 mb-8 drop-shadow-lg">
            Register Now!
          </h2>
          <form onSubmit={handleRegister} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 outline-none transition-all"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 outline-none transition-all"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 outline-none transition-all"
              required
            />
            {passwordMsg && (
              <p className="text-red-500 text-sm font-medium">{passwordMsg}</p>
            )}

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white py-3 rounded-xl font-bold shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-700 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-green-600 font-bold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>

          <div className="mt-8 text-center">
            <span className="block text-gray-500 mb-3 text-sm">
              Or register with
            </span>
            <motion.button
              onClick={handleGoogle}
              className="px-6 py-3 bg-red-500 w-full text-white rounded-xl shadow-lg hover:bg-red-600 hover:shadow-red-300 transition-all font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Google
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
