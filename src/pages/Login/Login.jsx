import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle , FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const {signIn}=useContext(AuthContext);
    const [showPassword, setShowPassword]=useState(false);

    const navigate=useNavigate();
    const location=useLocation();

    const from=location.state?.from?.pathname || "/";

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate(from,{replace:true});
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        className="input input-bordered pr-10"
                                        name="password"
                                    />
                                    <div
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </div>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                        
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p className="my-4 text-center">New to SportsZone Academy? <Link className="font-bold text-orange-500" to='/signup'>Sign Up</Link> </p>
                            <div className="divider"></div>
                            <div className="flex justify-center mt-4">
                                <FaGoogle size={24} />
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;