import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Authmainprovider } from "../Authincation";
import Navbar from "../../../../../Navbar/Navbar";
import Swal from "sweetalert2";



const Register = () => {
    const [password, setpassword] = useState('')
    const { createUser, googleAuth } = useContext(Authmainprovider)
    const hendelregister = e => {
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        // const password=e.target.password.value
        console.log(name,photo,email, password);

        setpassword('')
        if (password.length < 6) {
            setpassword('password should be at least 6 character')
        }
        else if (!/[0-9]/.test(password)) {
            setpassword('Please adding Number character')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setpassword('Please adding at least 1 uppercase')
            return;
            
        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setpassword('Please adding at least one special character')
            return;
        }


        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal("Success!", "Successfully registered!", "success");
                e.target.reset()

            })
            .catch(error => {
                console.error(error)
            })


    }

    const Hendelbutton = () => {
        googleAuth()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div className="bg-emerald-200">
       
            <div className="hero min-h-screen bg-green-200">
                <div className="hero-content flex-col  ">
                    <div className="text-center  ">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={hendelregister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="name" placeholder="Photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                            <p className="mt-4">Already have an account ? <Link to="/login"><button className="text-2xl">Login</button></Link></p>
                        </form>

                        <div className="text-center mb-4">
                            <span className="mx-4 text-xl">
                                Registration with
                            </span>
                            <button onClick={Hendelbutton} className="btn btn-success btn-ml-2"> Google</button>

                        </div>

                    </div>
                    <div className='bg-red-200 rounded-lg'>
                        {
                            password && <p className='mt-4 px-4 py-2 font-semibold text-2xl '> {password}</p>
                        }
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Register;