import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { useContext } from "react";
import { Authmainprovider } from "./provider/Provider";
import swal from 'sweetalert';


const Login = () => {
    const { signInUser}=useContext(Authmainprovider)
    const hendellogin=e =>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget)
        const email= form.get('email')
        const password= form.get('password')
        console.log(email,password);

        signInUser(email,password)
        .then(result =>{
            console.log(result.user);
            swal("Success!", "Login Successful", "success");
            e.target.reset()
        })
        .catch(error => {
            console.error(error);
            swal("Error!", "Password & Email didn't match","error");
        })
    }
    return (
    <div>
        <Navbar></Navbar>
        <div className="hero min-h-screen bg-cyan-200">
            <div className="hero-content flex-col  ">
                <div className="text-center  ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={hendellogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="my-4">Do not have an account? <Link to="/register"><button className="text-xl">Register</button></Link></p>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;