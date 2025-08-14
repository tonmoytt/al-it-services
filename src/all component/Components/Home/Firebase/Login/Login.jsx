import { Link } from "react-router-dom";
import { useContext } from "react";
import { Authmainprovider } from "../Authincation/Authincation";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Login = () => {
  const { signInUser,googleAuth } = useContext(Authmainprovider);

  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        Swal.fire("Success!", "Login Successful", "success");
        e.target.reset();
      })
      .catch(error => {
        console.error(error);
        Swal.fire("Error!", "Email & Password didn't match", "error");
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
    <div className="bg-gradient-to-br from-cyan-200 via-cyan-300 to-cyan-400 h-[638px] md:min-h-screen flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="bg-white shadow-2xl rounded-3xl p-8 border-4 border-transparent hover:border-cyan-400 transition-all duration-300 hover:shadow-cyan-200"
          whileHover={{ scale: 1.02 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-cyan-600 mb-6">
            Login Now!
          </h1>
          <form onSubmit={handleLogin} className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full border-2 border-gray-300 rounded-xl focus:border-cyan-500 transition-all"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block mb-1 font-semibold">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full border-2 border-gray-300 rounded-xl focus:border-cyan-500 transition-all"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-xs">Forgot password?</a>
              </label>
            </motion.div>

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
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-cyan-500 font-bold hover:underline">
                Register
              </Link>
            </p>
          </div>

           <div className="mt-8 text-center ">
                        <span className="block text-gray-500 mb-2 text-sm">Or register with</span>
                        <motion.button
                            onClick={handleGoogle}
                            className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 hover:shadow-red-300 transition-all"
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

export default Login;
